import { Button, Toast, ToastProps } from '@klg-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => () => setIsOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Components/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado!',
    description: 'Você receberá um e-mail com os detalhes do agendamento.',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
