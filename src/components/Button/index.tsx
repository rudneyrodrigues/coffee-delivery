import { ButtonHTMLAttributes, cloneElement, ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
}

export const Button = ({
  size = "lg",
  full = false,
  leftIcon,
  children,
  rightIcon,
  variant = "primary",
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <Container full={full} size={size} variant={variant} {...rest}>
      { leftIcon && (
        <>
          { cloneElement(leftIcon, {
            className: "icon"
          }) }
        </>
      ) }

      <span>
        {children}
      </span>

      { rightIcon && (
        <>
          { cloneElement(rightIcon, {
            className: "icon"
          }) }
        </>
      ) }
    </Container>
  )
}
