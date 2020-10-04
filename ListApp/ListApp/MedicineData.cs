using System;

namespace ListApp
{
    public class MedicineData
    {
        public int Id { get; set; }
        public DateTime ExpiryDate
        {
            get { return _expiry; }
            set { _expiry = value; }
        }
        private DateTime _expiry;
        public string Brand { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }

        public string Notes { get; set; }
        public bool IsRed { get { return (ExpiryDate - DateTime.Today).TotalDays <= 30; } }
    }
}
