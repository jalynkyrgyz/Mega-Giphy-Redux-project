import { TOGGLE_TRENDS_LOADER, WRITE_TRENDS, WRITE_TRENDS_ERROR } from '..'
import { getTrendReq } from '../../../services'

export const toggleTrendsLoader = (bool) => ({
  type: TOGGLE_TRENDS_LOADER,
  payload: bool,
})

export const writeTrendsError = (error) => ({
  type: WRITE_TRENDS_ERROR,
  payload: error,
})

export const writeTrends = () => async (dispatch) => {
  try {
    dispatch(toggleTrendsLoader(true))
    const response = await getTrendReq()
    dispatch(toggleTrendsLoader(false))
    dispatch({ type: WRITE_TRENDS, payload: response.data.data })
  } catch (e) {
    dispatch(toggleTrendsLoader(false))
    dispatch(writeTrendsError(e))
  }
}
