import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

export default function Home() {
  const products = ['nike', 'adidas', 'aaaa', 'bbbb', 'ccccc', 'dddd']

  return (
    <ProductList>
      {products.map((product, index) => (
        <li key={`tenis${product[index]}`}>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?ts=1571078789?ims=280x280"
            alt="Tenis"
          />
          <strong>Tênis NIKE</strong>
          <span>R$500,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
