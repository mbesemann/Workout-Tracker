const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Number
  },
  distance: {
      type: Number
  },
  weight: {
      type: Number
  },
  reps: {
      type: Number
  },
  sets: {
      type: Number
  },
  workout: {
      type: Schema.Types.ObjectId,
      ref: "Workout"
  }
});

const Exercise = mongoose.model("Workout", exerciseSchema);

module.exports = Exercise;
