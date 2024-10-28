import React, { useState, useEffect } from 'react';
import UserTable from "./usertable"
import UserData from './userdata';
import loadingGif from "./images/loading.gif"; 
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [user, setSelectedUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`); 
        }

        const data = await response.json(); 
        setUsers(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const handleUserSelect = (selectedUser) => {
    setSelectedUser(selectedUser);
  };

  if(loading){
    return(
      <div class="loading-gif">
        <img src={loadingGif}/>
      </div>
    )
  }
  if(error!== null){
    <div>
      return <div>Error: {error}</div>;
    </div>
  }

  return (
    <div className="App">
      <header><h1>USERS APP!!!</h1></header>
      <main>
        <UserTable users={users} onUserSelect={handleUserSelect}></UserTable>
        <UserData user={user} ></UserData>
      </main>
      
      
    </div>
  );
}

export default App;
