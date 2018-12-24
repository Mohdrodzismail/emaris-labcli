const { poolPromise } = require('../../Data/db');

exports.SelectAll = async (req, res) => {
    try {
      const pool = await poolPromise
      const result = await pool.request()
            .query('Select top 10 * FROM [WWLIS].[dbo].[Smp_Registration_Det]')
/*           .input('input_parameter', sql.Int, req.query.input_parameter)
          .query('select * from mytable where id = @input_parameter')     */  
  
      res.json(result.recordset)
    } catch (err) {
      res.status(500)
      res.send(err.message)
    }
  };

  exports.SelectByLabNo = async (req, res) => {
    try {
      //const strLabNo = req.params.LabNo;
      const pool = await poolPromise
      const result = await pool.request()
            .input('LabNo', req.params.LabNo)
            .query('Select * from [WWLIS].[dbo].[Smp_Registration_Det] WHERE Labno=@LabNo')
      res.json(result.recordset)
    } catch (err) {
      res.status(500)
      res.send(err.message)
    }
  };
  exports.UpdateBySampleID = async (req, res) => {
      const { SampleID, DoctorID } = req.body;
    try {
      const pool = await poolPromise
      const result = await pool.request()
            .input('SampleID', SampleID)
            .input('DoctorID', DoctorID)
            .query('Update [WWLIS].[dbo].[Smp_Registration_Det] SET DoctorID=@DoctorID WHERE SampleID=@SampleID')
      res.json({'Updated': true, 'Message': 'Successfully Updated SampleID='+SampleID})
    } catch (err) {
      res.status(500)
      res.send(err.message)
    }
  };