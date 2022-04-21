import { Document, Schema, Model, model } from "mongoose";

import { IUser } from "../../interfaces/IUser";

export interface IUserModel extends IUser, Document {
  id?: any;
}

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    //     weeklyJourney: [
    //     { dayOfWeek: string; entryTime: number; departureTime: number }
    //   ];
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<IUserModel> = model<IUserModel>(
  "User",
  UserSchema
);
