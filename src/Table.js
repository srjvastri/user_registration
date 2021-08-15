import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FetchUser from './fetchuser';
import Pagination from './pagination/pagination'
import './Table.css'
import EditSymbol from './edituser/editsymbol'

// import RemoveUser from './removeuser/removeuser';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'email', minWidth: 100 },
  { id: 'gender', label: 'gender', minWidth: 100 },
  { id: 'status', label: 'status', minWidth: 100 },  
  { id: 'edit', label: 'edit', minWidth: 100 },
  { id: 'remove', label: 'delete', minWidth: 100 }
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 640,
  },
});

export const UserTable=()=> {
  const useStyles = makeStyles({
    root: {
      background: '#F23030',
      color: 'white',
      fontWeight:'900'
    },
    container:
    {
      color : 'Green'
    }
  });


  const [rows, setUsersData] = useState([]);
  const [totalpages, setTotalPages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  
  

  useEffect(() => {
    getdata()
  })
  function search(rows){
    return  (rows.filter(row => row.status.indexOf(q) > -1) || (row => row.gender.indexOf(q) > -1)) 
  }
  

  async function getdata() {
    var data = await FetchUser(pageNo)

    setUsersData(data.data)
    setTotalPages(data.meta.pagination.pages);
  }

  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  
  const new_page = (onPage) => {
    setPageNo(onPage)    
  }

  
  const [q, setQ] = useState("");
  
  return (
    <Paper >
      {/* <input type = "text" value = {q} onChange = {(e) => setQ(e.target.value)} /> */}
      
      <Pagination onPage = {new_page} currentPage = {pageNo} totalPages = {totalpages}/>
      <Paper classesName = {classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell className = {classes.root} align="center">Id</TableCell>
                <TableCell className = {classes.root} align="center">Name</TableCell>
                <TableCell className = {classes.root} align="center">Email</TableCell>
                <TableCell className = {classes.root} align="center">Gender</TableCell>
                <TableCell className = {classes.root} align="center">Status</TableCell>
                <TableCell className = {classes.root} align="center"> edit</TableCell>
                <TableCell className = {classes.root} align="center"> Remove </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
    
    search(rows) && search(rows).map ((user,key) =>
     <TableRow key = {user.id}>
                       <TableCell align="center">{user.id}</TableCell>
                       <TableCell align="center">{user.name}</TableCell>
                       <TableCell align="center">{user.email}</TableCell>
                       <TableCell align="center">{user.gender}</TableCell>
                       <TableCell align="center">{user.status}</TableCell>
                       <EditSymbol user = {user}/>
                       {/* <RemoveUser user = {user}/> */}
                       
    </TableRow>
     ) 
     
   }
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
    </Paper>
  );
}






