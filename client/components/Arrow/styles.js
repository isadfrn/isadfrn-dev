import styled from 'styled-components';

export const ContainerCenter = styled.a`
  position: absolute;
  bottom: 10rem;
  width: 2rem;
  margin: 1rem 0;

  animation-duration: 1s;
  animation-name: move;
  animation-iteration-count: infinite;
  transition: all 800ms ease;

  @keyframes move {
    from {
      bottom: 0.5rem;
    }

    to {
      bottom: 0;
    }
  }
`;

export const ContainerRight = styled.a`
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  width: 2rem;
  margin: 1rem 0;
`;
