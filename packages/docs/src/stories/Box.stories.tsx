import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, BoxProps } from '@klg-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argsTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
