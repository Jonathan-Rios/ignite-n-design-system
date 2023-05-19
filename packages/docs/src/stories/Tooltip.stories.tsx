import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Box } from '@klg-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  argsTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '$20',
          backgroundColor: '$gray500',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {}
