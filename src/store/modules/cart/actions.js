export const cartActions = {
  addToCart: '@cart/ADD',
  removeFromCart: '@cart/REMOVE',
  updateAmount: '@cart/UPDATE_AMOUNT'
}

export function addToCart(product) {
  return {
    type: cartActions.addToCart,
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
