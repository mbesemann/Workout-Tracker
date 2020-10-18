const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => Date.now(),
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        // workout: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Workout"
        // }
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.duration;
  return this.exercises.reduce(reducer, 0);
});
// exercises: {
//   type: Schema.Types.ObjectId,
//   ref: "Exercise"
// }

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
