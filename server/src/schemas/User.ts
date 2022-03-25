import { Schema, model } from 'mongoose';

const User = new Schema({
  _id: { type: String, unique: true, required: true },
  userName: {
    type: String,
    unique: true,
    required: true,
    collation: { caseLevel: true },
  },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  // avatar: { type: }
});

export default model('User', User);
