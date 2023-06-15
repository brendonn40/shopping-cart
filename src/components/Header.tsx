/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Image,
  Button,
  Drawer,
  Text,
  Flex,
  Box,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { Link } from 'react-router-dom';
import shopping_cart from '../shopping-cart.svg';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}
const links = [
  { link: '/', label: 'Home' },
  { link: '/shop', label: 'Shop' },
];
export function HeaderResponsive({ total = 0,cart }: { total?: number, cart?:any }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [counter,setCounter] = useState(0);
  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const add = (id:string) => {
    const index = cart.findIndex((item:any) => item.model === id);
    cart[index].quantity += 1;
    setCounter(counter + 1);
  };
  const remove = (id:string) => {
    const index = cart.findIndex((item:any) => item.model === id);
    if(cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      setCounter(counter + 1);
    }else{
      cart.splice(index,1);
      setCounter(counter + 1);
    }
  };
  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Drawer
        opened={openedDrawer}
        onClose={closeDrawer}
        position='right'
        title="Carrinho de compras"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        {cart?.map((item:any) => (
          <Flex key={item.id} align='center'>
            <Image src={item.image} maw={120}/>
            <Stack>
            <Text >{item.model}</Text>
            <Text weight='bold'>R${item.price}</Text>
            <Flex gap={`md`}>
            <Button onClick={() => remove(item.model)} compact>-</Button>
            <Text>{item.quantity}</Text>
            <Button onClick={() => add(item.model)} compact>+</Button>
            </Flex>
            </Stack>
          </Flex>
        ))}
        Total:R${cart?.reduce((acc:any,curr:any) => acc + curr.quantity * curr.price,0)}
      </Drawer>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Flex align="center">
          <button type="button" onClick={openDrawer}>
            <Image src={shopping_cart} maw={60} />
          </button>
          <Text size={30}>{cart.reduce((acc:any, curr:any) => acc + curr.quantity,0)}</Text>
        </Flex>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
