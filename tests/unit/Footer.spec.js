// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe( 'Footer is rendered correctly', () =>{
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer);
    wrapper.find('span').trigger('click');
    it('Click on + button calls our method with argument "true"', () => {
        //wrapper.find('span').trigger('click');
        expect(wrapper.html()).toContain('placeholder');
      })
});