import { ButtonHTMLAttributes, cloneElement, ReactElement } from "react";
import { Container } from "./styles";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

export const IconButton = ({
  icon,
  isLoading = false,
  variant = "primary",
  ...rest
}: IconButtonProps): JSX.Element => {
  return (
    <Container variant={variant} {...rest}>
      { icon && (
        <>
          { cloneElement(icon, {
            className: "icon-button",
          }) }
        </>
      ) }
    </Container>
  )
}
