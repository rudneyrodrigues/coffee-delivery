import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, type NextPage } from 'next';
import Image from 'next/image';
import { Header } from './components/Header';

type CoffeeProps = {
  id: string;
  title: string;
  slug: string;
  content: string;
  price: number;
  inventory: number;
  image: {
    fileName: string;
    url: string;
  }
}

interface HomeProps {
  coffees: CoffeeProps[];
}

const Home: NextPage = ({ coffees }: HomeProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Bem vindo - Coffee Delivery</title>
      </Head>

      <div>
        <Header />

        <h1>Home page</h1>
      </div>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const hyGraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API);

  const { coffees } = await hyGraph.request(`
    query GetCafes {
      coffees {
        id
        title
        slug
        content
        price
        inventory
        image {
          fileName
          url
        }
      }
    }
  `);

  return {
    props: {
      coffees,
    },
    revalidate: 3600 // 1 hora
  }
}
