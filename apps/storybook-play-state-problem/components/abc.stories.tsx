import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { act } from '@testing-library/react';
import { Test } from './abc';

const playTest: StoryObj['play'] = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const submitButton = canvas.getByText('Click Me');

  await step('Open comment editor', async () => {
    await userEvent.click(submitButton);
    await waitFor(() => canvas.getByText('Hey'));
  });
};

const playTestWithAct: StoryObj['play'] = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const submitButton = canvas.getByText('Click Me');

  await step('Open comment editor', async () => {
    await act(async () => await userEvent.click(submitButton));
    await waitFor(() => canvas.getByText('Hey'));
  });
};

export default {
  component: Test,
  title: 'Components/Test',
} as Meta;

export const Testing: StoryObj = {
  args: {},
  play: async (ctx) => {
    await playTest(ctx);
  },
};

export const TestingWithAct: StoryObj = {
  args: {},
  play: async (ctx) => {
    await playTestWithAct(ctx);
  },
};
