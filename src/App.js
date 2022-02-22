import React, {useState} from 'react';
import UserTable from './componets/UserTable';
import AddUserForm from './componets/AddUserForm';
import EditUserForm from './componets/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  //state
  const [users, setUsers] = useState(usersData)

  //agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar un usuario
  const deleteUser = (id) => {
    
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);

  }

  //editar usuario
  const [editing, setEditing] = useState(false);

  const [curretUser, setCurrentUser] = useState({
    id: null, name: '', username:''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user =>(user.id === id ? updatedUser : user)))
  }

  return (
   <div className='container'>
     <h1>Crud App with Hooks</h1>
     <div className='flex-row'>
      <div className='flex-large'>
        
        {
          editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
              curretUser={curretUser}
              updateUser={updateUser}
              />
            </div>
          ) : <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
            </div>
        }

        
        
      </div>
      <div className='flex-large'>
        <h2>View users</h2>
        <UserTable users={users} 
        deleteUser={deleteUser} 
        editRow={editRow}
        />
      </div>
     </div>
   </div>
  );
}

export default App