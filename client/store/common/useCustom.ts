import create from 'zustand'

type Custom = {
    bears: number,
    increasePopulation: () => void
}

export const useCustom = create<Custom>(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({bears: state.bears + 1}))
}))