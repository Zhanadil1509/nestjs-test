import create from 'zustand'
import { persist } from 'zustand/middleware'

type Cart = {
    totalqty: any,
    total: any,
    cartContent: any,
    clearCart: () => void,
    addToCart: (params: any) => void,
    updateCart: (params: any) => void,
}

export const useCart = create(persist<Cart>((set, get) => ({
    total: 0,
    totalqty: 0,
    cartContent: [],
    addToCart: (params) => {
        set((state) => ({
            totalqty: state.totalqty + 1,
            total: state.total + parseFloat(params.price),
            cartContent: [...state.cartContent, params],
        }))
    },
    updateCart: ({params, myCart}) => {
        set((state) => ({
            totalqty: state.totalqty + 1,
            total: state.total + parseFloat(params.price),
            cartContent: myCart,
        }))
    },
    clearCart: () => set({ totalqty: 0, total: 0, cartContent: []}),
    removeFromCart: (params) =>
        set((state) => ({
            total: state.total  - params.price * params.quality,
            totalqty: state.totalqty - params.quantity,
            cartContent: state.cartContent.filter(i => i.id !== params.id),
        }))
}), { name: 'cart' }))