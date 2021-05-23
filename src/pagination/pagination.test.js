import React from "react";
import { shallow } from 'enzyme';
import Pagination from'./pagination'


describe('Pagination', ()=>{
     const presentpage = 1;
     const Allpage = 74;



     const curr_page = jest.fn();
     
     
   let check;
     beforeEach(() => {
          jest.clearAllMocks();
          check = shallow(<Pagination onPage = {curr_page} currentPage = {presentpage} totalPages = {Allpage}/>);
     }),

     it('the button name for going to any page is "Page"',()=>{
     expect(check.find('WithStyles(ForwardRef(Button))').getElement().props.children).toBe(" Page ");
     }),
   

     
     it('while clicking the next button to go on next page it will call the present one time"',()=>{
     const button = check.find('Memo(ForwardRef(SkipNextRoundedIcon))').getElement().props;
     button.onClick();
     expect(presentpage).toBe(1);
     })

     it('When we click the next button it should not  call the curr_Page, as there are no further pages ',()=>{
         check = shallow(<Pagination onPage = {curr_page} currentPage = {Allpage} totalPages = {Allpage}/>);
         check.find("#next_b").props().onClick();
         expect((curr_page)).toHaveBeenCalledTimes(1);
     }),


     it('input box for writing the page number should accept only "number" input',()=>{
     expect(check.find('input').getElement().props.type).toBe('number');
     }),


     it('if you click on the back button if the curr_page is one page 1 , so it should not call the curr_page',()=>{
         check.find("#back_b").props().onClick();
         expect((curr_page)).toHaveBeenCalledTimes(1);
     })


})

