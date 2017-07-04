import Model from './Model';

export default class DAO {
    async callDAO(_key, ...params) {
        let result;
        const keyFunc = {
            "addDiceLog": promisedAddDiceLog,
            "findRecent10DiceLog": promisedFindRecent10DiceLog
        };
        try{
            result = await keyFunc[_key](params);
            return result;
        } catch(e) {
            return e;
        }
    }
}
async function promisedAddDiceLog([_date="", _result=""] = {}) {
    console.log(_date);
    console.log(_result);
    return new Promise((resolve, reject) => {
        let diceLog = new Model.DiceLog({
            date: _date,
            result: _result
        });
        diceLog.save((err)=>{
            if (err) {
                reject(err);
            } else {
                resolve("OK");
            }
        });
    });
}

async function promisedFindRecent10DiceLog() {
    return new Promise((resolve, reject) => {
        Model.DiceLog.find({ date: { $ne: "" } }).sort({'_id': "desc"}).limit(5).exec(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
}