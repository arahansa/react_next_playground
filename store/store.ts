import { createStore } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import rootReducer from '../reducers'
export interface State {
  tick: string
}

// create a makeStore function
const makeStore: MakeStore<State> = (_: Context) => createStore(rootReducer)

// export an assembled wrapper
const isProduction = process.env.NEXT_PUBLIC_ENV_NAME == 'production'
export const wrapper = createWrapper<State>(makeStore, { debug: !isProduction })
