import { combineReducers } from 'redux'
import step from './step'
import genres from './genres'

const radionomyApp = combineReducers({
  step,
  genres
})

export default radionomyApp
