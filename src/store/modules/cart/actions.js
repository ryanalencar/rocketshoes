export const cartActions = {
  addToCart: 'ADD_TO_CART',
  removeFromCart: 'REMOVE_FROM_CART'
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
