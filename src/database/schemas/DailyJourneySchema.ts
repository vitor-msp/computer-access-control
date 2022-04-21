import { Document, Schema, Model, model } from "mongoose";

// export interface IDailyJourneyModel extends IDailyJourney, Document {}

export const DailyJourneySchema = new Schema(
  {
    dayOfWeek: {
      type: String,
      required: true,
    },
    entryTime: {
      type: Date,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
  }
);

// export const DailyJourneyModel: Model<IDailyJourneyModel> =
//   model<IDailyJourneyModel>("DailyJourney", DailyJourneySchema);
