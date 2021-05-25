import React from "react";
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
import { expect } from 'chai';
import App from './App' ;




describe('testing on listing page', ()=>{
    it('Table has div h1 of length 1',()=>{
     const wrap = shallow(<App/>);
     const hea=wrap.find('h1');
     expect(hea).to.have.lengthOf(1);
    })
})


it('User registration present in the page',()=>{
    const wrapper = shallow(<App/>);
    const header=wrapper.find('h1').text();
    expect(header).equal('User Registraion');
})




