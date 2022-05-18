const { request, response} = require('express');
const nodemailer = require('nodemailer');

const envioCorreo = (req=request,resp=response) => {
  let body =  req.body;

  let config = nodemailer.createTransport({
    host:'setp.gmail.com',
    post:587,
    auth:{
      user:'tapiieroangii@gmail.com',
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

  if (error) return resp.json({ok:false, msg:error})

    return resp.json({
    ok: true,
    msg: result
  });
  })
}


module.exports = {
  envioCorreo
}