import { Meta, StoryObj } from '@storybook/react';
import File from '.';

export default {
  title: 'Components/File',
  component: File,
} as Meta;

type Story = StoryObj<typeof File>;

// File type default
export const FileDefault: Story = {
  args: {},
};
