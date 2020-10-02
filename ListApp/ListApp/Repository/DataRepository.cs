using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListApp.Repository
{
    public class DataRepository : IDataRepository
    {
        private static List<MedicineData> list = new List<MedicineData>();
        private readonly Random random = new Random();
        public DataRepository()
        {
            //list.Add(new MedicineData { Id = 1, Brand = "m1", ExpiryDate = DateTime.Now, Notes = "g", Price = 5, Quantity = 9 });
        }
        public void AddMedicine(MedicineData medicine)
        {

            medicine.Id = random.Next(1000);
            list.Add(medicine);
        }

        public MedicineData GetById(int id)
        {
            var found = list.Find(m => m.Id == id);
            return found;
        }

        public List<MedicineData> GetMedicines()
        {
           return list;
        }
    }
}
