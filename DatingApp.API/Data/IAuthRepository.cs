using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user,string password);

         Task<User> Loging (string username, string password);
          
        Task<bool> UserExists(string username);
    }
}