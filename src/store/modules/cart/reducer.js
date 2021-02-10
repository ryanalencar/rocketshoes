import produce from 'immer'
import { cartActions } from './actions'

export default function cart(state = [], action) {
  // return produce(state, draft => {
  //   const { payload, type } = action
  //   switch (type) {
  //     case cartActions.addToCart:
  //       const productIndex = draft.findIndex(p => p.id === action.product.id)
  //       if (productIndex >= 0) {
  //         draft[productIndex].amount += 1
  //       } else {
  //         draft.push({ ...action.product, amount: 1 })
  //       }
  //       break

  //     default:
  //       break
  //   }
  // })
  switch (action.type) {
    case cartActions.addToCart:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)
        if (productIndex >= 0) {
          draft[productIndex].amount += 1
        } else {
          draft.push({ ...action.product, amount: 1 })
        }
      })
    case cartActions.removeFromCart:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) draft.splice(productIndex, 1)
      })
    default:
      return state
  }
}
