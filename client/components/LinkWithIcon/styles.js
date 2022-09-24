import Image from 'next/image';

import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE_500};

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(Image)``;

export const Name = styled.span``;
