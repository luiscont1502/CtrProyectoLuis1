
using BEUCrtProyectoLuis;
using BEUCrtProyectoLuis.Queris;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Cors;

namespace WebApiPortBelly.Controllers
{
    [RoutePrefix("api/Usuario")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
   // [Authorize(Roles = "Administrador")]
    public class UsuariosController : ApiController
    {
        public IHttpActionResult Post(Usuario usuario)
        {
            try
            {
                //Si existe un correo retorna un true sino existe el retorna retorna un false
                if (UsuarioBLL.GetUsuarioByMail(usuario.uso_cor) != null)
                {
                    return Content(HttpStatusCode.Conflict, "El correo ya existe, intenta con otros correo");

                }
                else {
                    usuario.uso_rol = "Cliente";
                    UsuarioBLL.Create(usuario);
                    return Content(HttpStatusCode.Created, "Usuario creado correctamente");
                }
            
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Usuario usuario = UsuarioBLL.Get(id);
               
                return Content(HttpStatusCode.OK, usuario);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
       // [Authorize(Roles = "Administrador, Cliente")]
        public IHttpActionResult Get()
        {
            try
            {
                List<Usuario> todos = UsuarioBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
       // [Authorize(Roles = "Administrador, Cliente")]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                UsuarioBLL.Delete(id);
                return Ok("Usuario eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
      //  [Authorize(Roles = "Administrador, Cliente")]
        public IHttpActionResult Put(Usuario usuario)
        {
            try
            {
                 UsuarioBLL.Update(usuario);
                    return Content(HttpStatusCode.OK, "Alumno actualizado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + usuario.ToString());
            }
        }
    }
}
