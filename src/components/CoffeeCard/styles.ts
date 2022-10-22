import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${theme.colors.shape.secondary};

  border-radius: .375rem 2.25rem .375rem 2.25rem;

  & > .coffee-car-image {
    top: -500px;
    min-width: 120px;
    min-height: 120px;
  }

  & > .coffee-card-tag-list {
    height: 100%;
    margin-top: .75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;

    overflow-x: auto;

    & > .coffee-card-tag {
      padding: .25rem .5rem;

      background: ${theme.colors.primary.light};
      color: ${theme.colors.primary.dark};

      font-weight: 700;
      font-size: .625rem;
      text-transform: uppercase;

      border-radius: 100px;
    }
  }

  & > h2 {
    color: ${theme.colors.text.base};
    font-size: ${theme.texts.heading.fontSize.sm};
    line-height: ${theme.texts.heading['line-height']};
    text-align: center;
  }

  & > span {
    margin-top: .5rem;
    font-size: ${theme.texts.body.fontSize.sm};
    color: ${theme.colors.gray[600]};
    text-align: center;
    line-height: ${theme.texts.body['line-height'].normal};
  }

  & > .coffee-card-buy {
    width: 100%;
    margin-top: 2.0625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:.25rem;

    & > small {
      font-size: ${theme.texts.body.fontSize.sm};
      line-height: ${theme.texts.body['line-height'].normal};
      color: ${theme.colors.text.support};

      & > strong {
        font-weight: 700;
        font-size: ${theme.texts.heading.fontSize.md};
        font-family: ${theme.texts.heading.fontFamily};
        line-height: ${theme.texts.heading['line-height']};
      }
    }
  }
`;
