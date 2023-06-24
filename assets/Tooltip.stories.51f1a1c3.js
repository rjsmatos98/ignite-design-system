var s=Object.defineProperty;var n=(t,o)=>s(t,"name",{value:o,configurable:!0});import{w as l,u as p,a as c,e as m}from"./index.fc1c6280.js";import{e,B as y}from"./index.fe4bc658.js";import{j as a}from"./jsx-runtime.16c524ba.js";import"./iframe.367f18f2.js";import"./index.d31dbece.js";import"./index.7d188143.js";import"./es.map.constructor.1ff403fa.js";import"./index.3691f679.js";import"./index.9b3121cc.js";const S={parameters:{storySource:{source:`import type { StoryObj, Meta, ComponentStory } from '@storybook/react'
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
    expect(canvas.getAllByText(\`\${date} - Dispon\xEDvel\`)).toBeTruthy(),
  )
}
`,locationsMap:{"firt-test":{startLoc:{col:49,line:29},endLoc:{col:80,line:29},startBody:{col:49,line:29},endBody:{col:80,line:29}}}}},title:"Surfaces/Tooltip",component:e,args:{task:new Date,available:!0,holiday:!1},decorators:[t=>a(y,{as:"label",css:{display:"flex",flexDirection:"row",background:"$gray100"},children:t()})],argTypes:{}},k={},T=n(t=>a(e,{...t}),"Template"),d=T.bind({});d.play=async({canvasElement:t})=>{const o=l(t),r=Intl.DateTimeFormat("pt-BR",{day:"numeric"}).format(new Date).toString(),i=Intl.DateTimeFormat("pt-BR",{day:"numeric",month:"long"}).format(new Date);await p.hover(o.getByText(r)),await c(()=>m(o.getAllByText(`${i} - Dispon\xEDvel`)).toBeTruthy())};const E=["Primary","firtTest"];export{k as Primary,E as __namedExportsOrder,S as default,d as firtTest};
//# sourceMappingURL=Tooltip.stories.51f1a1c3.js.map
