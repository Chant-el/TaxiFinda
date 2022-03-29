using System;
using System.ComponentModel.DataAnnotations;

namespace TaxiFinda.Models
{
    public class Taxi
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Registration { get;  set; }

        [Required]
        public string Rank { get; set; }

        [Required]
        public string Destination { get; set; }

        [Required]
        public decimal Price { get; set; }

        public Taxi(Guid Id, string Registration, string Rank, string Destination, decimal Price)
        {
            this.Id = Id;
            this.Registration = Registration;
            this.Rank = Rank;
            this.Destination = Destination;
            this.Price = Price;
        }
    }

}