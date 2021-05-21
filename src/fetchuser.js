
import 'regenerator-runtime/runtime'

const FetchUser = async(pageNo) => {
    const res = await fetch('https://gorest.co.in/public-api/users?page='+pageNo,{})
    const data = await res.json()
    // console.log(data.data);
    return data;
  }
  
  export default FetchUser