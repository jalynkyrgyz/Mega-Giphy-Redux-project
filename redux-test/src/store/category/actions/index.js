import { getCategoriesReq } from '../../../services'

export const toggleCategoriesLoader = (bool) => ({
  type: 'TOGGLE_CATEGORIES_LOADER',
  payload: bool,
})

export const writeCategoriesError = (error) => ({
  type: 'WRITE_CATEGORIES_ERROR',
  payload: error,
})

export const writeCategories = () => async (dispatch) => {
  try {
    dispatch(toggleCategoriesLoader(true))
    const response = await getCategoriesReq()
    dispatch(toggleCategoriesLoader(false))
    dispatch({ type: 'WRITE_CATEGORIES', payload: response.data.data })
  } catch (e) {
    dispatch(toggleCategoriesLoader(false))
    dispatch(writeCategoriesError(e))
  }
}
