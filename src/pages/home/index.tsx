import { Link } from 'react-router-dom';
import { HeaderResponsive } from '../../components/Header';
import HeroContentLeft from '../../components/Hero';
import { Button } from '@mantine/core';

function Home() {
  return (
    <>
      <HeaderResponsive />
     <HeroContentLeft/>
     <Button>teste</Button>
    </>
  );
}

export default Home;
