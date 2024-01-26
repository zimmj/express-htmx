export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export type House = {
  name: string;
  address: Address;
  value: number;
  color: string;
};
