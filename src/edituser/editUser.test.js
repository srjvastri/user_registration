import React from "react";
import EditUser from './editUser';
import { shallow,} from 'enzyme';




let wrapper;
    const close = jest.fn()
    const state = jest.fn();
    const Spy = jest.spyOn(React, "useState")
    Spy.mockImplementation((init) => [init, state]);
    
    const details = { "id":8 , "name":"Suraj vastri", "email":"srj469@yahoo.com", "gender":"Male", "status":"Active"}
    beforeEach(() => {
        wrapper = shallow(<EditUser closeBut = {close} user = {details}/>);
        jest.clearAllMocks();
    });

    
    describe("Name entries" , () => {
        it("Name entries should be of text type", () => {
            var name_test = wrapper.find('div.inputsVar').getElements()[0];
            var name_input = name_test.props.children[1];
            expect(name_input.props.type).toBe('text');
        });
    });

    describe("email entries" , () => {
        it("email entries should be of text type", () => {
            var email_test = wrapper.find('div.inputsVar').getElements()[1];
            var email_input = email_test.props.children[1];
            expect(email_input.props.type).toBe('text');
        })
    }),


    describe("Gender choice " , () => {
        it('To check the dropdown is having the following options of male and female',()=> {
            var choice = wrapper.find('div.inputsVar').getElements()[3];
            var opt = choice.props.children[1];
            var select = opt.props.children;
            expect(select[0].props.value).toBe("Male");
            expect(select[1].props.value).toBe("Female");
        })
    })


    describe("Status choice " , () => {
        it('To check the dropdown is having the following options of active and inactive',()=> {
            var choice = wrapper.find('div.inputsVar').getElements()[2];
            var opt = choice.props.children[1];
            var select = opt.props.children;
            expect(select[0].props.value).toBe("Inactive");
            expect(select[1].props.value).toBe("Active");
        })
    })

    




        
    