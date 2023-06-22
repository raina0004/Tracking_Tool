import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUser = () =>{
    const [store,setStore] = useState([])
    useEffect(()=>{
        allUserInfo()
    },[])

    const allUserInfo = async() =>{
     const res = await axios.get('http://localhost:5000/api/leadDetail/sendUserDetail');
     let store = res.data
     setStore(store)
    }
    console.log(store[0],"store is called")
    return(
        <div>
<table border="1">
<tr>
<td>Name</td>
<td>email</td>
<td>Phone</td>
<td>adress</td>
<td>Budget</td>
</tr>
{
    store?.map((el)=>{
        return(
            <tr>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.mobileNo}</td>
                <td>{el.address}</td>
                <td>{el.budget}</td>
            </tr>

        )
    })
}
</table>        </div>
    )
}
export default AllUser
