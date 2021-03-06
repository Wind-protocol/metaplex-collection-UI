import type {StateRef, StateRefOp} from './index.h'
import {nextStepID} from './id'
import {add} from './collection'

export const createStateRef = (current?): StateRef => ({
  id: nextStepID(),
  current,
})
export const readRef = ({current}: StateRef | {current}) => current

export const addRefOp = (ref: StateRef, op: StateRefOp) => {
  if (!ref.before) ref.before = []
  add(ref.before!, op as any)
}
