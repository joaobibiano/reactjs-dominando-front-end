import fs from "fs/promises";
import path from "path";

export interface ICar {
  make: string;
  model: string;
  year: string;
  image: string;
  id: number;
  price: number;
  description: string;
  condition: string;
  mileage: number;
  transmission: string;
  fuel: string;
  location: string;
  date: Date;
}

const dataDirectory = path.join(process.cwd(), "services", "data.json");

export async function getTop10() {
  const jsonString = await fs.readFile(dataDirectory, "utf8");

  const json = JSON.parse(jsonString);

  return json.cars_top_10_visited as number[];
}

export async function getById(id: string) {
  const jsonString = await fs.readFile(dataDirectory, "utf8");

  const json = JSON.parse(jsonString);

  return json.cars.find((car: ICar) => car.id.toString() === id) as
    | ICar
    | undefined;
}

export async function getAll() {
  const jsonString = await fs.readFile(dataDirectory, "utf8");

  const json = JSON.parse(jsonString);

  return json.cars as ICar[] | undefined;
}

export async function searchByTerm(search: string) {
  const jsonString = await fs.readFile(dataDirectory, "utf8");

  const json = JSON.parse(jsonString);

  const searchLowerCase = search.toLowerCase();
  // TOY
  // TOYOTA

  return json.cars.filter(
    (car: ICar) =>
      car.make.toLowerCase().includes(searchLowerCase) ||
      car.model.toLowerCase().includes(searchLowerCase)
  ) as ICar[] | undefined;
}
