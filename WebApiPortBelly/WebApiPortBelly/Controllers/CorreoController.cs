using BEUCrtProyectoLuis.Queris;
using System;
using System.Collections.Generic;
using System.Configuration;

using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Windows;

namespace WebApiPortBelly.Controllers
{
 //  [AllowAnonymous]
 //  [RoutePrefix("api/Correo")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CorreoController : ApiController
    {
       
        public IHttpActionResult Post(Correos cor)
        { 
            try
            {
                CorreoBLL.GetEmail(cor);
                return Content(HttpStatusCode.Created, "Correo enviado");
            }
            catch (Exception ex)
            {
               // MessageBox.Show("error al enviar");
                return BadRequest(ex.Message);
            }  
        }
       [HttpPost]
      // [Route("EnviarFactura")]
      // [Authorize(Roles = "Cliente")]
        public IHttpActionResult EnviarFactura(Correos cor)
        {
            try
            {
                CorreoBLL.SendEmail(cor);
                return Content(HttpStatusCode.Created, "Correo enviado");
            }
            catch (Exception ex)
            {
                // MessageBox.Show("error al enviar");
                return BadRequest(ex.Message);
            }
        }






        /*  System.Net.Mail.MailMessage mmsg = new System.Net.Mail.MailMessage();
             mmsg.To.Add("Luiscont150294@gmail.com");
             mmsg.Subject = cor.Asunto;
             mmsg.SubjectEncoding = System.Text.Encoding.UTF8;
             mmsg.Bcc.Add(cor.Correo);
             mmsg.Body = cor.Mensaje;
             mmsg.BodyEncoding = System.Text.Encoding.UTF8;
             mmsg.IsBodyHtml = true;
             mmsg.From = new System.Net.Mail.MailAddress(cor.Correo);

             System.Net.Mail.SmtpClient cliente = new System.Net.Mail.SmtpClient();
             cliente.Credentials = new System.Net.NetworkCredential("luiscont1502@gmail.com", "a0959743877");
             cliente.Port = 587;
             cliente.EnableSsl = true;
             cliente.Host = "smtp.gmail.com";

             try {
                 cliente.Send(mmsg);
                 return Content(HttpStatusCode.Created, "Correo enviado");
             } catch (Exception ex) {
                 MessageBox.Show("error al enviar");
                 return BadRequest(ex.Message);
             }*/
    }

}
    

