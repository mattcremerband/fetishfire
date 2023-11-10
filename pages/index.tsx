import {
  Container,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import Hero from '../components/hero/Hero';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    transform: 'translateX(-150%)',
    opacity: 0,
    '&:nth-of-type(2n)': {
      transform: 'translateX(+150%)',
    },

    [theme.fn.smallerThan('md')]: {
      paddingTop: '40px',
      paddingBottom: '0',
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  content2: {
    maxWidth: rem(480),
    marginLeft: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      marginLeft: 0,
      marginTop: '20px',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    //flex: 1,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      marginLeft: 0,
      marginTop: '40px',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const Home: NextPageWithLayout = () => {
  const { classes } = useStyles();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }
      //{ rootMargin: '-300px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      if (ref.current) {
        ref.current.querySelectorAll('div.animate').forEach((el) => {
          el.classList.add('slideIn');
        });
      }
    } else {
      if (ref.current) {
        ref.current.querySelectorAll('div.animate').forEach((el) => {
          el.classList.remove('slideIn');
        });
      }
    }
  }, [isIntersecting]);

  return (
    <>
      <Hero />

      <div ref={ref}>
        <Container>
          <div className={`${classes.inner} animate flex flex-col md:flex-row`}>
            <div className={`${classes.content} stagger`}>
              <Title className={classes.title}>
                Training at Fitness{' '}
                <span className={classes.highlight}>Fetish</span>
              </Title>
              <Text color="dimmed" mt="md">
                Functional fitness is a strength and conditioning methodology
                aimed at enhancing overall physical fitness and readiness. Our
                workouts incorporate a combination of cardiovascular and
                strength exercises.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Build Strength</b> - Regular strength training promotes
                  increased muscle mass and enhances bone strength.
                </List.Item>
                <List.Item>
                  <b>Improve Fitness</b> - Engaging in exercise 3-4 days a week
                  consistently, enhances overall fitness, boosting endurance and
                  agility
                </List.Item>
                <List.Item>
                  <b>Lose Weight</b> - Incorporating regular exercise into your
                  routine along with a healthy diet is a proven strategy for
                  weight management
                </List.Item>
              </List>
            </div>
            <Image
              src="images/fetish-home1.jpg"
              className={`${classes.image} stagger`}
            />
          </div>
        </Container>

        <Container>
          <div
            className={`${classes.inner} animate flex-col-reverse md:flex-row`}
          >
            <Image
              src="images/fetish-home2.jpg"
              className={`${classes.image} `}
            />
            <div className={`${classes.content2} animate stagger`}>
              <Title className={classes.title}>
                Fitness <span className={classes.highlight}>changes</span> lives
              </Title>
              <Text color="dimmed" mt="md">
                At Fitness Fetish, we firmly stand by the belief that exercise
                and fitness have the power to transform lives. By embracing
                functional fitness, our members witness change in their
                physique, overall physical capabilities, and key health metrics.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Improve Health</b> - Studies have demonstrated that
                  engaging in exercise for 3-4 days per week can have positive
                  effects on overall health.
                </List.Item>
                <List.Item>
                  <b>Reduce Pain</b> - Joints that possess both strength and
                  flexibility tend to be healthier and more comfortable.
                </List.Item>
                <List.Item>
                  <b>Reduce Stress</b> - Engaging in exercise, in almost any
                  form, can serve as a stress reliever.
                </List.Item>
              </List>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
