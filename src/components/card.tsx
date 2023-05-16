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

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export default function FeaturesCard({
  image,
  model,
  discount,
  price,
}: {
  image: string;
  model: string;
  discount: number;
  price:number
}) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={model} maw={250}/>
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{model}</Text>
          <Text fz="xs" c="dimmed">
            Frete grátis para todo brasil
          </Text>
        </div>
        {discount ? (<Badge variant="outline">{`${discount}% off`}</Badge>) : null}
      </Group>

      {/* <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section> */}

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz='sm' fw={700} sx={{ lineHeight: 1, textDecoration: 'line-through' }} color='grey'>
              R${(price * (1 + (discount / 100))).toFixed(2)}
            </Text>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              R${price.toFixed(2)}
            </Text>
            {/* <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text> */}
          </div>

          <Button radius="xl" style={{ flex: 1 }} variant='outline'>
            Adicionar ao carrinho
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
