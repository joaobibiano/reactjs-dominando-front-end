import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAll, ICar } from "../../services/data";

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
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>{car.make}</div>
      ))}
    </div>
  );
};

export default List;
