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
      describe('actions and mocks', () => {
        describe('triggers click in qr codes button and the event is is called', ()=>{
            const spySendQRCode = jest.spyOn(QRCodeInputVue.methods,'sendQRCode');
            const wrapper = shallowMount(QRCodeInputVue)
            const txtComponent = wrapper.find('#txt-qr-code')
            const qrCode = 'www.platzi.com'
            txtComponent.setValue(qrCode)

            it('the send qr code function it it being called',async () => {
                const btnComponet = wrapper.find('#btn-generate')
                btnComponet.trigger('click')
                /* haya sido llamado una vez */
                expect(spySendQRCode).toHaveBeenCalledTimes(1)
                /* que haya enviado la propiedad qrCodeInput */
                expect(wrapper.emitted()).toHaveProperty('qrCodeInput')
                /* que sea emitido con la informacion correcta */
                expect(wrapper.emitted('qrCodeInput')).toHaveLength(1)
                /* que sea igualito a qrcode */
                expect(wrapper.emitted('qrCodeInput')[0][0]).toStrictEqual(qrCode)
            })
            it('the button is disabled by default', async () => {
              const wrapper = shallowMount(QRCodeInputVue)
              const btnComponet = wrapper.find('#btn-generate')
              console.log(btnComponet.attributes().disable)
              expect(btnComponet.attributes().disable).toBeDefined()
            })
            it('the button should change the color', async () => {
              const wrapper = shallowMount(QRCodeInputVue)
              const labelComponent = wrapper.find('#txt-qr-code')
              const btnComponet = wrapper.find('#btn-generate')
              console.log(btnComponet.attributes().class)
              expect(btnComponet.attributes().class).toBe('bg-white-600 m-4 p-2 rounded-md text-black text-sm')
              const qrCode = 'Samuel'
              await labelComponent.setValue(qrCode)
              expect(wrapper.vm.qrCodeInput).toBe('Samuel')
              console.log(btnComponet.attributes().class)
              expect(btnComponet.attributes().class).toBe('bg-indigo-600 m-4 p-2 rounded-md text-white text-sm')
            })
        })
    })
  })
})
