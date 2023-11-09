import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero, { IHero } from './Hero';
import { mockCarouselProps } from './Hero.mocks';

export default {
  title: 'templates/Hero',
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCarouselProps.base,
} as IHero;
