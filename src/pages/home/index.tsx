import { Link } from 'react-router-dom';
import { HeaderResponsive } from '../../components/Header';
import { HeroContentLeft } from '../../components/Hero';

function Home() {
  return (
    <>
      <HeaderResponsive />
     <HeroContentLeft/>
     {/* <Link to="/about"> teste</Link> */}
    </>
  );
}

export default Home;
