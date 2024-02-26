import { Produto } from './../../App'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.itens.find((produto) => produto.id === produtos.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtos)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
