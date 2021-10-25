import { Schema, model } from 'mongoose';

const Document = new Schema({
  _id: String,
  data: Object,
});

const MongoDocument = model('MongoDocument', Document);

export const findOrCreate = async (id) => {
  if (id == null) return;
  const document = await MongoDocument.findById(id);
  if (document) return document;
  return MongoDocument.create({ _id: id, data: '' });
};

export default MongoDocument;
