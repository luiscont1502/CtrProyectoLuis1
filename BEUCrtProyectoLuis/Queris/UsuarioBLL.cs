using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class UsuarioBLL
    {
        public static void Create(Usuario a)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        //a.uso_rol = "Cliente";
                        db.Usuario.Add(a);
                        db.Usuario.Add(a);
                        db.SaveChanges();
                        transaction.Commit();
                        Usuario u = GetUsuarioByMail(a.uso_cor);
                        if (u != null)
                        {
                            Cliente c = new Cliente();
                            c.uso_id = u.uso_id;
                            ClienteBLL.Create(c);
                        }
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }
        public static Usuario Get(int? id)
        {
            Entities db = new Entities();
            return db.Usuario.Find(id);
        }
        public static void Update(Usuario Usuario)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Usuario.Attach(Usuario);
                        db.Entry(Usuario).State = System.Data.Entity.EntityState.Modified;
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
                        Usuario Usuario = db.Usuario.Find(id);
                        db.Entry(Usuario).State = System.Data.Entity.EntityState.Deleted;
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
        public static List<Usuario> List()
        {
            Entities db = new Entities();
            return db.Usuario.ToList();
        }
        private static List<Usuario> GetUsuarios(string criterio)
        {
            Entities db = new Entities();
            return db.Usuario.Where(x => x.uso_rol.ToLower().Contains(criterio)).ToList();

        }
        private static Usuario GetUsuario(string correo)
        {
            Entities db = new Entities();
            return db.Usuario.FirstOrDefault(x => x.uso_cor == correo);
        }
        public static Usuario GetUsuarioByUsu(string usu)
        {
            Entities db = new Entities();
            return db.Usuario.FirstOrDefault(x => x.uso_usu == usu);
        }
        public static Usuario LoginByMail(string cor, string pass)
        {
            using (Entities db = new Entities())
            {
                Usuario usu = db.Usuario.FirstOrDefault(x => x.uso_cor == cor);
                if (usu != null)
                {
                    if (usu.uso_con == pass)
                    {
                        return usu;
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    return null;
                }
            }
        }
        public static Usuario LoginByUsu(string usuario, string pass)
        {
            using (Entities db = new Entities())
            {
                Usuario usu = db.Usuario.FirstOrDefault(x => x.uso_usu == usuario);
                if (usu != null)
                {
                    if (usu.uso_con == pass)
                    {
                        return usu;
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    return null;
                }
            }
        }
    

        public static Usuario GetUsuarioByMail(string cor)
        {
            using (Entities db = new Entities())
            {
                return db.Usuario.FirstOrDefault(x => x.uso_cor == cor);
            }
        }


    }
}
