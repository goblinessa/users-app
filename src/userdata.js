import "./userdata.css"

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
        <div className="user-data">
            <h2>User:</h2>
            <hr className="list-line"/>
            <div>
                
                <ul key={user.id}>
                    {userProperties.map(([key, value]) => (
                        
                            renderProps(key, value)
                        
                    ))}
                </ul>
                
            </div>
            
        </div>
    )
}

export default UserData;
/*
<ul key={user.id}>
                            <li>{user.name}</li>
                            {renderProps(key, value)}
                            </ul>*/