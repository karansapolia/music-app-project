import mongoose from 'mongoose';

let closeErrorCallback;

const connectDB = async url => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('Successfully connected to database.');
  } catch (error) {
    console.log('Error connecting mongoose instance');
    console.error(error);
  }

  mongoose.connection.on('error', error => {
    console.log('Error connecting mongoose instance');
    console.error(error);
  });

  mongoose.connection.on('connected', async () => {
    console.log('Successfully connected to database');
  });

  mongoose.connection.on('reconnectFailed', () => {
    console.error('Reconnecting to MongoDB failed');
    if ( typeof closeErrorCallback === 'function') {
      closeErrorCallback();
    }
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });
};

const closeDBConnections = callback => mongoose.connection.close(callback);

const connectionError = callback => {
  closeErrorCallback = callback;
};

const connectionFunctions = {
  connectDB,
  closeDBConnections,
  connectionError,
};

export default connectionFunctions;
