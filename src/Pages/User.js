import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
  const params = useParams();
  const [role, setRole] = useState([]);
  const [user, setUser] = useState([]);
  const [storeOption, setStoreOption] = useState([]);
  const userss = useSelector((state) => state.loggedIn);
  console.log(userss,"all ka data is called")


  useEffect(() => {
    handleRoles();
    handleUser();
  }, []);

  const handleRoles = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/roles/roleinformation');
      setRole(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/register/userInfo');
      setUser(res.data);
      setStoreOption(new Array(res.data.length).fill(''));
    } catch (error) {
      console.error(error);
    }
  };

  const storeAssignTO = (e, index) => {
    let info = [...storeOption];
    console.log(info)
    info[index] = e.target.value;
    console.log(info[index],"index is called")
    console.log(info,"info data is called")
    setStoreOption(info);
  };
  console.log(storeOption,"role is called")

  const handleAssignTo = (index) => {
    const selectedRole = storeOption[index];
    const selectedUser = user[index];
    if (selectedRole && selectedUser) {
        let obj={
            roles : selectedRole
        }
      axios.put(`http://localhost:5000/api/register/assignRoles?id=${selectedUser._id}`, obj)
      .catch((error) => {
          console.error('Failed to assign role:', error);
        });
    }
  };

  return (
    <table border="1">
      <tr>
        <td>s:no</td>
        <td>Name</td>
        <td>Email</td>
        <td>Assign To</td>
        <td>Confirm</td>
      </tr>
      {user.map((el, i) => (
        <tr key={i + 1}>
          <td>{i + 1}</td>
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>
            <select value={storeOption[i]} onChange={(e) => storeAssignTO(e, i)}>
              <option></option>
              {role?.map((roleEl, index) => (
                <option key={index + 1} value={roleEl._id}>{roleEl.name}</option>
              ))}
            </select>
          </td>
          <td>
            <input type="checkbox" onChange={() => handleAssignTo(i)} />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default User;
