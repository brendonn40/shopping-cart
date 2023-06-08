import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

interface Laptop {
  image:string;
  model:string;
  discount:number;
  price:number;
}
export default function FeaturesCard({
  item,
  setCart,
  cart,
}: {
  item:Laptop;
  setCart:(v:any)=> void;
  cart:any[];
}) {
  const { classes } = useStyles();

  const handleAdd = (i:any) => {
    setCart((currItems:any) => {
      if (currItems.find((ite:any) => ite.model === i.model) === undefined) {
        return [...currItems, { model: i.model, quantity: 1 }];
      }else{
        return currItems.map((it:any) => {
          if(it.model === i.model) {
            return {...it,quantity: it.quantity + 1};
          }else{
            return it;
          }
        });
      }
    });
  };
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={item.image} alt={item.model} maw={250}/>
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{item.model}</Text>
          <Text fz="xs" c="dimmed">
            Frete grátis para todo brasil
          </Text>
        </div>
        {item.discount ? (<Badge variant="outline">{`${item.discount}% off`}</Badge>) : null}
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz='sm' fw={700} sx={{ lineHeight: 1, textDecoration: 'line-through' }} color='grey'>
              R${(item.price * (1 + (item.discount / 100))).toFixed(2)}
            </Text>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              R${item.price.toFixed(2)}
            </Text>

          </div>

          <Button radius="xl" style={{ flex: 1 }} variant='outline' onClick={() => handleAdd(item)}>
            Adicionar ao carrinho
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
