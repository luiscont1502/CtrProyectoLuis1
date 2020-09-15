﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApiPortBelly.Models;

namespace WebApiPortBelly
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();
            // Configuración y servicios de API web
            // Rutas de API web
           config.MapHttpAttributeRoutes();
            config.MessageHandlers.Add(new TokenValidationHandle());
        

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        }
    }
}
