using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class InformeBLL
    {
     
        public static List<PestadosProductoPorCategoria_Result> GetCategorias(string estado)
        {
            using (Entities db = new Entities()) { 
               
                return db.PestadosProductoPorCategoria(estado).ToList();

            }
        }
        public static List<PestadosProductoPorPromociones_Result> GetPromocion(string estado)
        {
            using (Entities db = new Entities())
            {

                return db.PestadosProductoPorPromociones(estado).ToList();

            }
        }
        public static List<PventasPorMesesSegunCategoria_Result> GetProductovendidoPorMesesCategoria() {
            using (Entities db= new Entities()) {
                return db.PventasPorMesesSegunCategoria().ToList();
            }
        
        }
        public static List<PventasProductosExistentesPorcategoria_Result> GetProductosExistentesPorcategoria() {
            using (Entities db= new Entities()) {
                return db.PventasProductosExistentesPorcategoria().ToList();
            }
        }


    }
}
