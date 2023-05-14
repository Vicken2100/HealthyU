import { ClassRepository_Interface } from "../contract/RepositoryContract";
import { ClassService_Interface } from "../contract/ServiceContract";
import {
  ClassAtrribute,
  ClassAtrributeCreation,
  ClassJoinAttribute,
} from "../db/models/class";
import {
  SubClassAtrribute,
  SubClassAtrributeCreation,
} from "../db/models/subclass";
import { Auth_Token } from "../dto/auth.dto";
import {
  ClassCreated_Payload,
  SubClassCreated_Payload,
} from "../dto/class.dto";
import { List_Payload } from "../dto/default.dto";
import ClassRepository from "../repository/class.repository";
import CryptoSecure from "../utils/CryptoSecure";

export default class ClassService implements ClassService_Interface {
  private readonly classRepository: ClassRepository_Interface =
    ClassRepository.getInstance();

  findAllClass = async (
    payload: List_Payload
  ): Promise<Array<ClassJoinAttribute>> => {
    const value = await this.classRepository.findAllClass(payload);
    return value;
  };

  findAllSubClass = async(payload: List_Payload): Promise<Array<SubClassAtrribute>> =>{
    const value = await this.classRepository.findSubClassByClass(payload);
    return value;
  }

  deleteMateri = async(xid: string): Promise<void> =>{
    await this.classRepository.deleteMateri(xid);
  }

  create = async (payload: ClassCreated_Payload): Promise<ClassAtrribute> => {
    const value = await this.classRepository.findClass(payload.name);
    if (value) {
      throw new Error("Conflik");
    }

    const xid = CryptoSecure.secureRandomString(20);
    const createdValue: ClassAtrributeCreation = {
      xid,
      name: payload.name,
    };

    const created = this.classRepository.insertClass(createdValue);

    return created;
  };

  createdSubClass = async (
    payload: SubClassCreated_Payload
  ): Promise<SubClassAtrribute> => {
    const value = await this.classRepository.findSubClass(payload.name);

    if (value) {
      throw new Error("Conflik");
    }

    const xid = CryptoSecure.secureRandomString(20);
    const createdValue: SubClassAtrributeCreation = {
      xid,
      name: payload.name,
      class: payload.class,
      image: payload.image,
      materi: payload.materi,
    };
    const created = this.classRepository.insertSubClass(createdValue);
    return created;
  };
}
