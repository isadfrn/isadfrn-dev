import Link from 'next/link';
import Image from 'next/image';
import about from '../../assets/img/about.svg';
import portfolio from '../../assets/img/portfolio.svg';
import blog from '../../assets/img/blog.svg';
import study from '../../assets/img/study.svg';
import cv from '../../assets/img/cv.svg';
import links from '../../assets/img/links.svg';
import { Container } from './styles';

export function Menu() {
  return (
    <Container>
      <Link href="#">
        <a>
          <Image src={about} alt="About" />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image src={study} alt="Study" />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image src={portfolio} alt="Portfolio" />
        </a>
      </Link>

      <Link href="#">
        <a>
          <Image src={blog} alt="Blog" />
        </a>
      </Link>

      <Link href="#">
        <a>
          <Image src={cv} alt="Curriculum" />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image src={links} alt="Links" />
        </a>
      </Link>
    </Container>
  );
}
