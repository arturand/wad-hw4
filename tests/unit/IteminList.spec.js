// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item"

describe('ItemsinList',() => {
    let list = []


    const wrapper = mount(List, {
        propsData: {
            list:list
        }
    });
    it('Empty list add first ToDo', () => {
        expect(wrapper.find('h3').text()).toEqual('Add your first Todo task');

    })
});

