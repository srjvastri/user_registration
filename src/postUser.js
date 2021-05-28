const postUser = async(user) => {
    const res = await
    fetch('https://gorest.co.in/public-api/users',
    {
        method:'POST',
        headers : {
        'Content-Type': 'application/json' ,
        'Authorization':'Bearer d964305d3082a1e4f2f1701c35238603a1e558b912a40d3c0112639ba722357a'    
        },
        body: JSON.stringify(user),
    })
    const data = await res.json()
    if(parseInt(data.code/100)!==2) {
        var i;
        var msg = ""
        for(i = 0 ; i < data.data.length ; i++) {
            msg = msg + data.data[i].field +" "+data.data[i].message +","
        }
        alert(msg)
    }
    return data
}

export default postUser