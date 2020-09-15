using Microsoft.AspNetCore.Http;
namespace DatingApp.API.helpers
{
    public static class Extension
    {
       public static void AddApplicationError(this HttpResponse response, string message) 
       {
            
             response.Headers.Add("ApplicationError",message);
             response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
             response.Headers.Add("Access-Control-Allow-Origin","*");

       }
    }
}