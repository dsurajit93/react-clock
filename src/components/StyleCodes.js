const StyleCodes = () =>{
    const heading = {
        color: 'red',
        backgroundColor: 'yellow'
    }
    const isLoggedIn = true;

    return(
        <div>
            <nav>
                {
                    isLoggedIn ? (
                        <div>
                            <button>Profile</button>
                            <button>Log Out</button>
                        </div>
                    ) : (
                        <div>
                            <button>Sign In</button>
                            <button>Sign Up</button>
                        </div>
                    )
                }
               
                
            </nav>
            <h1 style={heading}>React JS</h1>
            <h2 style={{color:'blue', fontSize: '10px'}}>Frontend Library</h2>
        </div>
    )
}

export default StyleCodes