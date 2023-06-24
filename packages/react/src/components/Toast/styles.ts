import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 25px))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100% + 25px))' },
})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$3 $5',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  minWidth: '20rem',

  color: '$white',
  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 0.1s ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 0.2s ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 0.1s ease-out`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  width: 360,
  margin: 0,

  display: 'flex',
  flexDirection: 'row',
  padding: '$6',
  gap: '$2',

  position: 'fixed',
  bottom: 0,
  right: 0,

  listStyle: 'none',
  zIndex: 999999,
  outline: 'none',
})

export const Close = styled(X, {
  width: '$5',
  height: '$5',
  color: '$gray200',
  cursor: 'pointer',

  position: 'absolute',
  top: '1rem',
  right: '1rem',
})
