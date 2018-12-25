const Mssql = require('mssql');
const Schema = Mssql.schema;

const userSchema = new Schema({
    username: {
        type: String,
        min: [4,'too short, min is 4'],
        max: [32, 'too long, mas is 32']
    },
    email: {
        type: String,
        min: [4,'too short, min is 4'],
        max: [32, 'too long, mas is 32'],
        unique: true,
        lowercase: true,
        required: 'email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4,'too short, min is 4'],
        max: [32, 'too long, mas is 32'],
        required: 'password is required'
    }
});

module.exports = Mssql.model('User', userSchema);