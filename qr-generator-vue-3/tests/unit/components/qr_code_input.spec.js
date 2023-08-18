import QRCodeInputVue from '@/components/QRCodeInput.vue'
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
describe('QRCodeInput.vue', () => {
  describe('mounting a component', () => {
    it('should render qr code input componet', () => {
      const wrapper = shallowMount(QRCodeInputVue)
      const component = wrapper.find('.hello')
      expect(component.classes()).toContain('hello')
    })
  })
  describe('renders qr code intup component with its dependencies', () => {
    /* como no existe un qboton de forma nativa necesitamos crear el store */
    /* creamos un store */
    const store = createStore({
      state () {
        return { count: 1 }
      }
    })
    /* lo metemos dentro del componente */
    const wrapper = shallowMount(QRCodeInputVue,
      {
        global:
                {
                  plugin: [store]
                }
      })
      it('should render generate qr code button with text', () =>{
        const component = wrapper.find('#btn-generate')
        expect(component.text()).toBe('Generar QR')
      })
      it('renders txt input, change its value and see if stored',() => {
        const component = wrapper.find('#txt-qr-code')
        expect(component.element.value).toBe('')
        component.setValue('www.platzi.com')
        expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
        
      })
  })
})
