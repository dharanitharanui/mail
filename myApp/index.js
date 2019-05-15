var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com', // Gmail as mail client
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'dharanitharan.it@gmail.com',
        pass: 'urxlrsojjdwcoayy'
    }
});

var mailOptions = {
  from: 'dharanitharan.it@gmail.com',
  to: 'venkatreddy3093712@gmail.com, dharani.infonet@gmail.com',
  cc: 'ureshsrna4@gmail.com',
  subject:'Dharanitharan',
  text: 'Hi Guys....! This is Dharanitharan',
  html: '<h1 style="color:red">Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
