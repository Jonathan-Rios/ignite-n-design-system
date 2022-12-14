import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@klg-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Jonathan-Rios.png',
    alt: 'Jonathan Rios Sousa',
  },
  argsTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
