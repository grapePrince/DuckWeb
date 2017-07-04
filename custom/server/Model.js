import mongoose from 'mongoose';
//db configuration
let dbUrl = "mongodb://localhost/util";
mongoose.connect(dbUrl);
mongoose.Promise = Promise;

let DiceLog = mongoose.model('DiceLog', {
    date: String,
    result: String
});

let Model = {
    DiceLog : DiceLog
};

export default Model;