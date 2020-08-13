using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
         [Required]
         [StringLength(8,MinimumLength=4,ErrorMessage="Specify password between 4 and * char")]
        public string Password { get; set; }
    }
}