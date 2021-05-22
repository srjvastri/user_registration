// import React from 'react';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FetchUser from './fetchuser';
import Pagination from './pagination/pagination'


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'email', minWidth: 100 },
  { id: 'gender', label: 'gender', minWidth: 100 },
  { id: 'status', label: 'status', minWidth: 100 },  
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 640,
  },
});

export const FTable=()=> {


  const [rows, setUsersData] = useState([]);
  const [totalpages, setTotalPages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  
  

  useEffect(() => {
    getdata()
  })
  

  async function getdata() {
    var data = await FetchUser(pageNo)
    console.log(data.data);
    
    setUsersData(data.data)
    setTotalPages(data.meta.pagination.pages);
  }

  const onCurrentPage = (onPage) => {
    console.log(onPage)
    setPageNo(onPage)
  }
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const new_page = (onPage) => {
    setPageNo(onPage)    
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination onPage = {new_page} currentPage = {pageNo} totalPages = {totalpages}/>
    </Paper>
  );
}






