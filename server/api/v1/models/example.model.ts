import Mongoose from 'mongoose';

const Schema = new Mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
});

const Model = Mongoose.model('example', Schema);

Model.syncIndexes();

export default Model;
