class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <img src="/images/image_car.png" alt="${this.manufacture}" class="car-card-image">
      <p class="font-card">${this.manufacture} ${this.model}</p>
      <h4 class="font-price">Rp ${this.rentPerDay} / hari</h2>
      <p class="font-card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="font-card"><img src="/images/fi_users.png">${this.capacity} orang</p>
      <p class="font-card"><img src="/images/fi_settings.png">${this.transmission}</p>
      <p class="font-card"><img src="/images/fi_calendar.png">tahun ${this.year}</p>
      <button type="button" class="btn pilih-btn">Pilih Mobil</button>
    `;
  }
}
