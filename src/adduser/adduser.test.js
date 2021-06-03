import React from "react";
import AddUser from './AddUser';
import ReactDOM from 'react-dom';
import { shallow,render} from 'enzyme';


let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = shallow(<AddUser />);
        jest.clearAllMocks();
    });

    
    describe("Name input", () => {
        it("Should capture name correctly onChange", () => {
            const name = wrapper.find("input").at(0);
            name.simulate('change' ,  { target: {value: 'Test'}});

            expect(wrapper.find("input").at(0).props().value).toEqual('Test');
        });
    });

    describe("Email input", () => {
        it("Should capture email correctly onChange", () => {
            const email = wrapper.find("input").at(1);
            email.simulate('change' , { target: {value: 'Testing'}});
            expect(wrapper.find("input").at(1).props().value).toEqual('Testing');
        });
    });
    it('Should check the options for gender attribute',()=> {
        var genderfield = wrapper.find('div.inputtext').getElements()[2];
        var opt = genderfield.props.children[1];
        var options = opt.props.children;
        expect(options[0].props.value).toBe("Male");
        expect(options[1].props.value).toBe("Female");
    }),

    it('Should check the options for status attribute',()=> {
        var statusfield = wrapper.find('div.inputtext').getElements()[3];
        var opt = statusfield.props.children[1];
        var options = opt.props.children;
        expect(options[0].props.value).toBe("Inactive");
        expect(options[1].props.value).toBe("Active");
    })


    it('Check if input type of name is text', () => {
        var namefield = wrapper.find('div.inputtext').getElements()[0];
        var namediv = namefield.props.children[1];
        expect(namediv.props.type).toBe('text');
    }),

    it('Check if input type of email is text', () => {
        var emailfield = wrapper.find('div.inputtext').getElements()[1];
        var emaildiv = emailfield.props.children[1];
        expect(emaildiv.props.type).toBe('text');
    })