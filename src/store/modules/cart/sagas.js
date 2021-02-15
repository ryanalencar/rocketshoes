import { all, call, select, put, takeLatest } from 'redux-saga/effects'
import { formatPrice } from '../../../util/format'

import api from '../../../services/api'
import { cartActions, addToCartSuccess, updateAmount } from './actions'

function* addToCart({ id }) {
  const productExists = yield select(state => state.cart.find(p => p.id === id))

  if (productExists) {
    const newAmount = productExists.amount + 1
    yield put(updateAmount(id, newAmount))
  } else {
    const response = yield call(api.get, `/products/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price)
    }
    yield put(addToCartSuccess(data))
  }
}

export default all([takeLatest(cartActions.addToCartRequest, addToCart)])
