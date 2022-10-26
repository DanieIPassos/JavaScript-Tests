const BaseRepository = require("./../base/baseRepository");

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  async findAvailable(carCategory) {
    const all = await this.carRepository.find(carCategory);
    const available = all.filter((car) => car.available);
    return available;
  }
}

module.exports = CarService;
