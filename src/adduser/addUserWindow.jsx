import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './AddUser.css'
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '../updateApi';
import updateApi from '../updateApi'

const useStyles = makeStyles({
    submit_form_box:{
        marginLeft:600,
        marginTop:263,
        width:720,
        height:450,
        backgroundColor:'white',
        color : 'black',
        borderRadius: '9px',
        paddingTop: '10px',
        
    },
    button_submit: {
        background: '#F23030',
        color: 'white',
        width:150,
        fontWeight:'900',
        fontSize:'15px',
        marginLeft:140,
        marginTop : 25
      },
      button_close: {
        color: 'white',
        width:150,
        fontWeight:'900',
        fontSize:'15px',
        marginLeft:130,
        background: 'Black',
        marginTop : 25
      },
})

const AddUserForm = ({CloseButton}) => {
    
    

    const after_submit = async () => {
        const filled_details = {name, email, gender, status}
        var details = await updateApi(filled_details)
        if( parseInt(details.code/100) === 2 ) {
            CloseButton(false)
        }
        
    }
    const cancelForm = () => {
        CloseButton(false)
    }
    const classes = useStyles()


    const [name, fill_name] = useState('')
    const [email, fill_email] = useState('')
    const [gender, choose_gender] = useState('Female')
    const [status, choose_status] = useState('Inactive')
    return (
        <div className = {classes.submit_form_box}>
            <h1 className = "header ">Add New User</h1>
            <div className = "inputsVar">
                <label className = "nameInput">Name</label>
                <input type='text' className="name_input" value = {name}  onChange = {(e) => fill_name(e.target.value)} placeholder='' />
            </div>
            <br/>
            <div className = "inputsVar">
                <label className = "emailInput">Email</label>
                <input type='text' className="email_input" value = {email} onChange = {(e) => fill_email(e.target.value)}  placeholder='' />
            </div>
            <br/>
            <div className = "inputsVar">
                <label className = "statusInput">Status</label>
                <select className="statusChoice" value={status} onChange={(e) => choose_status(e.target.value)} >
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                </select>
            </div>
            <br/>
            <div className = "inputsVar">
                <label className = "gender_l">Gender</label>
                <select className="genderChoice" value={gender} onChange={(e) => choose_gender(e.target.value)} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>        
                </select>
            </div>
            
            <Button variant="contained" color = "default" className = {classes.button_submit} onClick = {after_submit}>
                Submit
            </Button>
            <Button variant="contained" color = "default" className = {classes.button_close} onClick={cancelForm} >
                Cancel
            </Button>
        </div>
    )
}

export default AddUserForm