using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AvidTravel.Infrastructure.Data;
using AvidTravel.Domain.Models;
using AvidTravel.Application.DTOs;

namespace YourApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripsController : ControllerBase
    {
        private readonly TravelContext _context;

        public TripsController(TravelContext context)
        {
            _context = context;
        }

        [HttpPost("search")]
        public async Task<IActionResult> SearchTrips([FromBody] TripSearchRequestDTO request)
        {
            var query = _context.TripDestinations
                        .Include(td => td.Trips)
                        .Include(td => td.Destinations) // make sure Destination is included
                        .AsQueryable();

            // ✅ Filter by month/year (if provided)
            if (!string.IsNullOrWhiteSpace(request.StartDate) &&
            DateTime.TryParseExact(request.StartDate + "-01", "yyyy-MM-dd", null, System.Globalization.DateTimeStyles.None, out var start))
            {
               var end = start.AddMonths(1);
               query = query.Where(td => td.StartDate >= start && td.StartDate < end);
            }

            // ✅ Filter by multiple destination IDs (if provided)
            if (request.Destinations != null && request.Destinations.Any())
            {
               query = query.Where(td => request.Destinations.Contains(td.DestinationId));
            }
 
            var results = await query
                        .GroupBy(td => new
                        {
                            td.TripId,
                            td.Trips.Name,
                            td.Trips.Description
                        })
                        .Select(g => new
                        {
                            TripId = g.Key.TripId,
                            TripName = g.Key.Name,
                            TripDescription = g.Key.Description,
                            Destinations = g.Select(d => new {
                                                    d.Id,
                                                    DestinationName = d.Destinations.Name,
                                                    d.Cost,
                                                    d.StartDate
                                                    }).ToList()
                        }).ToListAsync();

            return Ok(results);
        }
    }
}
