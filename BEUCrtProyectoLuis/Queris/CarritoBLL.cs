using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Security.Cryptography.X509Certificates;

namespace BEUCrtProyectoLuis.Queris
{
    public class CarritoBLL
    {
        public static void Create(Carrito a)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Carrito.Add(a);
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }
        public static Carrito Get(int? id)
        {
            Entities db = new Entities();
            return db.Carrito.Find(id);
        }
        public static void Update(Carrito carrito)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Carrito.Attach(carrito);
                        db.Entry(carrito).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }
        public static void Delete(int? id)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Carrito Carrito = db.Carrito.Find(id);
                        db.Entry(Carrito).State = System.Data.Entity.EntityState.Deleted;
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }

        }
        public static List<Carrito> List()
        {
            using (Entities db = new Entities()) {
                return db.Carrito.Include(c => c.Cliente).ToList();
            }
   
        }
        public static List<Carrito> List(int cln_id)
        {
            using (Entities db= new Entities()) {
                return db.Carrito.Where(x => x.cln_id.Equals(cln_id)).ToList();
            }
              
        }

        public static Carrito ObtenerCarritoPendiente(int cln_id) {
            using ( Entities db= new Entities()) {
                Carrito carrito = db.Carrito.FirstOrDefault(x=> x.cln_id.Equals(cln_id) && x.car_tipo.Equals("Pendiente"));
                if (carrito != null)
                {
                    return carrito;
                }
                else {
                    carrito = new Carrito();
                    carrito.cln_id = cln_id;
                    carrito.car_tipo = "Pendiente";
                    Create(carrito);
                    return carrito;
                }
            }
        
        }
        public static List<Carrito> ObtenerCarritosPagados(int cln_id)
        {
            using (Entities db= new Entities()) {
                return db.Carrito.Where(x => x.cln_id.Equals(cln_id) && x.car_tipo.Equals("Pagado")).ToList();
            }

        }




    }
}
