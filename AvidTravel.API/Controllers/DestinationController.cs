using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AvidTravel.Infrastructure.Data;
using AvidTravel.Domain.Models;

namespace AvidTravel.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DestinationsController : ControllerBase
    {
        private readonly TravelContext _context;

        public DestinationsController(TravelContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Destination>>> GetDestinations()
        {
            return await _context.Destinations.ToListAsync();
        }
    }
}
