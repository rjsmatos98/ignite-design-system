var c=Object.defineProperty;var r=(t,e)=>c(t,"name",{value:e,configurable:!0});import{r as s}from"./index.3691f679.js";import{w as p,u as m,a as l,e as u}from"./index.fc1c6280.js";import{B as f,a as T,d}from"./index.fe4bc658.js";import{a as y,j as a}from"./jsx-runtime.16c524ba.js";import"./iframe.367f18f2.js";import"./index.d31dbece.js";import"./index.7d188143.js";import"./es.map.constructor.1ff403fa.js";import"./index.9b3121cc.js";const i=r(t=>{const[e,n]=s.exports.useState(!1),o=s.exports.useRef(0);return s.exports.useEffect(()=>()=>clearTimeout(o.current),[]),y(f,{css:{display:"flex",flexDirection:"row"},children:[a(T,{onClick:()=>{n(!1),window.clearTimeout(o.current),o.current=window.setTimeout(()=>{n(!0)},100)},children:"Salvar"}),a(d,{open:e,onOpenChange:n,...t})]})},"DemoToas"),k={parameters:{storySource:{source:`import type { StoryObj, Meta, ComponentStory } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { Box, Button, Toast, ToastProps } from '@rjs-ignite-ui/react'
import { expect } from '@storybook/jest'

const DemoToas = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])
  return (
    <Box css={{ display: 'flex', flexDirection: 'row' }}>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Salvar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </Box>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToas,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro \xE0s 16h',
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

const Template: ComponentStory<typeof DemoToas> = (args) => (
  <DemoToas {...args} />
)

export const firtsTest = Template.bind({})

firtsTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.click(canvas.getByRole('button'))

  await waitFor(() =>
    expect(canvas.getAllByText('Agendamento realizado')).toBeTruthy(),
  )
}
`,locationsMap:{"firts-test":{startLoc:{col:50,line:45},endLoc:{col:1,line:47},startBody:{col:50,line:45},endBody:{col:1,line:47}}}}},title:"Surfaces/Toast",component:i,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro \xE0s 16h"},argTypes:{}},D={},x=r(t=>a(i,{...t}),"Template"),w=x.bind({});w.play=async({canvasElement:t})=>{const e=p(t);m.click(e.getByRole("button")),await l(()=>u(e.getAllByText("Agendamento realizado")).toBeTruthy())};const P=["Primary","firtsTest"];export{D as Primary,P as __namedExportsOrder,k as default,w as firtsTest};
//# sourceMappingURL=Toast.stories.c6d6aedc.js.map
