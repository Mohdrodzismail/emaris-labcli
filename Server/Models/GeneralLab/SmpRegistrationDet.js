const Mssql = require('mssql');
const Schema = Mssql.schema;

const Smp_Registration_Det_Schema = new Schema({
    SampleID: {tyepe: Number, require: true },
    BranchID: {tyepe: String, require: true },
    Reg_Type: {tyepe: Number, require: true },
    Patient_Type: {tyepe: String, require: true },
    RegistrationDate: {tyepe: Date, require: true },
    PatientID: {tyepe: Number, require: true },
    LabNo: {tyepe: String, require: true },
    SenderID: {tyepe: Number, require: true },
    LabID: {tyepe: Number, require: true }
});

module.exports = Mssql.model('Smp_Registration_Det', Smp_Registration_Det_Schema);