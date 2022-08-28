import { getRandomReq } from '../../../services'
import { WRITE_RANDOM, WRITE_RANDOM_ERROR, TOGGLE_RANDOM_LOADING } from '..'

export const toggleRandomLoader = (bool) => ({
  type: TOGGLE_RANDOM_LOADING,
  payload: bool,
})

export const writeRandomError = (error) => ({
  type: WRITE_RANDOM_ERROR,
  payload: error,
})

export const writeRandom = () => async (dispatch) => {
  try {
    dispatch(toggleRandomLoader(true))
    const response = await getRandomReq()
    dispatch(toggleRandomLoader(false))
    dispatch({ type: WRITE_RANDOM, payload: response.data.data })
  } catch (e) {
    dispatch(toggleRandomLoader(false))
    dispatch(writeRandomError(e))
  }
}
