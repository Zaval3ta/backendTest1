import mongoose, { Schema } from "mongoose";
import { ITrucks } from "types/trucksTypes";

const TrucksSchema: Schema = new Schema<ITrucks>(
  {
    year: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    plates: {
      type: String,
      required: true,
      unique: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const TrucksModel = mongoose.model<ITrucks>("Trucks", TrucksSchema);