namespace AvidTravel.Domain.Models
{
    public class TripSearchRequest
    {
        public List<Destination> Destinations { get; set; } = null!;
        public string? StartDate { get; set; }
      
    }
}
