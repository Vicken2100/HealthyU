import { ClassAtrribute, ClassJoinAttribute } from "../db/models/class";
import { SubClassAtrribute } from "../db/models/subclass";
import { UsersAtrribute } from "../db/models/users";
import {
  Auth_Payload,
  Auth_Result,
  Auth_Token,
  RegisterAuth_Payload,
} from "../dto/auth.dto";
import {
  ClassCreated_Payload,
  SubClassCreated_Payload,
} from "../dto/class.dto";
import { List_Payload } from "../dto/default.dto";

export interface AuthServices_Interface {
  login(payload: Auth_Payload): Promise<Auth_Result>;

  register(payload: RegisterAuth_Payload): Promise<UsersAtrribute>;
}

export interface ClassService_Interface {
  findAllClass(payload: List_Payload): Promise<Array<ClassJoinAttribute>>;

  create(payload: ClassCreated_Payload): Promise<ClassAtrribute>;

  createdSubClass(payload: SubClassCreated_Payload): Promise<SubClassAtrribute>;

  findAllSubClass(payload: List_Payload): Promise<Array<SubClassAtrribute>>;

  deleteMateri(xid: string): Promise<void>;
}
