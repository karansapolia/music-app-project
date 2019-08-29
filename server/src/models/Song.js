import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Song = mongoose.model('song', songSchema);

export { songSchema, Song };
