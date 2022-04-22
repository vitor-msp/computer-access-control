import { Document, Schema, Model, model } from "mongoose";

import { IUser } from "../../interfaces/IUser";
import { DailyJourneySchema } from "./DailyJourneySchema";

export interface IUserModel extends IUser, Document {
  id?: any;
}

const HostnameSchema = new Schema({
  hostname: {
    type: String,
    required: true,
  },
});

export const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    computers: {
      type: [HostnameSchema],
      required: false,
    },
    weeklyJourney: {
      type: [DailyJourneySchema],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<IUserModel> = model<IUserModel>(
  "User",
  UserSchema
);
