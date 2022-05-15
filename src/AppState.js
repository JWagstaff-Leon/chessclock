import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
    minutes: 0,
    seconds: 0,
    white: {time: 0, moves: 0},
    black: {time: 0, moves: 0},
    whitesTurn: true
})
