import React from 'react'
import './pagination.css'
import { useState, useEffect } from 'react';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '#ff2f20',
      color: 'white',
      width:120,
      fontWeight:'1000',
    //   fontSize:'13px',
      marginLeft:10,
      marginTop : -3
    },
    backwardicon : {
        opacity: '1.0',
        cursor:'pointer',
        display: 'inline',
        marginTop: 10,
        marginLeft:500, 
        height:15
    },
    forwardicon : {
        opacity: '1.0',
        cursor:'pointer',
        display: 'inline',
        marginTop: 10,
        height:30
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
                <ArrowBackIosIcon className = {classes.backwardicon} onClick = { (e) =>   Back(e)}/>
                <div className = "pagelabel"> 
                 Page {currentPage} from total {totalPages} pages
                </div>
                <SkipNextRoundedIcon className = {classes.forwardicon} onClick = { (e) => Next(e)}/>
                <Button variant="contained" color = "primary" className = {classes.root} onClick = {getPage}> Page </Button>
                <input type = "number" className = "skiptoinput" onChange = { (e) => setPage(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Pagination