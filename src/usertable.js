

const UserTable = ({ users, onUserSelect}) =>{
    
    return(
        <div>
            <h2>Users</h2>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>User Name</th>
                    <th>Show</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>
                        <button onClick={() =>  onUserSelect(item)}>Show</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}

export default UserTable;