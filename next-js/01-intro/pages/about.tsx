import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  // obtem o valor de uma API
  // fetch('sua-api/about.json')
  return {
    props: {
      content: "Olá esse é o resultado da requisição",
    },
  };
};

const About = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <h1>{content}</h1>;
};

export default About;
