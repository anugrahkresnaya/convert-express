class App {
  constructor() {
    this.searchButton = document.getElementById('search-filter');
    this.carContainerElement = document.getElementById('cars-container');
    this.dateFilter = document.getElementById('filter-by-date');
    this.timeFilter = document.getElementById('filter-by-time');
    this.seatFilter = document.getElementById('filter-by-seats');
  }

  async init() {
    await this.load();

    this.searchButton.onclick = this.find;
  }

  filter = () => {
    this.clear();
    const dateValue = this.dateFilter.value;
    const timeValue = this.timeFilter.value;
    const seatValue = this.seatFilter.value;

    const newDateTimeFormat = new Date(`${dateValue} ${timeValue}`);

    const getEpochTime = newDateTimeFormat.getTime();

    this.load(getEpochTime, seatValue);
  }

  find = () => {
    this.filter();
  }

  async load(filterDate, filterCapacity) {
    const cars = await Binar.listCars(item => item.availableAt >= filterDate && (item.capacity >= filterCapacity));
    console.log('cars:', cars)
    Car.init(cars)
    Car.list.forEach((car) => {
      const node = document.createElement("div")
      node.className = 'col-lg-4 card card-container'
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    })
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  }
}
