const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { poolPromise } = require('../Data/db');
const Config = require('../Config/dev');
const validator = require('validator');
//const Regex = require("regex");
// const User = require('../Models/user');
//var regex = new Regex('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');

exports.auth = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({errors: [{title: 'Data Missing',detail:'Please provide email and password'}]})
  }

  try {
    const pool = await poolPromise
    const checkDataIsExist = await pool.request()
          //.input('email', sql.Int, value)
          .input('email', email)
          .query('select * from [eMaR_User] where email = @email')
          if (checkDataIsExist.rowsAffected > 0) {
            //console.log(checkDataIsExist.recordsets.length)
            //console.dir(checkDataIsExist)
            //Compare password  
            if (bcrypt.compareSync(password, checkDataIsExist.recordset[0].password)) {
              // retrun JWT token
              const token = jwt.sign({
                              userID: checkDataIsExist.recordset[0].userID,
                              userName: checkDataIsExist.recordset[0].username
                            }, Config.Secret, { expiresIn: '1h'});
              return res.json(token);
            }else {
              return res.status(422).send({errors: [{title: 'Invalide Data',detail:'Wrong Password or eMail'}]})
            }
          } else {
            return res.status(422).send({errors: [{title: 'Invalid User',detail:'User does not exist'}]})
          }
  } catch (err) {
    return res.status(500).send(err.message)
  }
};

exports.RegisterNewUser = async (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;
  //const saltRounds = 10;
  //var hashPassword = '';
  // console.log('Inside UserController')
  if (!email || !password) {
    return res.status(422).send({errors: [{title: 'Data Missing',detail:'Please provide email and password'}]})
  }
  if (password !== passwordConfirmation) {
    return res.status(422).send({errors: [{title: 'Invalide Password',detail:'Password is not the same with the Password Validation'}]})
  }
  if (!validator.isEmail(email)) {
    return res.status(422).send({errors: [{title: 'Invalide email',detail:'Please enter a valid email'}]})
  }
  
try {
  const pool = await poolPromise
  const checkDataIsExist = await pool.request()
        //.input('email', sql.Int, value)
        .input('email', email)
        .query('select email from [eMaR_User] where email = @email')
        if (checkDataIsExist.rowsAffected > 0) {
          return res.status(422).send({errors: [{title: 'Data Exist',detail:'Email address already exist in Database'}]})
        } 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);  
/*       bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            hashPassword = hash;
        })
      }); */

  const result = await pool.request()
        .input('username', username)
        .input('email', email)
        .input('password', hashPassword)
        .query('insert into [eMaR_User] (username, email, password) Values (@username, @email, @password)')
        if (result.rowsAffected = 0) {
          return res.status(422).send({errors: [{title: 'Create New User',detail:'Failed Creating New User='+username}]})
        }      
  return res.json({'Create New User': true, 'Message': 'Successfully Created New User='+username})
  //res.json(result.recordset)
} catch (err) {
  return res.status(500).send(err.message)
}
};

exports.authMiddleWare = async (req,res,next)=> {
  const token = req.headers.authorization;
  //const token = req.body.jwt;
  if (token){
    const usersInfo = parseToken(token.split(' ')[1])
    if (!usersInfo) {
      return res.status(422).send({errors: [{title: 'Not Authorized',detail:'Invalid Token'}]})
    }else
    try {
      const pool = await poolPromise
      const checkDataIsExist = await pool.request()
            //.input('email', sql.Int, value)
            .input('userID', usersInfo.userID)
            .query('select * from [eMaR_User] where userID = @userID')
            if (checkDataIsExist.rowsAffected > 0) {
              res.locals.user = checkDataIsExist.recordset;
              return res.status(200).send({title: 'Authorized',detail:'you are valid'})
            } else {
              return res.status(422).send({errors: [{title: 'Not Authorized',detail:'Please login to get an access'}]})
            }
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }else {
    return res.status(422).send({errors: [{title: 'Not Authorized',detail:'Please login to get an access'}]})
  }
  function parseToken(token){
    try {
    /*'Bearer 23ihr2ond23429029342309qw2'
       token.split(' ')[1];
       ['Bearer', '23ihr2ond23429029342309qw2'] */
       //return jwt.verify(token, Config.Secret)
       //return jwt.decode(token, {complete: true});

       return jwt.verify(token, Config.Secret);
    } catch (err) {
       return false;
      //return res.status(500).send(err.message);
    }
  }
}
