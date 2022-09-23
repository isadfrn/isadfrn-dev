import Image from 'next/image';
import Link from 'next/link';
import arrowDown from '../../assets/img/arrow-down.svg';
import arrowTop from '../../assets/img/arrow-top.svg';
import { ContainerCenter, ContainerRight } from './styles';

export function Arrow({ direction, address }) {
  return (
    <Link href={address}>
      {direction === 'bottom' ? (
        <ContainerCenter>
          <Image src={arrowDown} alt="An arrow pointing down" />
        </ContainerCenter>
      ) : (
        <ContainerRight>
          <Image src={arrowTop} alt="An arrow pointing top" />
        </ContainerRight>
      )}
    </Link>
  );
}
