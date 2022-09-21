export const WRITE_CATEGORIES = 'WRITE_CATEGORIES'
export const WRITE_CATEGORIES_ERROR = 'WRITE_CATEGORIES_ERROR'
export const TOGGLE_CATEGORIES_LOADER = 'TOGGLE_CATEGORIES_LOADER'
const initialState = {
  categories: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case WRITE_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_CATEGORIES_LOADER:
      return {
        ...state,
        loading: action.payload,
      }

    default: {
      return state
    }
  }
}
