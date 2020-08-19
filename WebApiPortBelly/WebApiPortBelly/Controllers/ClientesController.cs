
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
    public class ClientesController : ApiController
    {
        public IHttpActionResult Post(Cliente cliente)
        {
            try
            {
                ClienteBLL.Create(cliente);
                return Content(HttpStatusCode.Created, "Clientes creado correctamente");
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
                Cliente cliente = ClienteBLL.Get(id);
                return Content(HttpStatusCode.OK, cliente);
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
                List<Cliente> todos = ClienteBLL.List();
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
                ClienteBLL.Delete(id);
                return Ok("Clientes eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(Cliente cliente)
        {
            try
            {
            ClienteBLL.Update(cliente);
           
                    return Content(HttpStatusCode.OK, "Alumno actualizado correctamente");
         


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + cliente.ToString());
            }
        }
    }
}
