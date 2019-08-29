import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('user', userSchema);

export default User;
