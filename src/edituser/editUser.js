
import React from 'react'
import { useState, useEffect } from 'react';
import './editsymbol.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import editApi from './editApi'
import { Remove } from '@material-ui/icons';


const UseStyles = makeStyles({
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

const EditUser=({CloseButton,user})=>
{
    const classes = UseStyles()
    const [id, setUserId] = useState(user.id)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [status, setStatus] = useState(user.status)
    
    

    
    const after_submit = async () => {
        const user = {id,name, email, gender, status}
        var data = await editApi(user)
        if( parseInt(data.code/100) === 2 ) {
            CloseButton(false)
        }
    }

    
    const cancelForm = () => {
        CloseButton(false);
    }
  return (
        <div className = {classes.submit_form_box}>
            <h1 className="header">Edit User</h1>
            <div className = "inputsVar">
                <label className = "nameInput">Name:</label>
                <input type='text' className="name_input" placeholder='Enter your name'
                onChange = {(e) => setName(e.target.value)}
                value = {name}
                />
            </div>
            <br/>
            <div className = "inputsVar">
                <label className = "emailInput">Email</label>
                <input type='text' className="email_input"  onChange = {(e) => setEmail(e.target.value)} value = {email} />
            </div>
            <br/>
            <div className = "inputsVar">
                <label className = "statusInput">Status:</label>
                <select className="statusChoice" value={status}  onChange={(e) => setStatus(e.target.value)} >
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                </select>
            </div>
            
            <br/>
            <div className = "inputsVar">
                <label className = "gender_l">Gender:</label>
                <select className="genderChoice" value={gender} onChange={(e) => setGender(e.target.value)} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            
            <Button variant ="contained" className={classes.button_submit} onClick={after_submit}>Save</Button>
            
            
            <Button variant ="contained" className={classes.button_close} onClick={cancelForm}>Cancel</Button>
            
        </div>
    );
}
export default EditUser 