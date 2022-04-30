import {Event, Store} from 'effector'
import {useStoreBase, useStoreMapBase, useListBase} from './apiBase'

/**
bind event to scope

works like React.useCallback, but for scopes
*/
export function useEvent<T>(event: Event<T>): (payload: T) => T {
  return event
}

export function useStore<State>(store: Store<State>): State {
  return useStoreBase(store)
}

export function useStoreMap<State, Result, Keys extends ReadonlyArray<any>>(
  configOrStore:
    | {
        store: Store<State>
        keys: Keys
        fn(state: State, keys: Keys): Result
        updateFilter?: (update: Result, current: Result) => boolean
      }
    | Store<State>,
  separateFn?: (state: State, keys: Keys) => Result,
): Result {
  return useStoreMapBase([configOrStore, separateFn])
}

export function useList<T>(
  list: Store<T[]>,
  renderItem:
    | {
        keys?: any[]
        fn(item: T, index: number): React.ReactNode
        getKey?: (item: T) => string
      }
    | ((item: T, index: number) => React.ReactNode),
): React.ReactNode {
  return useListBase(list, renderItem)
}
