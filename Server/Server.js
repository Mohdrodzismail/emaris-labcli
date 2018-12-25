const express = require('express');
const bodyParser = require('body-parser');
const smpRegistrationRouter = require('./routes/SmpRegistrationRouter');
const UserRouter = require('./routes/userRouter');



const app = express();

app.use(bodyParser.json());

app.use('/api/v1/SmpRegistration', smpRegistrationRouter);
app.use('/api/v1/Users', UserRouter);

const PORT = process.env.PORT || 3001;

var server = app.listen(PORT, 'localhost', function(){
    const host = server.address().address
    const port = server.address().port
  
    console.log(`eMaR-LIS app listening at http://${host}:${port}`)
});