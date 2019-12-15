// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item.js";

describe( 'List is rendered correctly', () =>{
    // Now mount the component and you have the wrapper
    let list = [];

    let test = new Item("new");
    list.push(test);

    const wrapper = mount(List, {
      propsData: {
        list: list
      }
    });
    
    it('When an item in the list is marked as done item is updated correctly ', () => {
      wrapper.find('span').trigger('click');
      expect(list[0].done).toEqual(true);
    })
});