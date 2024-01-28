import { Address, House } from "../models/house.model";

export class HouseService {
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
    // BEGIN: generate-houses
    {
      name: "Baratheon",
      address: {
        street: "1 Storm's End Lane",
        city: "Storm's End",
        state: "The Stormlands",
        zipCode: "12345",
      },
      value: 4000000,
      color: "Gold",
    },
    {
      name: "Greyjoy",
      address: {
        street: "1 Pyke Place",
        city: "Pyke",
        state: "The Iron Islands",
        zipCode: "12345",
      },
      value: 5000000,
      color: "Black",
    },
    {
      name: "Martell",
      address: {
        street: "1 Sunspear Street",
        city: "Sunspear",
        state: "Dorne",
        zipCode: "12345",
      },
      value: 6000000,
      color: "Red",
    },
    {
      name: "Tyrell",
      address: {
        street: "1 Highgarden Avenue",
        city: "Highgarden",
        state: "The Reach",
        zipCode: "12345",
      },
      value: 7000000,
      color: "Green",
    },
    {
      name: "Arryn",
      address: {
        street: "1 Eyrie Road",
        city: "The Eyrie",
        state: "The Vale",
        zipCode: "12345",
      },
      value: 8000000,
      color: "Blue",
    },
    {
      name: "Tully",
      address: {
        street: "1 Riverrun Lane",
        city: "Riverrun",
        state: "The Riverlands",
        zipCode: "12345",
      },
      value: 9000000,
      color: "Silver",
    },
    {
      name: "Mormont",
      address: {
        street: "1 Bear Island Drive",
        city: "Bear Island",
        state: "The North",
        zipCode: "12345",
      },
      value: 10000000,
      color: "Brown",
    },
    {
      name: "Tarly",
      address: {
        street: "1 Horn Hill Road",
        city: "Horn Hill",
        state: "The Reach",
        zipCode: "12345",
      },
      value: 11000000,
      color: "Green",
    },
    {
      name: "Clegane",
      address: {
        street: "1 Clegane Keep",
        city: "Clegane Keep",
        state: "The Westerlands",
        zipCode: "12345",
      },
      value: 12000000,
      color: "Black",
    },
    {
      name: "Bolton",
      address: {
        street: "1 Dreadfort Road",
        city: "The Dreadfort",
        state: "The North",
        zipCode: "12345",
      },
      value: 13000000,
      color: "Pink",
    },
    {
      name: "Frey",
      address: {
        street: "1 Twins Lane",
        city: "The Twins",
        state: "The Riverlands",
        zipCode: "12345",
      },
      value: 14000000,
      color: "Grey",
    },
    {
      name: "Manderly",
      address: {
        street: "1 White Harbor Road",
        city: "White Harbor",
        state: "The North",
        zipCode: "12345",
      },
      value: 15000000,
      color: "Blue",
    },
    {
      name: "Seaworth",
      address: {
        street: "1 Cape Wrath Lane",
        city: "Cape Wrath",
        state: "The Stormlands",
        zipCode: "12345",
      },
      value: 16000000,
      color: "Grey",
    },
    {
      name: "Karstark",
      address: {
        street: "1 Karhold Road",
        city: "Karhold",
        state: "The North",
        zipCode: "12345",
      },
      value: 17000000,
      color: "Black",
    },
    {
      name: "Umber",
      address: {
        street: "1 Last Hearth Lane",
        city: "Last Hearth",
        state: "The North",
        zipCode: "12345",
      },
      value: 18000000,
      color: "Brown",
    },
    {
      name: "Dayne",
      address: {
        street: "1 Starfall Road",
        city: "Starfall",
        state: "Dorne",
        zipCode: "12345",
      },
      value: 19000000,
      color: "Silver",
    },
    {
      name: "Hightower",
      address: {
        street: "1 Oldtown Avenue",
        city: "Oldtown",
        state: "The Reach",
        zipCode: "12345",
      },
      value: 20000000,
      color: "Gold",
    },
    {
      name: "Redwyne",
      address: {
        street: "1 The Arbor Lane",
        city: "The Arbor",
        state: "The Reach",
        zipCode: "12345",
      },
      value: 21000000,
      color: "Green",
    },
    {
      name: "Florent",
      address: {
        street: "1 Brightwater Keep",
        city: "Brightwater Keep",
        state: "The Reach",
        zipCode: "12345",
      },
      value: 22000000,
      color: "Red",
    },
    // END: generate-houses
  ];
}

export default HouseService;
