import { shallowMount } from '@vue/test-utils' 

import HelloWorld from '@/components/HelloWorld.vue'
// Montamos un componente hello world bucamos la clase hello y verificamos que exista
describe('HelloWorld.vue', ()=>{ 
    it('renders hello world', () => {
        const wrapper = shallowMount(HelloWorld)

        const component = wrapper.find('.hello')
    
        expect(component.classes()).toContain('hello') 
    })
})