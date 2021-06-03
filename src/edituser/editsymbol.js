import React from 'react'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import './editsymbol.css'
import EditUser from'./editUser.js';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
})
function EditSymbol({user}){
    
    const [usertu, setUserToUp] = useState()
    
    const [set, setOpen] = useState(false);

    const after_edit = () => {
        setUserToUp(user)
        setOpen(true);
    }

    const Close = (CloseButton) => {
        setOpen(CloseButton);
    }
    
    return (
        <div>
            <TableCell align="center"><EditRoundedIcon className="icon" onClick = {() => after_edit()}/></TableCell>
       <Modal
         open = {set}

         onClose={Close}

         aria-describedby="simple-modal-description"
         aria-labelledby="simple-modal-title"
         
        >

            <EditUser CloseButton = {Close} user = {usertu}/>
       </Modal>
        </div>
    )
}
export default EditSymbol