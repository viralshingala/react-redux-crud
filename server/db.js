var faker = require('faker');
var _ = require('lodash');

module.exports = function() {
  var data = {    
    cars: [],
  };

  // Create cars
  for (var i = 1; i <= 5; i++) {
    data.cars.push({
      id: i,
      manufacturer: faker.company.companyName(),
      make: faker.commerce.department(),
      model: faker.commerce.productName(),
      year: faker.random.number()
    });
  }

  return data;
}();
