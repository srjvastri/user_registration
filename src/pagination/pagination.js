import React from 'react'
import './pagination.css'
import { useState, useEffect } from 'react';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '#ff2f20',
      color: 'white',
      width:120,
      fontWeight:'1000',
      marginLeft: 10,
      marginTop : -3
    },

    backwardicon : {
        opacity: '1.0',
        cursor:'pointer',
        display: 'inline',
        marginTop: 10,
        marginLeft:200, 
        height:40,
        marginTop : 1
    },

    forwardicon : {
        opacity: '1.0',
        cursor:'pointer',
        display: 'inline',
        marginLeft: 15,
        marginTop: 10,
        height: 40
    }
  });

const Pagination = ({onPage, currentPage, totalPages}) => {

    const [page, setPage] = useState(1)
    const classes = useStyles()

    const getPage = () => {
        if(isNaN(page)){
            page = 1
        }    
        onPage(parseInt(page))
    }

    const Back = (e) => {
        if(currentPage!==1){
            currentPage = currentPage - 1;
        }
        onPage(parseInt(currentPage))
    }

    const Next = (e) => {
        if(currentPage!== totalPages)
            currentPage = currentPage + 1;
        onPage(parseInt(currentPage))
    }

    return (
        <div>
            <div className = "pagination">    
                <SkipPreviousRoundedIcon className = {classes.backwardicon} id = "back_b" onClick = { (e) => Back(e)}/>
                <div className = "pagelabel">
                    Page {currentPage} From {totalPages} Pages
                </div>
                <Button variant="contained" color = "primary" className = {classes.root} onClick = {getPage}> Page </Button>
                <input type = "number" className = "skiptoinput" onChange = { (e) => setPage(e.target.value)}></input>
                <SkipNextRoundedIcon className = {classes.forwardicon} id = "next_b" onClick = { (e) => Next(e)}/>
            </div>
        </div>
    )
}

export default Pagination