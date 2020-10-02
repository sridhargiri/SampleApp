using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListApp.Repository
{
    public interface IDataRepository
    {
        List<MedicineData> GetMedicines();
        int AddMedicine(MedicineData medicineData);
        MedicineData GetById(int id);
    }
}
