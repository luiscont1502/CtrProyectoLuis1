//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BEUCrtProyectoLuis
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class CuerpoFactura
    {
        public int crf_id { get; set; }
        public int cbf_id { get; set; }
        public int car_id { get; set; }
        public Nullable<System.DateTime> crf_dateOfCreated { get; set; }
        [JsonIgnore]
        public virtual CabezaFactura CabezaFactura { get; set; }
        [JsonIgnore]
        public virtual Carrito Carrito { get; set; }
    }
}
