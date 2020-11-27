using System.Threading.Tasks;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        void Add<T> (T Entity) where T:class;
        void Delete<T>(T Enity) where T:class;
        Task<bool> SaveAll();
        Task<IEnumerable <User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
    }
}