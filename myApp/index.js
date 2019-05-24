var http = require('http');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form method="post" enctype="multipart/form-data">');
  res.write('<input type="text" id="toMail"><br>');
  res.write('<button onclick="sendMail()">Send</button>');
  res.write('</form>');
  return res.end();

}).listen(8080);


function sendMail(){
  
  alert("Test");
  var toMailId = document.getElementById("toMail").value; 
  alert(toMailId);
 }


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
  to:  'dharani.infonet@gmail.com',
  //cc: 'ureshsrna4@gmail.com',
  //bcc: 'ureshsrna4@gmail.com',
  subject:'Node.Js Test mail - Dharanitharan',
  text: 'Hi Guys....! This is Dharanitharan',
  html: './own_modules/mail_temp.html',
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
