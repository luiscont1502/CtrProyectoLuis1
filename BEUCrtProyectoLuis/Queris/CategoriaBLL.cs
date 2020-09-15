using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class CategoriaBLL
    {
        public static void Create(Categoria a)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Categoria.Add(a);
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
        public static Categoria Get(int? id)
        {
            using (Entities db=new Entities()) { 
             return db.Categoria.Find(id);
            }
               
        }
     
        public static void Update(Categoria categoria)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Categoria.Attach(categoria);
                        db.Entry(categoria).State = System.Data.Entity.EntityState.Modified;
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
                        Categoria categoria = db.Categoria.Find(id);
                        db.Entry(categoria).State = System.Data.Entity.EntityState.Deleted;
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
        public static List<Categoria> List()
        {
            using (Entities db=new Entities()) {
                return db.Categoria.ToList();
            }
              
        }
        public static bool Updates(Categoria p)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Categoria cat = new Categoria();
                        var order = db.Categoria.AsNoTracking().Where(s => s.cat_id == p.cat_id).FirstOrDefault();
                        cat.cat_id = order.cat_id;
                        cat.cat_nom = p.cat_nom;
                        db.Entry(cat).State = System.Data.Entity.EntityState.Modified;
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
    }
}
