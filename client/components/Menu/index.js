import Link from 'next/link';
import Image from 'next/image';

import about from '../../assets/icons/about.svg';
import portfolio from '../../assets/icons/portfolio.svg';
import blog from '../../assets/icons/blog.svg';
import study from '../../assets/icons/study.svg';
import cv from '../../assets/icons/cv.svg';
import links from '../../assets/icons/links.svg';
import arrow from '../../assets/icons/arrow.svg';

import { Container } from './styles';

export function Menu() {
  return (
    <Container>
      <Link href="/about">
        <a>
          <Image src={about} alt="About" />
        </a>
      </Link>
      <Link href="/education">
        <a>
          <Image src={study} alt="Study" />
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <Image src={portfolio} alt="Portfolio" />
        </a>
      </Link>

      <Link href="/blog">
        <a>
          <Image src={blog} alt="Blog" />
        </a>
      </Link>

      <Link href="/cv">
        <a>
          <Image src={cv} alt="Curriculum" />
        </a>
      </Link>
      <Link href="/links">
        <a>
          <Image src={links} alt="Links" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={arrow} alt="Home" />
        </a>
      </Link>
    </Container>
  );
}
