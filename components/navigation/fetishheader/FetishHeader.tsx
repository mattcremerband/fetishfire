import {
  Burger,
  Container,
  Drawer,
  Group,
  Header,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/fitness_fetish_logo.png';

export interface IFetishHeader
  extends React.ComponentPropsWithoutRef<'header'> {}

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    height: '100%',
    lineHeight: 1,
    padding: `${rem(10)}`,
    paddingBottom: '0',
    textAlign: 'center',
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    maxWidth: 200,

    '&:hover': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.blue[4],
    },

    '&:after': {
      display: 'block',
      content: '""',
      marginTop: `${rem(10)}`,
      borderBottom: `solid 2px #02b3fb`,
      transform: `scaleX(0)`,
      transition: `transform 150ms ease-in-out`,
      borderBottomColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.blue[4],
    },

    '&:hover:after': {
      transform: `scaleX(1)`,
    },
  },

  linkActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

const FetishHeader: React.FC<IFetishHeader> = ({
  className,
  ...headerProps
}) => {
  const links = [
    { link: 'about', label: 'About' },
    { link: 'training', label: 'Training' },
    { link: 'membership', label: 'Membership' },
    { link: 'schedule', label: 'Schedule' },
    { link: 'fetishfire', label: 'Fetish Fire' },
    { link: 'contact', label: 'Contact' },
  ];

  const [opened, handlers] = useDisclosure(false);
  const [active, setActive] = useState<any>(null);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  const itemsMobile = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={`${cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })} w-full mb-2`}
      onClick={() => {
        setActive(link.link);
        handlers.close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={110} className="w-full">
      <Container className={`${classes.header}`}>
        <Link
          href="/"
          onClick={() => {
            setActive(null);
          }}
        >
          <Image src={logo} alt="Fitness Fetish" width={80} height={80} />
        </Link>
        <Group
          spacing={10}
          className={`${classes.links} mt-[5px]`}
          position="right"
        >
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={handlers.toggle}
          className={classes.burger}
          size="sm"
        />

        <Drawer
          opened={opened}
          onClose={handlers.close}
          size="xs"
          withCloseButton={false}
        >
          <div className="flex flex-col w-full">
            <Link
              href="/"
              onClick={() => {
                setActive(null);
              }}
            >
              <div className="flex flex-col items-center justify-center w-full mb-4">
                <Image src={logo} alt="Fitness Fetish" width={80} height={80} />
              </div>
            </Link>
            <div className="flex flex-col items-center justify-center w-full">
              {itemsMobile}
            </div>
          </div>
        </Drawer>
      </Container>
    </Header>
  );
};

export default FetishHeader;
