using Microsoft.EntityFrameworkCore;
using AvidTravel.Domain.Models;

namespace AvidTravel.Infrastructure.Data
{
    public class TravelContext : DbContext
    {
        public TravelContext(DbContextOptions<TravelContext> options) : base(options) { }

        public DbSet<Destination> Destinations { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<TripDestination> TripDestinations { get; set; }





    }
}
