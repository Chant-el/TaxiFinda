using System;
using System.ComponentModel.DataAnnotations;

namespace TaxiFinda.Models
{
    public class Rank
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Area { get; set; }

        [Required]
        public string Address { get; set; }

        public string TaxisAvailable { get; set; }
    }
}