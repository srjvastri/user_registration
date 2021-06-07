
import 'regenerator-runtime/runtime'

const editApi = async (user) => {


    const temp = await
        fetch('https://gorest.co.in/public-api/users/'+ user.id,
        {
            method:'PUT',
            headers : {
            'Content-Type': 'application/json' ,
            'Authorization':'Bearer d964305d3082a1e4f2f1701c35238603a1e558b912a40d3c0112639ba722357a'    
            },
            body: JSON.stringify(user),
        })
    const details = await temp.json()
    return details
}

export default editApi