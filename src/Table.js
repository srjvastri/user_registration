import React, { useEffect } from 'react'
import MaterialTable from 'material-table'



export const Table=()=> {
    const { useState } = React;
    const [data , setData] = useState(empList)

    const [columns, setColumns] = useState([
      { title: 'ID', field: 'id' },
      { title: 'name', field: 'name' },
      { title: 'email', field: 'email'},
      {
        title: 'Status',
        field: 'status',
        // lookup: { 0: 'Inactive', 1: 'Active' },
      },
      { title: 'Gender', field: 'gender'}
    ]);
  
    useEffect(()=>{
        fetch("https://gorest.co.in/public-api/users")
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
    }, [])

    return (
      <MaterialTable
        title=""
        columns={columns}
        
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
        options={{
            search : false
            // action : false
        }
        }
      />
    )
  }

























  const empList = [
    {"id":45,"name":"Msgr. Avani Varman ","email":"varman_msgr_avani@vonrueden.biz","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.162+05:30","updated_at":"2021-05-11T22:57:06.320+05:30"},{"id":46,"name":"Mr. Lakshman Shah","email":"lakshman_mr_shah@rohan.name","gender":"Male","status":"Active","created_at":"2021-05-11T03:50:04.182+05:30","updated_at":"2021-05-11T03:50:04.182+05:30"},{"id":47,"name":"Arjun Gill","email":"arjun_gill@schinner-stanton.co","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.193+05:30","updated_at":"2021-05-11T03:50:04.193+05:30"},{"id":48,"name":"Kamalesh Chopra","email":"chopra_kamalesh@deckow.io","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.215+05:30","updated_at":"2021-05-11T03:50:04.215+05:30"},{"id":49,"name":"Bharat Achari","email":"achari_bharat@conroy-jones.org","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.240+05:30","updated_at":"2021-05-11T03:50:04.240+05:30"},{"id":50,"name":"Ghanaanand Bhattathiri","email":"ghanaanand_bhattathiri@bins-jerde.co","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.262+05:30","updated_at":"2021-05-11T03:50:04.262+05:30"},{"id":51,"name":"Niro Achari","email":"achari_niro@botsford.org","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.271+05:30","updated_at":"2021-05-11T03:50:04.271+05:30"},{"id":53,"name":"Adinath Bhattathiri","email":"bhattathiri_adinath@sipes-hand.net","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.304+05:30","updated_at":"2021-05-11T03:50:04.304+05:30"},{"id":54,"name":"Mrs. Deeptimoyee Mehra","email":"mehra_mrs_deeptimoyee@grimes.biz","gender":"Male","status":"Active","created_at":"2021-05-11T03:50:04.319+05:30","updated_at":"2021-05-11T03:50:04.319+05:30"},{"id":55,"name":"Chandraayan Dutta","email":"chandraayan_dutta@graham.com","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.354+05:30","updated_at":"2021-05-11T03:50:04.354+05:30"},{"id":57,"name":"Prof. Atmananda Saini","email":"saini_atmananda_prof@kohler-jaskolski.org","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.390+05:30","updated_at":"2021-05-11T03:50:04.390+05:30"},{"id":58,"name":"Nalini Varrier","email":"nalini_varrier@gerhold.com","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.396+05:30","updated_at":"2021-05-11T03:50:04.396+05:30"},{"id":59,"name":"Mina Chattopadhyay","email":"mina_chattopadhyay@price.info","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.411+05:30","updated_at":"2021-05-11T03:50:04.411+05:30"},{"id":60,"name":"Miss Hiranya Jha","email":"miss_hiranya_jha@raynor-mayer.info","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.434+05:30","updated_at":"2021-05-11T03:50:04.434+05:30"},{"id":61,"name":"Sudeva Mahajan IV","email":"mahajan_iv_sudeva@keeling-lindgren.io","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.453+05:30","updated_at":"2021-05-11T03:50:04.453+05:30"},{"id":62,"name":"Bankimchandra Naik","email":"naik_bankimchandra@bergnaum.io","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.463+05:30","updated_at":"2021-05-11T03:50:04.463+05:30"},{"id":63,"name":"Agrata Pillai","email":"pillai_agrata@welch.io","gender":"Female","status":"Active","created_at":"2021-05-11T03:50:04.473+05:30","updated_at":"2021-05-11T03:50:04.473+05:30"},{"id":64,"name":"Gautam Shah","email":"gautam_shah@white.name","gender":"Male","status":"Inactive","created_at":"2021-05-11T03:50:04.486+05:30","updated_at":"2021-05-11T03:50:04.486+05:30"},{"id":65,"name":"Msgr. Dev Desai","email":"msgr_desai_dev@renner.info","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.492+05:30","updated_at":"2021-05-11T03:50:04.492+05:30"},{"id":66,"name":"Bhaasvan Dhawan","email":"dhawan_bhaasvan@hagenes.net","gender":"Female","status":"Inactive","created_at":"2021-05-11T03:50:04.518+05:30","updated_at":"2021-05-11T03:50:04.518+05:30"}
]