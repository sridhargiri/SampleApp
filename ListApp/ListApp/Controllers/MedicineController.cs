using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ListApp.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ListApp.Controllers
{
    [ApiController]
    [Route("[controller]"), EnableCors]
    public class MedicineController : ControllerBase
    {
        private static List<MedicineData> list = new List<MedicineData>();
        // Instantiate random number generator.  
        private readonly IDataRepository _repo;
        private readonly Random random = new Random();
        private readonly ILogger<MedicineController> _logger;

        public MedicineController(ILogger<MedicineController> logger,IDataRepository repository)
        {
            //list.Add(new MedicineData { Id = 1, Brand = "m1", ExpiryDate = DateTime.Now, Notes = "g", Price = 5, Quantity = 9 });
            _repo = repository; _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MedicineData> Get()
        {
            return _repo.GetMedicines();
        }
        [HttpPost("Save")]
        public IActionResult Post([FromBody] MedicineData medicine)
        {
            _repo.AddMedicine(medicine);
            return Created("",HttpStatusCode.OK);

        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var found = _repo.GetById(id);
            return Ok(found);

        }
    }
}
