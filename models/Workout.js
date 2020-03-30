'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
          },
          exercises: [
            {
              type: {
                type: String,
                trim: true,
                required: "enter type"
              },
              name: {
                type: String,
                trim: true,
                required: "enter name"
              },
              weight: {
                type: Number
              },
              sets: {
                type: Number
              },
              reps: {
                type: Number
              },
              duration: {
                type: Number,
                required: "enter duration"
              },
              distance: {
                type: Number
              }
            }
          ]
        },
      );

module.exports = mongoose.model(`Workout`, WorkoutSchema);
