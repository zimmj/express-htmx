import { Request, Response, Router } from "express";
import { Address, House } from "../models/house.model";
import { HouseService } from "../services/house.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import { Layout } from "..";

const houseRouter = Router();
const houseService = new HouseService();

houseRouter.get("/index", (_, res) => {
  res.send(
    <Layout>
      <div>
        <h1>House Service</h1>
        <div>
          <div>
            <h2>Houses Safed</h2>
            <div id="housCounter" hx-get="/houses/counter" hx-swap="innerHTML" hx-trigger="load">
              Counter
            </div>
          </div>
        </div>
      </div>
    </Layout>,
  )
});

houseRouter.get("/", (_, res) => {
  const houses = houseService.getAllHouses();
  res.send(
    <div>
      {houses.map((house) => (
        <HouseComponent house={house} />
      ))}
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

  const count = houseService.deleteHouse(name);

  res.send(
    <HousCounter amount={count} />
  )
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
  <div>
    <h1>{house.name}</h1>
    <AddressComponent address={house.address} />
    <p>Value : {house.value}</p>
  </div>
  ;

const HousCounter = (counter: { amount: number }) =>
  <div>
    <h2>Amount houses: {"" + counter.amount}</h2>
  </div>;