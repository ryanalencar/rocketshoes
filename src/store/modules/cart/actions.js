export const cartActions = {
  addToCartRequest: '@cart/ADD_REQUEST',
  addToCartSuccess: '@cart/ADD_SUCCESS',
  removeFromCart: '@cart/REMOVE',
  updateAmount: '@cart/UPDATE_AMOUNT'
}

export function addToCartRequest(id) {
  return {
    type: cartActions.addToCartRequest,
    id
  }
}

export function addToCartSuccess(product) {
  return {
    type: cartActions.addToCartSuccess,
    product
  }
}

export function removeFromCart(id) {
  return {
    type: cartActions.removeFromCart,
    id
  }
}

export function updateAmount(id, amount) {
  return {
    type: cartActions.updateAmount,
    id,
    amount
  }
}
