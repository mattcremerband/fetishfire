import { ComponentMeta, ComponentStory } from '@storybook/react';
import FetishHeader, { IFetishHeader } from './FetishHeader';
import { mockHeaderProps } from './FetishHeader.mocks';

export default {
  title: 'navigation/Header',
  component: FetishHeader,
  argTypes: {},
} as ComponentMeta<typeof FetishHeader>;

const Template: ComponentStory<typeof FetishHeader> = (args) => (
  <FetishHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as IFetishHeader;
