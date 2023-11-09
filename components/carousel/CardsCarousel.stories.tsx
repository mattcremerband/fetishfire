import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardsCarousel, { ICardsCarousel } from './CardsCarousel';
import { mockCarouselProps } from './CardsCarousel.mocks';

export default {
  title: 'templates/CardsCarousel',
  component: CardsCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardsCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardsCarousel> = (args) => (
  <CardsCarousel {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCarouselProps.base,
} as ICardsCarousel;
