namespace AvidTravel.Domain.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public float total_cost { get; set; }

        public ICollection<TripDestination> TripDestinations { get; set; } = new List<TripDestination>();  
    }
}
