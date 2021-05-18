import express from 'express';
import randomatic from 'randomatic';
import moment from 'moment';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5006;
bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    cors({
      optionsSuccessStatus: 200,
      origin: '*',
    })
  );

app.post('/send-code', (req, res) => {
  const { phone } = req.body;
 const randomThreeDigitNumber = randomatic('0', 6);
 //send mail to the user 
    console.log(phone)
 //save number code in database and expire time
 const expirationTime = moment(new Date()).add(6,'hour').toISOString();


 return res.sendStatus(200).json({
    expiresIn: expirationTime,
    code:randomThreeDigitNumber
 })



})
app.post('/verify-code', (req, res) => {
    const { code} = req.body;
    // fetch token from database
    const tokenReturned = {
        _id:'',
        expiresIn: ''
    };
   const currentTime = moment(new Date()).toISOString();
    if(currentTime > tokenReturned.expiresIn ){
     return res.sendStatus(400).json({
          message: 'Token expired'
      })
    }
    res.sendStatus(200).json({
        message:'verified'
    })
  
  })
app.listen(port, ( ) => {
  return console.log(`server is listening on ${port}`);
});