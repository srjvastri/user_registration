import React from 'react'
import Button from '@material-ui/core/Button';
import  {makeStyles}  from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddUserForm from './addUserWindow';
import './AddUser.css'

const useStyles = makeStyles({
    root: {
      color: 'White',
      fontWeight:'900',
      fontSize:'20px',
      height:50,
      width:200,
      marginLeft:1400,
      background: '#F23030'
    },
    addbutton: {
        marginRight:20,
        marginbottum : 5,
        marginTop : 5
    }
    
})
const AddUser = () => {
    
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    

    const helping_Button = (CloseButton) => {
        setOpen(CloseButton);
    }
    const classes = useStyles()

    const closing = () => {
        setOpen(false);
      };
    return (
        <div>
        <div className="button">
        <Button variant="contained" color = "secondary" className = {classes.root} onClick={handleOpen}>
            Add User
        </Button>
        </div>
         <Modal
         open = {open}
         onClose={closing}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        >
            <AddUserForm CloseButton = {helping_Button}/>
       </Modal>
        </div>
    )
}

export default AddUser