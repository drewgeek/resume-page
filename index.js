const express = require('express');
const app = express();
const path = require('path');

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//   //set static folder
// app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);

  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'andreweohoi@gmail.com',
  //       pass: 'password01!',
  //     },
  //   });

  //   const mailOptions = {
  //     from: req.body.email,
  //     to: 'andreweohoi@gmail.com',
  //     subject: `Message from ${req.body.email}: ${req.body.subject}`,
  //     text: req.body.message,
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log(error);
  //       res.send('error');
  //     }else{
  //       console.log()'Email sent: ' + info.response;
  //       res.send('success')
  //     }
  //   });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
