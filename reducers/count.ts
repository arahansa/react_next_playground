export const initialState = {
  count: 0,
  sample: {
    name: 'hiru',
    value: false
  }
}

export const COUNT_PLUS = 'COUNT_PLUS'
export const COUNT_MINUS = 'COUNT_MINUS'
export const CHANGE_NAME = 'CHANGE_NAME';

export const countPlusAction = () => ({
  // 액션 생성 함수
  type: COUNT_PLUS,
})

export const countMinusAction = () => ({
  type: COUNT_MINUS,
})

const reducer = (state = initialState, action: any) => {
  // 리듀서
  switch (action.type) {
    case COUNT_PLUS:
      return {
        ...state,
        count : state.count +1
      }
    case COUNT_MINUS:
      return {
        ...state,
        count : state.count - 1
      }
    case CHANGE_NAME:
      console.log('change name!')
      return {
        ...state,
        sample : {
          name: new Date().toLocaleString(),
          value: false,
        }
      }
    default:
      return state
  }
}

export default reducer
