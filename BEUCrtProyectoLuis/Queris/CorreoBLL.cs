using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class CorreoBLL
    {

        public static void SendEmail(Correos cor) {
            System.Net.Mail.MailMessage mmsg = new System.Net.Mail.MailMessage();
            mmsg.To.Add(cor.Correo);
            mmsg.Subject = cor.Asunto;
            mmsg.SubjectEncoding = System.Text.Encoding.UTF8;
            mmsg.Bcc.Add("Luiscont1502@4gmail.com");
            mmsg.Body = cor.Mensaje;
            mmsg.BodyEncoding = System.Text.Encoding.UTF8;
            mmsg.IsBodyHtml = true;
            mmsg.From = new System.Net.Mail.MailAddress("Luiscont1502@4gmail.com");

            System.Net.Mail.SmtpClient cliente = new System.Net.Mail.SmtpClient();
            cliente.Credentials = new System.Net.NetworkCredential("luiscont1502@gmail.com", "a0959743877");
            cliente.Port = 587;
            cliente.EnableSsl = true;
            cliente.Host = "smtp.gmail.com";
            cliente.Send(mmsg);
            
        }
        public static void GetEmail(Correos cor) {
            System.Net.Mail.MailMessage mmsg = new System.Net.Mail.MailMessage();
            mmsg.To.Add("luiscont1502@gmail.com");
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
            cliente.Send(mmsg);

        }



    }
}
