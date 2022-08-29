export const WRITE_RANDOM = 'WRITE_RANDOM'
export const TOGGLE_RANDOM_LOADING = 'TOGGLE_RANDOM_LOADING'
export const WRITE_RANDOM_ERROR = 'WRITE_RANDOM_ERROR'

const initialState = {
  random: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export function randomReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_RANDOM:
      return {
        ...state,
        random: action.payload,
      }
    case TOGGLE_RANDOM_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case WRITE_RANDOM_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
