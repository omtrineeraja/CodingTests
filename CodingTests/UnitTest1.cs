using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodingTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Dictionary<string, string> nameValues = new Dictionary<string, string>();
            nameValues.Add("Id", "111");
            nameValues.Add("Address.Street", "1 main street");
            nameValues.Add("Address.City", "boston");
            nameValues.Add("Address.State", "ma");
            nameValues.Add("Address.Zip", "11111");
            nameValues.Add("Specalities[0].Description", "Anesthesiology");
            nameValues.Add("Specalities[1].Description", "Cardiology");

            //to implement
            var provider = DeserializeToInstance<Provider>(nameValues);

            Assert.AreEqual("111", provider.Id);
            Assert.AreEqual("1 main street", provider.Address.Street);
            Assert.AreEqual("boston", provider.Address.City);
            Assert.AreEqual("ma", provider.Address.State);
            Assert.AreEqual("11111", provider.Address.Zip);

            Assert.AreEqual("Anesthesiology", provider.Specalities[0].Description);
            Assert.AreEqual("Cardiology", provider.Specalities[1].Description);

        }

        static T DeserializeToInstance<T>(Dictionary<string, string> dict)
        {
            throw new NotImplementedException();
        }
    }


    class Provider
    {
        public string Id { get; set; }
        public Address Address{get; set; }
        public List<Speciality> Specalities;
    }
    
    class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
    }

    class Speciality
    {
        public string Description { get; set; }
    }
}
