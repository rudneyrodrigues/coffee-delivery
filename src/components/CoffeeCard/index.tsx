import Image from "next/image";
import { ShoppingCart } from "phosphor-react";

import { Counter } from "../Counter";
import { IconButton } from "../IconButton";

import { Container } from './styles';

interface CoffeeCardProps {
  title: string;
  slug: string;
  content: string;
  price: number;
  inventory: number;
  tags: string[];
  image: {
    fileName: string;
    url: string;
  }
}

const tagsList = {
  alcoholic: "Alcoólico",
  ice_cold: "Gelado",
  special: "Especial",
  traditional: "Tradicional",
  with_milk: "Com leite",
}

export const CoffeeCard = ({
  slug,
  image,
  price,
  title,
  content,
  tags,
  inventory,
}: CoffeeCardProps): JSX.Element => {
  return (
    <Container>
      <div className="coffee-car-image">
        <Image src={image.url} alt={title} width={120} height={120} />
      </div>

      <small>
        {inventory} unidades restantes
      </small>

      <div className="coffee-card-tag-list">
        { tags.map(tag => (
          <small key={tag} className="coffee-card-tag">
            {tagsList[`${tag}`]}
          </small>
        )) }
      </div>

      <h2>
        {title}
      </h2>

      <span>
        {content}
      </span>

      <div className="coffee-card-buy">
        <small>
          R$ {' '}
          <strong>
            {price}
          </strong>
        </small>

        <div className="coffee-card-buy-actions">
          <Counter min={1} max={inventory} inventory={inventory} />
          <IconButton icon={<ShoppingCart weight="fill" />} />
        </div>
      </div>
    </Container>
  )
}
