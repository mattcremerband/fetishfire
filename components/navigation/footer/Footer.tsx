import { ActionIcon, Container, Group, createStyles, rem } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Image from 'next/image';
import logo from '../../../public/fitness_fetish_logo.jpeg';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const { classes } = useStyles();

  return (
    <footer className="w-full bg-white">
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Image src={logo} alt="Fitness Fetish" width={45} height={45} />
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.instagram.com/fitness_fetish_/"
              target="_blank"
            >
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.youtube.com/@fitnessfetish6711"
              target="_blank"
            >
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.facebook.com/FitnessFetish031"
              target="_blank"
            >
              <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
