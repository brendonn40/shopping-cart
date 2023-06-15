import { Button, SimpleGrid } from '@mantine/core';
import { HeaderResponsive } from '../../components/Header';
import FeaturesCard from '../../components/card';
import { useState } from 'react';

function Shop() {
  const laptops = [
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-compaq-presario-427-intel-pentium-n3700-4gb-240gb-ssd-141-linux/magazineluiza/233508700/836857a8ee8cd7586e7ba6c15c263757.jpg',
      model: 'Notebook Compaq Presario 427 Intel Pentium N3700 - 4GB 240GB SSD 14,1” Linux',
      discount: 10,
      price: 1300,
    },
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-asus-ssd-128gb-15-6-azul/mindsetstore/16015312326/c8188cf21b4f932e890b7246212c82d1.jpeg',
      model: 'Notebook Asus Ssd 128Gb 15.6" Azul',
      discount: 20,
      price: 2400,
    },
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-gamer-acer-nitro-5-intel-core-i5-8gb-512gb-ssd-156-full-hd-nvidia-gtx-1650-4gb-linux/magazineluiza/236463100/929d1e3f4974729983958ed4d862f3a0.jpg',
      model:
        'Notebook Gamer Acer Nitro 5 Intel Core i5 8GB - 512GB SSD 15,6” Full HD NVIDIA GTX 1650 4GB Linux',
      discount: 10,
      price: 4500,
    },
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-asus-intel-core-i5-8gb-512gb-ssd-156-windows-11-x515ja-ej1791w/magazineluiza/237167700/cb3e5d9b070a6b6cac5406238d4e5582.jpg',
      model: 'Notebook Asus Intel Core i5 8GB 512GB SSD 15,6” - Windows 11 X515JA-EJ1791W',
      discount: 12,
      price: 3300,
    },
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-positivo-motion-intel-atom-4gb-128gb-emmc-141-led-windows-10/magazineluiza/232710700/cc1d8d423054c6546b65ee202ef07d2d.jpg',
      model: 'Notebook Positivo Motion Intel Atom - 4GB 128GB eMMC 14,1” LED Windows 10',
      discount: 15,
      price: 1200,
    },
    {
      image:
        'https://a-static.mlcdn.com.br/280x210/notebook-gamer-lenovo-gaming-3i-intel-core-i5-8gb-512gb-ssd-155-fullhd-nvidia-gtx-1650-windows-11/magazineluiza/235631800/d448e6239feb07cb074d6821e9939b77.jpg',
      model:
        'Notebook Gamer Lenovo Gaming 3i Intel Core i5 8GB - 512GB SSD 15,5” FullHD NVIDIA GTX 1650 Windows 11',
      discount: 15,
      price: 4200,
    },
  ];
  const [cart, setCart] = useState<any[]>([]);
  return (
    <>
      <HeaderResponsive cart={cart}/>
      <SimpleGrid cols={3}>
        {laptops.map((laptop) => (
          <FeaturesCard
            key={laptop.model}
            item={laptop}
            setCart={setCart}
            cart={cart}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Shop;
