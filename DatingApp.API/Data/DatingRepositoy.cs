using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepositoy : IDatingRepository
    {
        public DataContext _context;
        public DatingRepositoy(DataContext context)
        {
            _context= context;
            
        }
        public void Add<T>(T Entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public void Delete<T>(T Enity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public async Task<User> GetUser(int id)
        {
            var user=await _context.Users.Include(p =>p.Photos).FirstOrDefaultAsync(u =>u.Id==id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
           var users=await _context.Users.Include(p=>p.Photos).ToListAsync();
           return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
            //throw new System.NotImplementedException();
        }
    }
}