import create from 'zustand'

const sampleA = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 80 },
]

const sampleB = sampleA.map((d) => ({ ...d, value: Math.round(d.value * 0.6) }))

const useStore = create((set) => ({
  data: sampleA,
  flip: () => set((s) => ({ data: s.data === sampleA ? sampleB : sampleA })),
}))

export default useStore
