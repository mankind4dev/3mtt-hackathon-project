import mongoose from "mongoose";

 
const userSchema = new mongoose.Schema({
  userId:{
    type: String,
    reqired: true,
    unique: true
  },
  title: {
    type: String,
    enum: ['Mr', 'Mrs', 'Miss'],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    enum: [
      '15-20', '21-25', '26-30', '31-35', '36-40', '41-45',
      '46-50', '51-55', '56-60', '61-65', '66-70', '71-100',
    ],
    required: true,
  },
  relationship: {
    type: String,
    enum: ['single', 'married', 'separated', 'widow'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  phoneNumber: {
    type: String,
    match: /^\+234\d{10}$/,
    required: true,
  },
  email: {
    type: String,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  idType: {
    type: String,
    enum: ['NIN', 'BVN'],
    required: true,
  },
  ninNumber: {
    type: String,
    required: true,
    unique: true
  },
});

 
const UserAgents = mongoose.model('Agent', userSchema);

 export default UserAgents;
