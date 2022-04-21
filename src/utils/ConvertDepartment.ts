import { Departments } from "../model/enums/Departments";

export abstract class ConvertDepartment {
  public static stringToEnum(value: string): Departments {
    let ret;
    switch (value) {
      case "COMPRAS":
        ret = Departments.COMPRAS;
        break;
      case "FINANCEIRO":
        ret = Departments.FINANCEIRO;
        break;
      case "LOGISTICA":
        ret = Departments.LOGISTICA;
        break;
      case "INFORMATICA":
        ret = Departments.INFORMATICA;
        break;
      default:
        throw new Error(`Invalid department!`);
    }
    return ret;
  }
}
