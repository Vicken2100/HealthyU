import { ClassRepository_Interface } from "../contract/RepositoryContract";
import ClassModel, {
  ClassAtrribute,
  ClassAtrributeCreation,
  ClassJoinAttribute,
} from "../db/models/class";
import sequelize, { } from "sequelize";
import SubClass, {
  SubClassAtrribute,
  SubClassAtrributeCreation,
} from "../db/models/subclass";
import { List_Payload } from "../dto/default.dto";
import { Auth_Token } from "../dto/auth.dto";

class ClassRepository implements ClassRepository_Interface {
  private static instance: ClassRepository;

  public static getInstance(): ClassRepository {
    if (!ClassRepository.instance) {
      ClassRepository.instance = new ClassRepository();
    }
    return ClassRepository.instance;
  }

  insertClass = async (
    payload: ClassAtrributeCreation
  ): Promise<ClassAtrribute> => {
    return await ClassModel.create(payload);
  };

  findClass = async (name: string): Promise<ClassAtrribute | null> => {
    return await ClassModel.findOne({ where: { name } });
  };

  findAllClass = async (
    payload: List_Payload
  ): Promise<Array<ClassJoinAttribute>> => {
    const limit = payload.limit;
    const offset = payload.skip;

    const { order } = this.parseSortBy(payload.sortBy);

    const result: Array<ClassJoinAttribute> = await ClassModel.findAll({
      include: [
        {
          model: SubClass,
          required: false,
        },
      ],
      limit,
      offset,
      order,
    });
    return result;
  };

  findSubClass = async (name: string): Promise<SubClassAtrribute | null> => {
    return await SubClass.findOne({ where: { name } });
  };

  insertSubClass = async (
    payload: SubClassAtrributeCreation
  ): Promise<SubClassAtrribute> => {
    return await SubClass.create(payload);
  };

  findSubClassByClass = async (
    payload: List_Payload
  ): Promise<Array<SubClassAtrribute>> => {
    const filter = payload.filters;

    const where: sequelize.WhereOptions<SubClassAtrribute> = {};

    if(filter.class){
      where.class = filter.class;
    }

    return await SubClass.findAll({
      where,
    });
  };


  deleteMateri = async(xid: string) : Promise<void> =>{
    await SubClass.destroy({
      where: {
        xid
      }
    })
  }


  parseSortBy = (
    sortBy: string
  ): { sortBy: string; order: sequelize.Order } => {
    // determine sorting option
    let order: sequelize.Order;
    switch (sortBy) {
      case "createdAt-asc": {
        order = [["createdAt", "ASC"]];
        break;
      }
      case "createdAt-desc": {
        order = [["createdAt", "DESC"]];
        break;
      }
      case "updatedAt-asc": {
        order = [["updatedAt", "ASC"]];
        break;
      }
      case "updatedAt-desc": {
        order = [["updatedAt", "DESC"]];
        break;
      }
      default: {
        order = [["createdAt", "DESC"]];
        sortBy = "createdAt-desc";
      }
    }

    return { sortBy, order };
  };
}

export default ClassRepository;
