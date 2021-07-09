const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduseSchema = new Schema(
  {
    titlu: {
      type: String,
      required: true,
    },
    descriere: {
      type: String,
      required: true,
    },
    categorii: {
      type: String,
      default: null,
    },
    pret: {
      type: Number,
      default: 0,
    },
    imagine: {
      type: String,
      default: null,
    },
    utilizator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    data: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJson: {
      virtuals: true,
    },
  }
);

ProduseSchema.virtual("img_url").get(function () {
  return `http:localhost:8080/files/${this.img}`;
});

module.exports = mongoose.model("Produse", ProduseSchema);
