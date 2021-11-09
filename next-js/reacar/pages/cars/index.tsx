import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getAll, ICar } from "../../services/data";
import { FiSearch, FiTool, FiClock, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { CarItemSpecification } from "../components/CarItemSpecification";

type Props = {
  cars: ICar[];
};

// SERVER SIDE
export const getStaticProps: GetStaticProps<Props> = async () => {
  const allCars = await getAll();

  return {
    props: {
      cars: allCars ?? [],
    },
    revalidate: 5000,
  };
};

// CLIENT SIDE

type ListProps = InferGetStaticPropsType<typeof getStaticProps>;

const List = ({ cars }: ListProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  if (router.isFallback) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <div className="flex flex-col w-full m-4 md:w-2/3 xl:w-1/2">
        <form
          className="
          flex
          justify-between
          items-center
          mb-5
        "
          onSubmit={(ev) => {
            ev.preventDefault();

            console.log(searchTerm);

            // implementa a pesquisa
          }}
        >
          <input
            className="
           appearance-none
           border-1 
           rounded
           w-full
           py-2
           px-4
           text-gray-700
           leading-7
           h-14
           "
            type="text"
            placeholder="Qual marca quer encontrar?"
            value={searchTerm}
            onChange={(ev) => setSearchTerm(ev.target.value)}
            required
          />
          <button
            type="submit"
            className="
            flex
            items-center
            bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            w-3/12
            h-full
            justify-center
          "
          >
            <span className="hidden md:block">Search</span>
            <FiSearch className="text-2xl md:ml-2" />
          </button>
        </form>

        <h2 className="text-3xl font-medium my-4 text-gray-800">
          Itens recomendados
        </h2>

        {cars.length === 0 && (
          <h2 className="text-2xl font-medium my-4 text-gray-800">
            Ops, não há itens disponíveis
          </h2>
        )}

        {cars.map((car) => (
          <div
            className="
            w-full
            shadow
            p-3
            mb-5
            rounded
            hover:shadow-xl
            transition ease-out duration-1000
          "
            key={car.id}
          >
            <div className="relative w-full h-96 md:h-500px">
              <Image
                src={car.image}
                alt={car.make}
                layout="fill"
                className="rounded"
                objectFit="cover"
              />
            </div>

            <Link href={`/cars/detail/${car.id}`} passHref>
              <a className="text-gray-800 pt-3 text-lg">
                {car.make} {car.model}
              </a>
            </Link>

            <p className="font-bold text-gray-800 py-3 text-lg">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(car.price)}
            </p>

            <div className="flex justify-between">
              <CarItemSpecification text={car.fuel} icon={<FiTool />} />
              <CarItemSpecification text={car.year} icon={<FiClock />} />
              <CarItemSpecification
                text={car.mileage.toString()}
                icon={<FiMapPin />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
