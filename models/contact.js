import { Schema } from "mongoose";
import mongoose from "mongoose";

const contactSchema = new Schema ({
  email: {
    type: String,
    required: [true, "Ingresa un correo electrónico"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Correo inválido"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model ('Contact', contactSchema);

export default Contact;
