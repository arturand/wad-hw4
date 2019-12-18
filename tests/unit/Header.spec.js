// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header);

    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let date;
        if (today.getDate() < 10) {
            date = `0${today.getDate()}`;
        } else {
            date = today.getDate();
        }
        expect(wrapper.html()).toContain(date)
    });

    it('Renders the correct year', () => {
        let year = new Date().getFullYear();
        expect(wrapper.html()).toContain(year)
    });

    it('Renders the correct month', () => {
        //let  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new  Date();
        //let month = (monthNames[date.getMonth()]).slice(0,3).toUpperCase();
        let month = (date.toLocaleString('en-us', { month: 'short' })).toUpperCase();
        expect(wrapper.html()).toContain(month)
    });

    it('Renders the correct weekday', () => {
        let weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
        let weekday = new Date().getDay();
        expect(wrapper.html()).toContain(weekdays[weekday])
    });
});