namespace AvidTravel.Domain.Models
{
    public class Destination
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Country { get; set; } = "";
        public ICollection<TripDestination> TripDestinations { get; set; } = new List<TripDestination>();
  
    }
}
