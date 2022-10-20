import styled from 'styled-components';

import { theme } from '../../../styles/theme';

interface ButtonProps {
  full?: boolean;
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
}

export const Container = styled.button`
  width: ${(props: ButtonProps) => props.full ? "100%" : "auto"};
  height: ${(props: ButtonProps) => props.size === 'lg' ? "2.875rem" : "2rem"};
  padding: ${(props: ButtonProps) => props.size === 'lg' ? "0 2.8125rem" : "0 .5rem"};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  border-radius: .375rem;

  background: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.primary.mid}` : `${theme.colors.gray[400]}`};

  transition: all .2s ease-in-out;

  &:hover {
    background: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.primary.dark}` : `${theme.colors.gray[500]}`};
  }

  & > span {
    text-transform: uppercase;
    color: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.white}` : `${theme.colors.text.support}`};
    font-size: ${(props: ButtonProps) => props.size === 'lg' ? ".875rem" : ".75rem"};
    font-weight: ${(props: ButtonProps) => props.size === 'lg' ? "700" : "400"};
  }

  & > .icon {
    width: 1rem;
    height: 1rem;
    color: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.gray[200]}` : `${theme.colors.secondary.mid}`};
  }
`;
