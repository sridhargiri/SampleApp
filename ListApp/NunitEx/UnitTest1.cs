using ListApp;
using ListApp.Repository;
using Moq;
using NUnit.Framework;
using System;

namespace NunitEx
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }
        static int _id = 0;
        [Test]
        public void Add_Medicine_Test()
        {

            var mockRepository = new Mock<IDataRepository>();
            mockRepository.
      Setup(x => x.AddMedicine(It.Is<MedicineData>(c => c.Brand == "Jamaica"))).
      Returns(() => new Random().Next(1, 100));
            int id = _id = mockRepository.Object.AddMedicine(new MedicineData { Brand = "Jamaica" });
            mockRepository.VerifyAll();
            Assert.IsTrue(id > 0);
        }
    }
}