import { Document, Schema, Model, model } from "mongoose";

import { IComputer } from "../../interfaces/IComputer";

export interface IComputerModel extends IComputer, Document {}

export const ComputerSchema = new Schema(
  {
    hostname: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ComputerModel: Model<IComputerModel> = model<IComputerModel>(
  "Computer",
  ComputerSchema
);
