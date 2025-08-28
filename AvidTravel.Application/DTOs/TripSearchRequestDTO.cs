namespace AvidTravel.Application.DTOs
{
    public class TripSearchRequestDTO
    {
        public List<int> Destinations { get; set; } = new();
        public string? StartDate { get; set; }
      
    }
}
