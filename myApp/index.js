var http = require('http');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form method="post" enctype="multipart/form-data">');
  res.write('<input type="text" id="to"><br>');
  res.write('<input type="button">');
  res.write('</form>');
  return res.end();
}).listen(8080);


var transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com', // Gmail as mail client
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'dharanitharan.se@gmail.com',
        pass: 'tfcweabxmfvjadrw'
    }
});

var mailOptions = {
  from: '"Dharanitharan" <dharanitharan.se@gmail.com>',
  to:  'dharanitharan.m@enterprisetouch.net',
  //cc: 'ureshsrna4@gmail.com',
  //bcc: 'ureshsrna4@gmail.com',
  subject:'Node.Js Test mail - Dharanitharan',
  text: 'Hi Guys....! This is Dharanitharan',
  html: '<h1 id="uresh" style="color:red">Welcome</h1><p>That was easy!</p>',
  attachments:
   [  
    {
        path: './img/apple.png'
    }
  ]  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
