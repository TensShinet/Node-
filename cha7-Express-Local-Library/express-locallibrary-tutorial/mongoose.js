const log = console.log.bind(console)

const __main = () => {
    var mongoose = require('mongoose');

    //Set up default mongoose connection
    var mongoDB = 'mongodb://tenshine:qazwsxedc123@ds143451.mlab.com:43451/tenshine';
    mongoose.connect(mongoDB);
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

__main()
