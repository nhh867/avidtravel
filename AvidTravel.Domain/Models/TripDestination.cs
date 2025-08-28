namespace AvidTravel.Domain.Models
{
    public class TripDestination
    {
        public int Id { get; set; }
        public int TripId { get; set; }
        public int DestinationId { get; set; }

        public Trip Trips { get; set; } = null!;
        public Destination Destinations { get; set; } = null!;
        
        public int Sequence { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Decimal Cost { get; set; }
  
    }
}
