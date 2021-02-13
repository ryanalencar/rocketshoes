import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { cartActions, addToCartSuccess } from './actions'

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`)

  yield put(addToCartSuccess(response.data))
}

export default all([takeLatest(cartActions.addToCartRequest, addToCart)])
