import { Request, Response, Router } from "express";
import { Address, House } from "../models/house.model";
import { HouseService } from "../services/house.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import { Layout } from "..";
import Card from "../components/card.component";
import Divider from "../components/divider.components";
import TextInput from "../components/text-input.component";

const houseRouter = Router();
const houseService = new HouseService();

houseRouter.get("/index", (_, res) => {
  res.send(
    <Layout>
      <div class="houses-overview__grid">
        <div class="col-span-3 flex justify-center">
          <h1 class=" text-2xl">House Service</h1>
        </div>
        <div class="col-span-1 border-4 border-stone-200  bg-stone-200 rounded">
          <div class="p-1">
            <h2>Houses Safed</h2>
            <div id="housCounter" hx-get="/houses/counter" hx-swap="innerHTML" hx-trigger="load, countChanged from:body">
              Counter is loading...
            </div>
            <div id="houseFilter" class="flex flex-col justify-between h-full">
              <TextInput label="Name" id="name" />
              <TextInput label="Color" id="color" />
              <TextInput label="Amount" id="amount" />
            </div>
          </div>
        </div>
        <div id="housesList" class="col-span-2 overflow-auto" hx-get="/houses" hx-swap="innerHTML" hx-trigger="load">
          Houses are loading...
        </div>
      </div>
    </Layout>,
  )
});

houseRouter.get("/", (_, res) => {
  const houses = houseService.getAllHouses();
  res.send(
    <div>
      <div class="grid auto-cols-max grid-cols-2 md:grid-cols-3 grid-rows-3 gap-2">
        {houses.map((house) => (
          <HouseComponent house={house} />
        ))}
      </div>
    </div>,
  )
});

houseRouter.get("/counter", (_, res) => {
  const count = houseService.getHouseCount();
  res.send(
    <HousCounter amount={count} />
  )
});

houseRouter.get("/:id", (req: Request, res: Response) => {
  const name = req.params.name;

  const house = houseService.getHouseByName(name);

  if (!house) res.status(404).send("House not found");

  res.send(
    <HouseComponent house={house!} />
  );
});

houseRouter.post("/", (req: Request, res: Response) => {
  const { name, address, value, color } = req.body;

  const house: House = {
    name,
    address,
    value,
    color,
  };

  const count = houseService.addHouse(house);
  res.send(
    <HousCounter amount={count} />
  )
});


houseRouter.delete("/:name", (req: Request, res: Response) => {
  const name = req.params.name;

  houseService.deleteHouse(name);

  res.setHeader("HX-Trigger", "countChanged").status(202).send();
});

export default houseRouter;

const AddressComponent = ({ address }: { address: Address }) =>
  <div>
    <p>{address.street}</p>
    <p>{address.city}</p>
    <p>{address.state}</p>
    <p>{address.zipCode}</p>
  </div>;

const HouseComponent = ({ house }: { house: House }) =>
  <div class="col-auto justy-stretch fade-me-out" hx-target="this">
    <Card title={house.name}>
      <div class="flex flex-col justify-between h-full">
        <AddressComponent address={house.address} />
        <p>Value : {house.value}</p>
        <Divider text="Action Buttons" />
        <div class="flex justify-between">
          <button class="bg-green-600 hover:bg-green-400 p-2 rounded" hx-get={`/houses/${house.name}/edit`} hx-swap="outerHTML">
            Edit
          </button>
          <button class="bg-red-600 hover:bg-red-400 p-2 rounded justify-self-end" hx-trigger="click once" hx-delete={`/houses/${house.name}`} hx-swap="outerHTML swap:1s">
            Delete
          </button>
        </div>
      </div>
    </Card >
  </div>
  ;

const HousCounter = (counter: { amount: number }) =>
  <div>
    <h2>Amount houses: {"" + counter.amount}</h2>
  </div>;