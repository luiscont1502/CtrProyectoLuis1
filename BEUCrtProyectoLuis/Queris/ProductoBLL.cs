using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class ProductoBLL
    {
        public static void Create(Producto a)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        a.prd_dateOfCreated = DateTime.Now;
                        db.Producto.Add(a);
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
        public static Producto Get(int? id)
        {
            Entities db = new Entities();
            return db.Producto.Find(id);
        }
        public static void Update(Producto Producto)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Producto.Attach(Producto);
                        db.Entry(Producto).State = System.Data.Entity.EntityState.Modified;
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
        public static bool Updates(Producto p)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Producto prd = new Producto();
                        var order = db.Producto.AsNoTracking().Where(s => s.prd_id == p.prd_id).FirstOrDefault();
                        prd.prd_id = order.prd_id;
                        prd.prd_nom = p.prd_nom;
                        prd.prd_crt = p.prd_crt;
                        prd.prd_img = p.prd_img;
                        prd.prd_precio = p.prd_precio;
                        prd.prd_tal = p.prd_tal;
                        prd.cat_id = p.cat_id;
                        prd.prm_id = p.prm_id;
                        prd.prd_dateOfCreated = order.prd_dateOfCreated;
                        prd.prd_cnt = p.prd_cnt;
                        db.Entry(prd).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return false;
                    }
                }
            }
        }
        public static void Update(int prd_id, int cantidad)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Producto p = db.Producto.Find(prd_id);
                        p.prd_cnt -= cantidad;
                        db.Producto.Attach(p);
                        db.Entry(p).State = System.Data.Entity.EntityState.Modified;
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
                        Producto Producto = db.Producto.Find(id);
                        db.Entry(Producto).State = System.Data.Entity.EntityState.Deleted;
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
        public static List<Producto> List()
        {
            Entities db = new Entities();
            return db.Producto.Include(c => c.Categoria).Include(p => p.Promocion).ToList();
        }
        public static List<Producto> GetList()
        {
            Entities db = new Entities();
            return db.Producto.ToList();
        }
        public static List<Producto> List(int id)
        {
            Entities db = new Entities();
            return db.Producto.Where(x => x.cat_id.Equals(id)).ToList();
        }
        public static List<Producto> GetProductsByPromocion(int id)
        {
            Entities db = new Entities();
            return db.Producto.Where(x => x.prm_id.Equals(id)).ToList();
        }
    }
}
