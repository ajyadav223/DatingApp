using System.Collections.Generic;
using System.Linq;
using DatingApp.API.Models;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context )
        {

            if(!context.Users.Any())
             {
                    var userData= System.IO.File.ReadAllText("Data/UserSeedData.json");
                    var users= JsonConvert.DeserializeObject<List<User>>(userData);
                    foreach( var user in users)
                    {
                        byte[] passwordhash,passwordSalt;
                        CreatePassworHash("password",out passwordhash,out passwordSalt );

                        user.PasswordHash=passwordhash;
                        user.PasswordSalt=passwordSalt;
                        user.UserName= user.UserName.ToLower();
                        context.Users.Add(user);
                    }
                    
                 context.SaveChanges();
             }

        }
        public static void CreatePassworHash(string password,out byte[] passwordhash, out byte[] passwordSalt)
        {

           using(var hmac= new System.Security.Cryptography.HMACSHA512())
            {
             passwordSalt=hmac.Key;
             passwordhash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        
    }
}