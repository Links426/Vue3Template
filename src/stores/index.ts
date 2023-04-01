import { defineStore } from 'pinia'

// 使用setup模式定义
export const answerStore = defineStore('answer', () => {
    const collapseState = ref(false)
    return { collapseState }
})
