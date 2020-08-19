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
    public class ProductoEnCarritosController : ApiController
    {
        public IHttpActionResult Post(ProductoEnCarrito prdCarrito)
        {
            try
            {
                ProductoEnCarritoBLL.Create(prdCarrito);
                return Content(HttpStatusCode.Created, "ProductoEnCarrito creado correctamente");
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
                ProductoEnCarrito prdCarrito = ProductoEnCarritoBLL.Get(id);
                return Content(HttpStatusCode.OK, prdCarrito);
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
                List<ProductoEnCarrito> todos = ProductoEnCarritoBLL.List();
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
                ProductoEnCarritoBLL.Delete(id);
                return Ok("ProductoEnCarrito eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        public IHttpActionResult Put(ProductoEnCarrito prdCarrito)
        {
            try
            {
                ProductoEnCarritoBLL.Update(prdCarrito);

                return Content(HttpStatusCode.OK, "ProductoEnCarrito actualizado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + prdCarrito.ToString());
            }
        }
       
    }
}
