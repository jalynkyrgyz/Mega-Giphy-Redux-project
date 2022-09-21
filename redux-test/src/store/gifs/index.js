export const GET_GIFS = 'GET_GIFS'
export const GET_GIFS_LIST = 'GET_GIFS_LIST'
export const GET_GIFS_BY_ID = 'GET_GIFS_BY_ID'

const initialState = {
  loading: false,
  gifList: [],
  gifById: {},
}

// eslint-disable-next-line default-param-last
export function gifReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_GIFS_LIST:
      return {
        ...state,
        gifList: action.payload,
      }
    case GET_GIFS_BY_ID:
      return {
        ...state,
        gifById: action.payload,
      }
    default:
      return state
  }
}
