import { Address, House } from "../models/house.model";

export class HouseService {
  private houses: House[] = [
    {
      name: "Stark",
      address: {
        street: "1 Winterfell Way",
        city: "Winterfell",
        state: "The North",
        zipCode: "12345",
      },
      value: 1000000,
      color: "Grey",
    },
    {
      name: "Lannister",
      address: {
        street: "1 Casterly Rock Road",
        city: "Casterly Rock",
        state: "The Westerlands",
        zipCode: "12345",
      },
      value: 2000000,
      color: "Red",
    },
    {
      name: "Targaryen",
      address: {
        street: "1 King's Landing Drive",
        city: "King's Landing",
        state: "The Crownlands",
        zipCode: "12345",
      },
      value: 3000000,
      color: "Black",
    },
  ];

  public getAllHouses(): House[] {
    return this.houses.slice();
  }

  public getHouseCount(): number {
    return this.houses.length;
  }

  public getHouseByName(name: string): House | undefined {
    return this.houses.find((house) => house.name === name);
  }

  public addHouse(house: House): number {
    this.houses.push(house);
    return this.houses.length;
  }

  public sortHousesByValue(): void {
    this.houses.sort((a, b) => a.value - b.value);
  }

  public sortHousesByColor(): void {
    this.houses.sort((a, b) => a.color.localeCompare(b.color));
  }

  public deleteHouse(name: string): number {
    this.houses = this.houses.filter((house) => house.name !== name);
    return this.houses.length;
  }

  public searchHouse(address: Address): House | undefined {
    return this.houses.find((house) => house.address === address);
  }
}

export default HouseService;
