import { Schema, model } from 'mongoose';
import User from './User';

const Document = new Schema({
  _id: { type: String, unique: true, required: true },
  data: {
    type: Object,
    required: true,
  },
  documentName: { type: String, required: true },
  documentOwnerId: { type: String, required: true },
  users: {
    type: [
      {
        // Role:
        // 0 -> Lecteur
        // 1 -> Editeur
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
