import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@klg-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    prefix: 'Type your E-mail:',
  },
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {story()}
        <Text>Accept termos of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
