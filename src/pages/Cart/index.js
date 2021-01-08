import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import Button from '../../components/Button'

import { Container, Total, ProductTable } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?ts=1571078789?ims=280x280"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <Button icon={<MdRemoveCircleOutline size={20} color="#7159C1" />} />
                <input type="number" readOnly value={2} />
                <Button icon={<MdAddCircleOutline size={20} color="#7159C1" />} />
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <Button icon={<MdDelete size={20} color="#7159C1" />} />
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <Button text="Finalizar Pedido" />

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,25</strong>
        </Total>
      </footer>
    </Container>
  )
}
