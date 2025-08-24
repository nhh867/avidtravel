using AvidTravel.Domain.Models;

namespace Application.Interfaces
{
    public interface IDestinationService
    {
        Task<List<Destination>> GetAllAsync();
    }
}
