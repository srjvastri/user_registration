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



const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'email', minWidth: 100 },
  { id: 'gender', label: 'gender', minWidth: 100 },
  { id: 'status', label: 'status', minWidth: 100 },  
];





// const rows = [
//   {"name" : 'India', "email" : '4567sdcjsb@nsdskn.com', "gender" : "Male", "status" : "Active" ,"density" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},
//   {"name" : 'India', "country" : 'IN', "pop" : 1324171354, "spop " : 3287263 ,"den" :  89},

  
// ];

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
  console.log("FetchUser(1)");
  

  useEffect(() => {
    getdata()
  })
  

  async function getdata() {
    var data = await FetchUser(1)
    console.log(data.data);
    
    setUsersData(data.data)
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
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}






// export const Table = () => {
//     const { useState } = React;
//     const [data , setData] = useState(empList)

//     const [columns, setColumns] = useState([
//       { title: 'ID', field: 'id' },
//       { title: 'name', field: 'name' },
//       { title: 'email', field: 'email'},
//       {
//         title: 'Status',
//         field: 'status',
//         // lookup: { 0: 'Inactive', 1: 'Active' },
//       },
//       { title: 'Gender', field: 'gender'}
//     ]);
  
//     useEffect(()=>{
//         fetch("https://gorest.co.in/public-api/users")
//         .then(resp=>resp.json())
//         .then(resp=>setData(resp))
//     }, [])

//     return (
//       <MaterialTable
//         title=""
//         columns={columns}
        
//         data={data}
//         // editable={{
//         //   onRowAdd: newData =>
//         //     new Promise((resolve, reject) => {
//         //       setTimeout(() => {
//         //         setData([...data, newData]);
                
//         //         resolve();
//         //       }, 1000)
//         //     }),
//         //   onRowUpdate: (newData, oldData) =>
//         //     new Promise((resolve, reject) => {
//         //       setTimeout(() => {
//         //         const dataUpdate = [...data];
//         //         const index = oldData.tableData.id;
//         //         dataUpdate[index] = newData;
//         //         setData([...dataUpdate]);
  
//         //         resolve();
//         //       }, 1000)
//         //     }),
//         //   onRowDelete: oldData =>
//         //     new Promise((resolve, reject) => {
//         //       setTimeout(() => {
//         //         const dataDelete = [...data];
//         //         const index = oldData.tableData.id;
//         //         dataDelete.splice(index, 1);
//         //         setData([...dataDelete]);
                
//         //         resolve()
//         //       }, 1000)
//         //     }),
//         // }}
//         options={{
//             search : false,
//             // action : false,
//             TablePagination : false
//         }
//         }
//       />
//     )
//   }

























  const empList = [
    {"id":45,"name":"Msgr. Avani Varman ","email":"varman_msgr_avani@vonrueden.biz","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.162+05:30","updated_at":"2021-05-11T22:57:06.320+05:30"},{"id":46,"name":"Mr. Lakshman Shah","email":"lakshman_mr_shah@rohan.name","gender":"Male","status":"Active","created_at":"2021-05-11T03:50:04.182+05:30","updated_at":"2021-05-11T03:50:04.182+05:30"},{"id":47,"name":"Arjun Gill","email":"arjun_gill@schinner-stanton.co","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.193+05:30","updated_at":"2021-05-11T03:50:04.193+05:30"},{"id":48,"name":"Kamalesh Chopra","email":"chopra_kamalesh@deckow.io","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.215+05:30","updated_at":"2021-05-11T03:50:04.215+05:30"},{"id":49,"name":"Bharat Achari","email":"achari_bharat@conroy-jones.org","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.240+05:30","updated_at":"2021-05-11T03:50:04.240+05:30"},{"id":50,"name":"Ghanaanand Bhattathiri","email":"ghanaanand_bhattathiri@bins-jerde.co","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.262+05:30","updated_at":"2021-05-11T03:50:04.262+05:30"},{"id":51,"name":"Niro Achari","email":"achari_niro@botsford.org","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.271+05:30","updated_at":"2021-05-11T03:50:04.271+05:30"},{"id":53,"name":"Adinath Bhattathiri","email":"bhattathiri_adinath@sipes-hand.net","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.304+05:30","updated_at":"2021-05-11T03:50:04.304+05:30"},{"id":54,"name":"Mrs. Deeptimoyee Mehra","email":"mehra_mrs_deeptimoyee@grimes.biz","gender":"Male","status":"Active","created_at":"2021-05-11T03:50:04.319+05:30","updated_at":"2021-05-11T03:50:04.319+05:30"},{"id":55,"name":"Chandraayan Dutta","email":"chandraayan_dutta@graham.com","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.354+05:30","updated_at":"2021-05-11T03:50:04.354+05:30"},{"id":57,"name":"Prof. Atmananda Saini","email":"saini_atmananda_prof@kohler-jaskolski.org","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.390+05:30","updated_at":"2021-05-11T03:50:04.390+05:30"},{"id":58,"name":"Nalini Varrier","email":"nalini_varrier@gerhold.com","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.396+05:30","updated_at":"2021-05-11T03:50:04.396+05:30"},{"id":59,"name":"Mina Chattopadhyay","email":"mina_chattopadhyay@price.info","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.411+05:30","updated_at":"2021-05-11T03:50:04.411+05:30"},{"id":60,"name":"Miss Hiranya Jha","email":"miss_hiranya_jha@raynor-mayer.info","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.434+05:30","updated_at":"2021-05-11T03:50:04.434+05:30"},{"id":61,"name":"Sudeva Mahajan IV","email":"mahajan_iv_sudeva@keeling-lindgren.io","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.453+05:30","updated_at":"2021-05-11T03:50:04.453+05:30"},{"id":62,"name":"Bankimchandra Naik","email":"naik_bankimchandra@bergnaum.io","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.463+05:30","updated_at":"2021-05-11T03:50:04.463+05:30"},{"id":63,"name":"Agrata Pillai","email":"pillai_agrata@welch.io","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.473+05:30","updated_at":"2021-05-11T03:50:04.473+05:30"},{"id":64,"name":"Gautam Shah","email":"gautam_shah@white.name","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.486+05:30","updated_at":"2021-05-11T03:50:04.486+05:30"},{"id":65,"name":"Msgr. Dev Desai","email":"msgr_desai_dev@renner.info","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.492+05:30","updated_at":"2021-05-11T03:50:04.492+05:30"},{"id":66,"name":"Bhaasvan Dhawan","email":"dhawan_bhaasvan@hagenes.net","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.518+05:30","updated_at":"2021-05-11T03:50:04.518+05:30"}
]