import payKeyboard from './pay-keyboard.vue'

const paykeyboard = {
    install (Vue, options) {
        Vue.component(payKeyboard.name, payKeyboard)
        
    }
}
if (typeof window !== 'undefined' && window.Vue) 
        { window.Vue.use(paykeyboard); }
export default paykeyboard