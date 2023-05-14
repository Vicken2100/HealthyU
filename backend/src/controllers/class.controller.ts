import { Request, Response } from "express";
import {
  ErrorResponse,
  List_Payload,
  ResponseStructur,
  SuccessResponse,
} from "../dto/default.dto";
import { Controller } from "./base.controller";
import { getListOptions } from "../utils/RequestParser";
import AuthMiddelware from "../middelware/AuthMiddelware";
import { validateClass } from "../middelware/Validator";
import { ClassService_Interface } from "../contract/ServiceContract";
import ClassService from "../services/class.service";
import {
  ClassCreated_Payload,
  SubClassCreated_Payload,
} from "../dto/class.dto";
import CryptoSecure from "../utils/CryptoSecure";
import * as fs from "fs-extra";

interface UploadedFile {
  mv: (path: string, callback: (err?: unknown) => void) => void;
  mimetype: string;
}

export class ClassController extends Controller {
  private readonly service: ClassService_Interface = new ClassService();
  constructor() {
    super("Class");
  }

  init = (): void => {
    // Init Router
    this.router.get("/", this.getAllClass);
    this.router.post(
      "/",
      AuthMiddelware.authGuru,
      validateClass.validateClass,
      this.postCreate
    );

    this.router.get("/subClass", this.getAllSubClass);

    this.router.post(
      "/subClass",
      AuthMiddelware.authGuru,
      validateClass.validateSubClass,
      this.postSubCreate
    );

    this.router.delete("/subClass/:xid", AuthMiddelware.authGuru, this.deleteMateri);
  };

  deleteMateri = async (req: Request, res: Response) : Promise<Response> => {
    const { xid } = req.params
    let response: ResponseStructur;
    try {
      await this.service.deleteMateri(xid);
      response = SuccessResponse.deleteResponse();
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }
    return res.status(response.status).send(response);
  }

  getAllClass = async (req: Request, res: Response): Promise<Response> => {
    const payload = getListOptions(req) as List_Payload;
    let response: ResponseStructur;
    try {
      const value = await this.service.findAllClass(payload);
      response = SuccessResponse.successRequestResponse(value);
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }
    return res.status(response.status).send(response);
  };

  getAllSubClass = async (req: Request, res: Response): Promise<Response> => {
    const payload = getListOptions(req) as List_Payload;
    let response: ResponseStructur;
    try {
      const value = await this.service.findAllSubClass(payload);
      response = SuccessResponse.successRequestResponse(value);
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }
    return res.status(response.status).send(response);
  };

  postCreate = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body as ClassCreated_Payload;

    let response: ResponseStructur;
    try {
      const value = await this.service.create(payload);
      response = SuccessResponse.insertResponse(value);
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }
    return res.status(response.status).send(response);
  };

  postSubCreate = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body as SubClassCreated_Payload;
    const file = req.files.image as UploadedFile;
    const materi = req.files.materi as UploadedFile;
    const fileExt = file.mimetype.split("/")[1];

    const filename = `${Date.now()}_${CryptoSecure.secureRandomString(
      20
    )}.${fileExt}`;
    const materiExt = materi.mimetype.split("/")[1];
    const materiName = `${Date.now()}_${CryptoSecure.secureRandomString(
      20
    )}.${materiExt}`;
    let response: ResponseStructur;
    try {
      // Move file to public/materi directory
      const path =
        (process.env.NODE_ENV as string) === "development" ? "src" : "build";

      fs.ensureDir(`./${path}/public`, { mode: 0o755 })
        .then(() => {
          console.log("Direktori berhasil dibuat atau sudah ada");
        })
        .catch((err: Error) => {
          console.error("Terjadi kesalahan:", err);
        });

      fs.ensureDir(`./${path}/public/materi`, { mode: 0o755 })
        .then(() => {
          console.log("Direktori berhasil dibuat atau sudah ada");
        })
        .catch((err: Error) => {
          console.error("Terjadi kesalahan:", err);
        });

      fs.ensureDir(`./${path}/public/image`, { mode: 0o755 })
        .then(() => {
          console.log("Direktori berhasil dibuat atau sudah ada");
        })
        .catch((err: Error) => {
          console.error("Terjadi kesalahan:", err);
        });

      file.mv(`./${path}/public/image/${filename}`, (err?: unknown) => {
        if (err) {
          return;
        }
      });
      materi.mv(`./${path}/public/materi/${materiName}`, (err?: unknown) => {
        if (err) {
          console.log(err);
          return;
        }
      });
      payload.image = filename;
      payload.materi = materiName;
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }

    try {
      const value = await this.service.createdSubClass(payload);
      response = SuccessResponse.insertResponse(value);
    } catch (error) {
      response = ErrorResponse.errorInternalServer(error);
    }
    return res.status(response.status).send(response);
  };
}
