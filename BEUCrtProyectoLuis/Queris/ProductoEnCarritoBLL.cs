using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Text;
using System.Threading.Tasks;

namespace BEUCrtProyectoLuis.Queris
{
    public class ProductoEnCarritoBLL
    {
        public static void Create(ProductoEnCarrito a)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        a.pcr_est = "Pendiente";
                        a.pcr_dateOfCreated = DateTime.Now;
                        db.ProductoEnCarrito.Add(a);
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
        public void ActualizaProducto(int prd_id,int prd_cnt) {
            Producto prd = ProductoBLL.Get(prd_id);
            prd.prd_cnt -= prd_cnt;
            ProductoBLL.Update(prd);
        }
        public static ProductoEnCarrito Get(int? id)
        {
            using (Entities db = new Entities())
            {
                return db.ProductoEnCarrito.Find(id);
            }
        }
        public static void Update(ProductoEnCarrito ProductoEnCarrito)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.ProductoEnCarrito.Attach(ProductoEnCarrito);
                        db.Entry(ProductoEnCarrito).State = System.Data.Entity.EntityState.Modified;
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
        public static bool Updates(ProductoEnCarrito pc) {
            using (Entities db= new Entities()) {
                using (var transaction=db.Database.BeginTransaction()) {
                    try {
                        ProductoEnCarrito prd = new ProductoEnCarrito();
                        var order = db.ProductoEnCarrito.AsNoTracking().Where(s=>s.pcr_id==pc.pcr_id).FirstOrDefault();
                        prd.pcr_id = order.pcr_id;
                        prd.prd_id = pc.prd_id;
                        //Restablecer cantidad Productos
                        var cantidad = order.prd_cnt - pc.prd_cnt;
                        prd.prd_cnt = pc.prd_cnt;
                        order.Producto.prd_cnt = order.Producto.prd_cnt + cantidad;
                        //-----------------------
                        prd.pcr_est = pc.pcr_est;
                        prd.pcr_dateOfCreated = order.pcr_dateOfCreated;

                        prd.Producto = order.Producto;
                        db.Entry(prd).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                        return true;

                    } catch (Exception) {
                        transaction.Rollback();
                        return false;
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
                        ProductoEnCarrito ProductoEnCarrito = db.ProductoEnCarrito.Find(id);
                        db.Entry(ProductoEnCarrito).State = System.Data.Entity.EntityState.Deleted;
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
        public static List<ProductoEnCarrito> List()
        {
            Entities db = new Entities();
            return db.ProductoEnCarrito.Include(c => c.Carrito).ToList();
        }
        public static List<ProductoEnCarrito> List(int id)
        {
            Entities db = new Entities();
            return db.ProductoEnCarrito.Where(x => x.car_id.Equals(id)).ToList();
        }
        public static List<ProductoEnCarrito> GetProductsInCarByState(string pcr_est)
        {
            Entities db = new Entities();
            return db.ProductoEnCarrito.Where(x => x.pcr_est.Equals(pcr_est)).ToList();

        }
        public static List<ProductoEnCarrito> GetProdutsInCarByCart(int car_id)
        {
            using (Entities db = new Entities())
            {
                return db.ProductoEnCarrito.Where(x => x.car_id.Equals(car_id)).ToList();
            }
        }

        public static List<ProductoEnCarrito> GetProdutsPendInCarByCli(int cln_id)
        {
            using (Entities db = new Entities())
            {
                List<ProductoEnCarrito> productos = db.ProductoEnCarrito.Where(c => c.Carrito.Cliente.cln_id == cln_id && c.Carrito.car_tipo == "Pendiente").ToList();
                if (productos != null)
                {
                    foreach (var item in productos)
                    {
                        Producto producto = new Producto();
                        producto.prd_id = item.Producto.prd_id;
                        producto.prd_nom = item.Producto.prd_nom;
                        producto.prd_img = item.Producto.prd_img;
                        producto.prd_precio = item.Producto.prd_precio;
                        producto.prd_tal = item.Producto.prd_tal;
                        producto.prd_crt = item.Producto.prd_crt;
                        producto.prd_cnt = item.Producto.prd_cnt;
                        producto.cat_id = item.Producto.cat_id;
                        producto.prm_id = item.Producto.prm_id;
                        producto.prd_dateOfCreated = item.Producto.prd_dateOfCreated;
                        producto.Promocion = item.Producto.Promocion;
                        producto.Categoria = item.Producto.Categoria;
                        producto.ProductoEnCarrito = item.Producto.ProductoEnCarrito;
                        item.Producto = producto;
                    }
                }
                return productos;
            }
        }


        public static List<ProductoEnCarrito> GetProdutsPagInCarByCli(int cln_id)
        {
            using (Entities db = new Entities())
            {
                List<ProductoEnCarrito> productos = db.ProductoEnCarrito.Where(c => c.Carrito.Cliente.cln_id == cln_id && c.Carrito.car_tipo == "Pagado").ToList();
                if (productos != null)
                {

                    foreach (var item in productos)
                    {
                        Producto producto = new Producto();
                        producto.prd_id = item.Producto.prd_id;
                        producto.prd_nom = item.Producto.prd_nom;
                        producto.prd_img = item.Producto.prd_img;
                        producto.prd_precio = item.Producto.prd_precio;
                        producto.prd_tal = item.Producto.prd_tal;
                        producto.prd_crt = item.Producto.prd_crt;
                        producto.prd_cnt = item.Producto.prd_cnt;
                        producto.cat_id = item.Producto.cat_id;
                        producto.prm_id = item.Producto.prm_id;
                        producto.prd_dateOfCreated = item.Producto.prd_dateOfCreated;
                        producto.Promocion = item.Producto.Promocion;
                        producto.Categoria = item.Producto.Categoria;
                        producto.ProductoEnCarrito = item.Producto.ProductoEnCarrito;
                        item.Producto = producto;
                    }
                }
                return productos;
            }
        }
    }
}
