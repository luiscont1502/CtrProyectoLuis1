using BEUCrtProyectoLuis.Queris;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity.Migrations.Sql;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Windows;

namespace WebApiPortBelly.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CorreoController : ApiController
    {
        public IHttpActionResult Post(Correos cor)
        {

            /* try
             {

                 CorreoBLL obclsCorreo = new CorreoBLL();

                 string stServidor = ConfigurationManager.AppSettings["stServidor"].ToString();
                 string stUsuario = ConfigurationManager.AppSettings["stUsuario"].ToString();
                 string stPassword = ConfigurationManager.AppSettings["stPassword"].ToString();
                 string stPuerto = ConfigurationManager.AppSettings["stPuerto"].ToString();
                 Content(HttpStatusCode.Created,cor.Correo);
                 EnvioEmail(stServidor, stUsuario, stPassword, true, true, cor.Correo, stUsuario, cor.Nombre,cor.Mensaje, 0, 1, stPuerto);
                 return Content(HttpStatusCode.Created, "Correo enviado");

        }
            catch (Exception ex)
            {
                return BadRequest(" en esta"+ex.Message);
            }*/
            System.Net.Mail.MailMessage mmsg = new System.Net.Mail.MailMessage();
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
            }
        }

      /*  public void EnvioEmail(string stServidor, string stUsuario, string stPassword, bool blConexionSegura, bool blAutentificacion, string stFrom,
         string stTo, string stAsunto, string stMensaje, int inTipo,
     int inPrioridad,
     string stPuerto
     )
        {

            try
            {

                System.Net.Mail.MailMessage Mail = new System.Net.Mail.MailMessage();
                Mail.From = new System.Net.Mail.MailAddress(stFrom);
                Mail.To.Add(stTo);
                Mail.Subject = stAsunto;
                Mail.Body = stMensaje;
                if (inTipo == 0) Mail.IsBodyHtml = false;
                else if (inTipo == 1) Mail.IsBodyHtml = true;

                if (inPrioridad == 2) Mail.Priority = System.Net.Mail.MailPriority.High;
                else if (inPrioridad == 1) Mail.Priority = System.Net.Mail.MailPriority.Low;
                else if (inPrioridad == 0) Mail.Priority = System.Net.Mail.MailPriority.Normal;

                System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient();
                smtp.Host = stServidor;

                if (blAutentificacion) smtp.Credentials = new System.Net.NetworkCredential("luiscont150294@gmail.com", "a0959743877");
                if (stPuerto.Length > 0) smtp.Port = Convert.ToInt32(stPuerto);
                smtp.EnableSsl = blConexionSegura;

                smtp.Send(Mail);


            }
            catch (Exception e)
            {
                MessageBox.Show("Error", e.Message);
            }

        }*/

    }

}
    

