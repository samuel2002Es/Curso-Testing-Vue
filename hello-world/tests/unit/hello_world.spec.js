import { shallowMount } from '@vue/test-utils' 

import HelloWorld from '@/components/HelloWorld.vue'
// Montamos un componente hello world bucamos la clase hello y verificamos que exista
describe('HelloWorld.vue', ()=>{ 
    it('renders hello world', () => {
        const wrapper = shallowMount(HelloWorld)

        const component = wrapper.find('.hello')
    
        expect(component.classes()).toContain('hello') 
        expect(wrapper.vm.counter).toBe(0)

        wrapper.vm.increment()
        expect(wrapper.vm.counter).toBe(1)
    })
    it('button click should increment and it should be rendered', async () => {
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.find('#header-counter').text()).toBe('counter: 0')
        console.log(wrapper.find('#header-counter').text())
        const component = wrapper.find('#but-increment')
        /* que sucede cuando damos click en el boton, debe cambiar el valor e incrementar a 1 */
        await component.trigger('click')
        console.log(wrapper.find('#header-counter').text())
        expect(wrapper.find('#header-counter').text()).toBe('counter: 1')
        expect(wrapper.vm.counter).toBe(1)
    })
    it('should set a number and plus the number and save in counter',async()=>{
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.find('#header-counter').text()).toBe('counter: 0')
        expect(wrapper.vm.counter).toBe(0)
        const component = wrapper.find('#input-increment')
        component.setValue(4)
        const pluss = wrapper.find('#but-increment-value') 
        await pluss.trigger('click')
        expect(wrapper.vm.counter).toBe(4)
        console.log(wrapper.find('#header-counter').text())
    })
    it('button click should call increment and counter data increments', async () => {
        /* hacemos un espia */
        const spyIncrement = jest.spyOn(HelloWorld.methods, 'increment')
        const wrapper = shallowMount(HelloWorld)
        const component = wrapper.find('#but-increment')
        await component.trigger('click')

        expect(spyIncrement).toHaveBeenCalledTimes(1)
        expect(wrapper.vm.counter).toBe(1)
    })
    /* mokeamos la funcion */
    /* cuando solo queremos saber si fue llamada, como realizar una peticion http */
    it('button click shuld call increment function using mock', async() => {
        const mockedIncrement = jest.fn()

        const wrapper = shallowMount(HelloWorld)

        wrapper.setMethods({increment: mockedIncrement})
        /* setMethods fue sustituido */
        /* wrapper.vm.increment = mockedIncrement */

        const component = wrapper.find('#but-increment')
        await component.trigger('click')
        expect(mockedIncrement).toHaveBeenCalledTimes(1)

        expect(wrapper.vm.counter).toBe(0)
    })
})