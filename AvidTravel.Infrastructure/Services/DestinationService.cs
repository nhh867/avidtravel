using Application.Interfaces;
using AvidTravel.Domain.Models;
using AvidTravel.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class DestinationService : IDestinationService
    {
        private readonly TravelContext _context;

        public DestinationService(TravelContext context)
        {
            _context = context;
        }

        public async Task<List<Destination>> GetAllAsync()
        {
            return await _context.Destinations.ToListAsync();
        }
    }
}
