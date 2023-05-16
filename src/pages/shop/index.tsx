import { SimpleGrid } from '@mantine/core';
import { HeaderResponsive } from '../../components/Header';
import FeaturesCard from '../../components/card';

function Shop() {
  return (
    <>
      <HeaderResponsive />
      <SimpleGrid cols={3}>
        <FeaturesCard image="https://i.imgur.com/ZL52Q2D.png" model="Tesla Model S" discount={10} price={100}/>
        <FeaturesCard
          image="https://a-static.mlcdn.com.br/280x210/notebook-compaq-presario-427-intel-pentium-n3700-4gb-240gb-ssd-141-linux/magazineluiza/233508700/836857a8ee8cd7586e7ba6c15c263757.jpg"
          model="Notebook Compaq Presario 427 Intel Pentium N3700 - 4GB 240GB SSD 14,1” Linux"
          discount={10}
          price={1300}
        />
      </SimpleGrid>
    </>
  );
}

export default Shop;
