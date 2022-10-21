import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  height: 4rem;
  padding: 0 1rem;
  background: ${theme.colors.background};

  top: 0;
  position: sticky;
  z-index: 9999;

  & > .header-content {
    max-width: 1120px;
    height: 4rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    & > .header-buttons {
      margin-left: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .75rem;
    }
  }
`;
