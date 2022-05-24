const { request, response} = require('express');
const nodeMailer = require('nodemailer');

const enviocorreos = (req=request,resp=response) => {
  let body =  req.body;

  let config = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    post:587,
    auth:{
      user:'giraldoangie891@gmail.com',
      pass:'3128350015'
    }
  });

  const opciones = {
    from: 'Programacion',
    subject: body.asunto,
    to: body.email,
    text: body.mensaje
  };

  config.sendMail(opciones, function(error, result){
    if (error) { 
      return resp.json({ok: false, msg:error});
    }
    else{
      return resp.json({
        ok:true,
        msg:result
      });
    }
  })
}


module.exports = {
  enviocorreos
}