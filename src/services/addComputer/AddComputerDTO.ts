import { Departments } from "../../model/enums/Departments"

export interface IAddComputerDTO {
    hostname: string,
    department: Departments
}