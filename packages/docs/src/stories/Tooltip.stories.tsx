import type { StoryObj, Meta, ComponentStory } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { Box, Tooltip, TooltipProps } from '@rjs-ignite-ui/react'
import { expect } from '@storybook/jest'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    task: new Date(),
    available: true,
    holiday: false,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', background: '$gray100' }}
      >
        {Story()}
      </Box>
    ),
  ],
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const firtTest = Template.bind({})

firtTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const day = Intl.DateTimeFormat('pt-BR', { day: 'numeric' })
    .format(new Date())
    .toString()

  const date = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(new Date())

  await userEvent.hover(canvas.getByText(day))

  await waitFor(() =>
    expect(canvas.getAllByText(`${date} - Disponível`)).toBeTruthy(),
  )
}
