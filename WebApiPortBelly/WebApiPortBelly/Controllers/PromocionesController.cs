
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
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class PromocionController : ApiController
    {
        public IHttpActionResult Post(Promocion promocion)
        {
            try
            {
                PromocionBLL.Create(promocion);
                return Content(HttpStatusCode.Created, "Promocion creado correctamente");
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
                Promocion promocion = PromocionBLL.Get(id);
                return Content(HttpStatusCode.OK, promocion);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        public IHttpActionResult Get()
        {
            try
            {
                List<Promocion> todos = PromocionBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        public IHttpActionResult Delete(int id)
        {
            try
            {
                PromocionBLL.Delete(id);
                return Ok("Promocion eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(Promocion promocion)
        {
            try
            {
                PromocionBLL.Update(promocion);
               
                    return Content(HttpStatusCode.OK, "Promoción actualizado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + promocion.ToString());
            }
        }
       
    }
}
