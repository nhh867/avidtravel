namespace AvidTravel.Domain.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public decimal TotalCost { get; set; }

        public ICollection<TripDestination> TripDestinations { get; set; } = new List<TripDestination>();  
    }
}
