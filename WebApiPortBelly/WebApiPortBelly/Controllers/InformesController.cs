
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
   
    public class InformesController : ApiController
    {

        [HttpGet]
        [Route("Categorias")]
        public IHttpActionResult GetCategorias(string estado)
            {
                try
                {

                    List<PestadosProductoPorCategoria_Result> todos = InformeBLL.GetCategorias(estado);
                    return Content(HttpStatusCode.OK, todos);
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
        [HttpGet]
        [Route("CategoriaPromociones")]
        public IHttpActionResult GetPromociones(string estado) {
            try {
                List<PestadosProductoPorPromociones_Result> todos = InformeBLL.GetPromocion(estado);
                return Content(HttpStatusCode.OK,todos);

            }
            catch (Exception) {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("CategoriaPorMes")]
        public IHttpActionResult getCatMes() {
            try {
                List<PventasPorMesesSegunCategoria_Result> todos = InformeBLL.GetProductovendidoPorMesesCategoria();
                return Content(HttpStatusCode.OK,todos);
            } catch (Exception) {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("CategoriaExistente")]
        public IHttpActionResult getCatExistentes()
        {
            try
            {
                List<PventasProductosExistentesPorcategoria_Result> todos = InformeBLL.GetProductosExistentesPorcategoria();               return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }



        /*try
        {
            List<> todos = InformeBLL.PestadosProductosPorCategoria("Pendiente");
            return Content(HttpStatusCode.OK, todos);
        }
        catch (Exception)
        {
            return BadRequest();
        }
       // InformeBLL.PestadosProductosPorCategoria("pendiente");*/



    }
}
