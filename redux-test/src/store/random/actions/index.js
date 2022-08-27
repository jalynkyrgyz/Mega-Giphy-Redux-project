import { getRandomReq } from '../../../services'

export const toggleRandomLoader = (bool) => ({
  type: 'TOGGLE_RANDOM_LOADER',
  payload: bool,
})

export const writeRandomError = (error) => ({
  type: 'WRITE_RANDOM_ERROR',
  payload: error,
})

export const writeRandom = () => async (dispatch) => {
  try {
    dispatch(toggleRandomLoader(true))
    const response = await getRandomReq()
    dispatch(toggleRandomLoader(false))
    dispatch({ type: 'WRITE_RANDOM', payload: response.data.data })
  } catch (e) {
    dispatch(toggleRandomLoader(false))
    dispatch(writeRandomError(e))
  }
}
