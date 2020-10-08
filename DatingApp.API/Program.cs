using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Data;

namespace DatingApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {   //old configuration
            //CreateHostBuilder(args).Build().Run();

            //New config ,To seed User the data into data base
            //here we are deferring the RUN
            var host=CreateHostBuilder(args).Build();
            using(var scope= host.Services.CreateScope())
            {
                var services=scope.ServiceProvider;
                try
                {
                    var context=services.GetRequiredService<DataContext>();
                    context.Database.Migrate();
                    Seed.SeedUsers(context);

                }
                catch(Exception ex)
                {
                    var logger=services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex,"An error occured during the migration");
                    
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
