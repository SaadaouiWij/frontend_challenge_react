const mongoose = require("mongoose");

const { Schema } = mongoose;

const phoneSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    color: {
        type: String,
        trim: true,
        required: true,
      },
    price: {
      type: String,
      required: true,
      
    },
    image: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Phone", phoneSchema);
