const UserData = ({user}) =>{
    
    if (user == null) return (
        <h2>No user selected</h2>
    );

    const renderProps  = (key, value) =>{
        console.log("returning selected user")
        if(typeof value === 'object' && value != null){
            return( 
            <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
                <ul>
                    {Object.entries(value).map(([nKey, nValue]) => renderProps(nKey, nValue))}
                </ul>
            </li>
            )
        }else{
            return(
                <li key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
            )
        }
    }
    const userProperties = Object.entries(user);
    return(
        <div>
            <label><h2>User:</h2></label>
            <div>
                {userProperties.map(([key, value]) => (
                    <ul key={user.id}>
                        {renderProps(key, value)}
                    </ul>
                ))}
            </div>
            
        </div>
    )
}

export default UserData;
