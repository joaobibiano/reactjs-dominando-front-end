import React from "react";
import {
  CarItemSpecification,
  CarItemTextSpecification,
} from "../../../components/CarItemSpecification";
import { FiTool, FiClock, FiMapPin, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { getById, getTop10, ICar } from "../../../services/data";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {
  car: ICar;
};

export const getStaticPaths = async () => {
  // returns the top 10 cars
  const data = await getTop10();

  const paths = data.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

// temp
const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
};

// SERVER SIDE
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    };
  }

  const car = await getById(context.params?.id as string);

  await sleep();

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car: car,
    },
    revalidate: 5000,
  };
};

// CLIENT SIDE

type DetailProps = InferGetStaticPropsType<typeof getStaticProps>;

const Detail = ({ car }: DetailProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading ...</h2>;
  }

  const nameSEO = `Buy ${car.model} ${car.make} ${car.year}`;
  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <Head>
        <title>{nameSEO}</title>
        <meta name="title" content={nameSEO} />
        <meta name="description" content={"Don't forget to check" + nameSEO} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={nameSEO} />
        <meta
          property="og:description"
          content={"Don't forget to check" + nameSEO}
        />
        <meta property="og:image" content={car.image} />
      </Head>

      <div className="flex flex-col w-full m-4 md:w-2/3 xl:w-1/2">
        <div className="flex my-5">
          <Link href="/cars" passHref>
            <a className="flex font-semibold py-2 px-4 hover:bg-gray-200 rounded">
              <FiArrowLeft className="mr-2" size={24} />
              Voltar
            </a>
          </Link>
        </div>

        <div
          className="
        w-full
        shadow
        p-3
        mb-5
        rounded
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

          <p className="text-gray-800 pt-3 text-lg">
            {car.make} {car.model}
          </p>

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

          <CarItemTextSpecification text={car.description} />
          <CarItemTextSpecification text={"Condition: " + car.condition} />
          <CarItemTextSpecification text={"City: " + car.location} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
