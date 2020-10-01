using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        private readonly Random random = new Random();
        private readonly ILogger<MedicineController> _logger;

        public MedicineController(ILogger<MedicineController> logger)
        {
            //list.Add(new MedicineData { Id = 1, Brand = "m1", ExpiryDate = DateTime.Now, Notes = "g", Price = 5, Quantity = 9 });
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MedicineData> Get()
        {
            return list;
        }
        [HttpPost("Save")]
        public IActionResult Post([FromBody] MedicineData medicine)
        {
            medicine.Id= random.Next(1000);
            list.Add(medicine);
            return Ok(200);

        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var found = list.Find(m => m.Id == id);
            return Ok(found);

        }
    }
}
