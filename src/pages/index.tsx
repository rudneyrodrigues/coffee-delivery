import Head from 'next/head';
import Image from 'next/image';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, type NextPage } from 'next';

import { Header } from '../components/Header';
import { Container, Main } from '../styles/pages/Home/style';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { CoffeeCard } from '../components/CoffeeCard';

type CoffeeProps = {
  id: string;
  title: string;
  slug: string;
  content: string;
  price: number;
  inventory: number;
  tags: [];
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

      <Container>
        <Header />

        <Main>
          <div className="intro-home">
            <div className='intro-home-content'>
              <h1>
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </span>

              <div className="intro-home-content-items">
                <div className="items-content">
                  <div className="icon-container icon-shopping">
                    <ShoppingCart weight="fill" className="icon" />
                  </div>
                  <p>Compra simples e segura</p>
                </div>
                <div className="items-content">
                  <div className="icon-container icon-package">
                    <Package weight="fill" className="icon" />
                  </div>
                  <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="items-content">
                  <div className="icon-container icon-timer">
                    <Timer weight="fill" className="icon" />
                  </div>
                  <p>Entrega rápida e rastreada</p>
                </div>
                <div className="items-content">
                  <div className="icon-container icon-coffee">
                    <Coffee weight="fill" className="icon" />
                  </div>
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
            <Image src="/images/cup-of-coffee.png" alt="Copo de café" width={476} height={360} layout="fixed" />
          </div>

          <div className="coffees-home">
            <h1>Nossos cafés</h1>

            <div className="list-coffees">
              { coffees.map(coffee => (
                <CoffeeCard
                  key={coffee.id}
                  slug={coffee.slug}
                  image={coffee.image}
                  title={coffee.title}
                  content={coffee.content}
                  inventory={coffee.inventory}
                  tags={coffee.tags}
                  price={coffee.price}
                />
              )) }
            </div>
          </div>
        </Main>
      </Container>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const hyGraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API);

  const { coffees }: HomeProps = await hyGraph.request(`
    query GetCafes {
      coffees(first: 20) {
        id
        title
        slug
        content
        price
        inventory
        tags
        image {
          fileName
          url
        }
      }
    }
  `);

  const formattedCoffees = coffees.map(coffee => {
    return {
      ...coffee,
      price: coffee.price.toLocaleString('pt-br',{
        minimumFractionDigits: 2
      })
    }
  })

  return {
    props: {
      coffees: formattedCoffees,
    },
    revalidate: 3600 // 1 hora
  }
}
