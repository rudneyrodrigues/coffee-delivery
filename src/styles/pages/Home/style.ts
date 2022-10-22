import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  & > .intro-home {
    padding: 5.875rem 0;

    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
    justify-items: center;
    justify-content: center;

    & > .intro-home-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      & > h1 {
        font-size: ${theme.texts.heading.fontSize.xl};
        line-height: ${theme.texts.heading['line-height']};
        color: ${theme.colors.text.title};
      }

      & > span {
        font-size: ${theme.texts.body.fontSize.xl};
        line-height: ${theme.texts.body['line-height'].normal};
        color: ${theme.colors.text.support};
      }

      & > .intro-home-content-items {
        margin-top: 4.125rem;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: .5rem;

        align-items: center;
        justify-items: flex-start;

        & >.items-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .75rem;

          & > .icon-container {
            width: 2rem;
            height: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 9999px;

            & > .icon {
              width: 1rem;
              height: 1rem;
              color: ${theme.colors.gray[200]};
              fill: ${theme.colors.gray[200]};
            }
          }

          & > .icon-shopping {
            background: ${theme.colors.primary.dark};
          }

          & > .icon-package {
            background: ${theme.colors.gray[700]};
          }

          & > .icon-timer {
            background: ${theme.colors.primary.mid};
          }

          & > .icon-coffee {
            background: ${theme.colors.secondary.mid};
          }
        }
      }
    }
  }

  & > .coffees-home {
    & > .list-coffees {
      margin: 3.375rem 0;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2.5rem 2rem;
      align-items: center;
      justify-items: center;
    }
  }
`;
