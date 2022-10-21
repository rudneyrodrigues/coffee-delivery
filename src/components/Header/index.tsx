import Image from "next/image";
import { MapPin, ShoppingCart } from 'phosphor-react';

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Container } from "./styles";

export const Header = (): JSX.Element => {
  return (
    <Container>
      <div className="header-content">
        <Image src="/images/logo.svg" alt="Coffee Delivery" width={84.95} height={40} />

        <div className="header-buttons">
          <Button size="sm" variant="secondary" leftIcon={<MapPin weight="fill" />}>
            Petrolina, PE
          </Button>

          <IconButton icon={<ShoppingCart weight="fill" />} variant="secondary" />
        </div>
      </div>
    </Container>
  )
}
