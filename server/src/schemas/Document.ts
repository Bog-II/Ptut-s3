import { Schema, model } from 'mongoose';

// Role:
// 0 -> Lecteur
// 1 -> Editeur
const Document = new Schema({
  _id: { type: String, unique: true, required: true },
  data: {
    type: Object,
    required: true,
  },
  documentName: { type: String, required: true },
  users: {
    type: [
      {
        userId: String,
        role: Number,
      },
    ],
    required: true,
  },
  creationDate: { type: Date, required: true, default: Date.now },
  lastModificationDate: { type: Date, required: true, default: Date.now },
});

export default model('Document', Document);