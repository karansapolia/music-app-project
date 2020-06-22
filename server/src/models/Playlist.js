import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    songs: {
      list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'song' }],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Playlist = mongoose.model('playlist', playlistSchema);

export default Playlist;
