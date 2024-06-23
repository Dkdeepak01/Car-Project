import { faker } from "@faker-js/faker";

function generateDummyData() {
  const cars = Array.from({ length: 10 }, () => ({
    name: faker.vehicle.vehicle(),
    price: faker.finance.amount(),
    dealer: faker.company.companyName(),
  }));

  return cars;
}

export { generateDummyData };
