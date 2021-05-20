import React from "react";
import Listing from'./sample'
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
import { expect } from 'chai';
import App from './App' ;
import {render} from 'react-dom'

describe('Listing page', ()=>{
    it('Should display User Registry in header',()=>{
     const wrapper = shallow(<Listing/>);
     const header=wrapper.find('h1');
     expect(header).to.have.lengthOf(1);
    })
})


describe('Testing_1_APP', ()=>{
    it('test on App',()=>{
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


describe('sample_Testing_1_APP', ()=>{
    it('test on App',()=>{
     const wrap = shallow(<App/>);
     const hea=wrap.find('h1');
     expect(hea).to.have.lengthOf(1);
    })
})



