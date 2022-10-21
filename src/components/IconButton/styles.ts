import styled from 'styled-components';

import { theme } from '../../styles/theme';

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Container = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  border-radius: .375rem;

  background: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.secondary.dark}` : `${theme.colors.primary.light}`};

  transition: all .2s ease-in-out;

  & > .icon-button {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.gray[200]}` : `${theme.colors.primary.dark}`};

    transition: all .2s ease-in-out;
  }

  &:hover {
    background: ${(props: ButtonProps) => props.variant === 'primary' ? `${theme.colors.secondary.mid}` : `${theme.colors.primary.mid}`};

    & >.icon-button {
      color: ${(props: ButtonProps) => props.variant === 'secondary' && `${theme.colors.white}`};
    }
  }
`;
