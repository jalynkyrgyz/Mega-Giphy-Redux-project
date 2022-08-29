export const WRITE_TRENDS = 'WRITE_TRENDS'
export const WRITE_TRENDS_ERROR = 'WRITE_TRENDS_ERROR'
export const TOGGLE_TRENDS_LOADER = 'TOGGLE_TRENDS_LOADER'

const initialState = {
  trends: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export function trendReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_TRENDS:
      return {
        ...state,
        trends: action.payload,
      }
    case WRITE_TRENDS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_TRENDS_LOADER:
      return {
        ...state,
        loading: action.payload,
      }

    default: {
      return state
    }
  }
}
