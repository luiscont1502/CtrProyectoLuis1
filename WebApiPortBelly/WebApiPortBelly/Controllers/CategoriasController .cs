
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
    //[EnableCorsAttribute("http://localhost:4200", "*", "*")]
   [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
   
    public class CategoriasController : ApiController
    {
        //[Authorize(Roles = "Administrador")]
        public IHttpActionResult Post(Categoria categoria)
        {
            try
            {
                CategoriaBLL.Create(categoria);
                return Content(HttpStatusCode.Created, "Categoria creado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       // [Authorize(Roles = "Administrador,Cliente")]
        public IHttpActionResult Get(int id)
        {
            try
            {
                Categoria categoria = CategoriaBLL.Get(id);
                return Content(HttpStatusCode.OK, categoria);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
       // [Authorize(Roles = "Administrador,Cliente")]
        public IHttpActionResult Get()
        {
            try
            {
                List<Categoria> todos = CategoriaBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        //[Authorize(Roles = "Administrador")]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                CategoriaBLL.Delete(id);
                return Ok("Categoria eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        /* public IHttpActionResult Put(Categoria categoria)
         {
             try
             {
                 CategoriaBLL.Update(categoria);

                 return Content(HttpStatusCode.OK, "Categoria actualizado correctamente");
             }
             catch (Exception ex)
             {
                 return BadRequest(ex.Message + categoria.ToString());
             }
         }*/
      //  [Authorize(Roles = "Administrador")]
        public IHttpActionResult Put(Categoria categoria)
        {
            try
            {
                CategoriaBLL.Updates(categoria);
                return Content(HttpStatusCode.Accepted, "Categoría actualizada correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + categoria.ToString());
            }
        }
    }
}
