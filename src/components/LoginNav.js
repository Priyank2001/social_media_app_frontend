function LoginNav(props){
    return (
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"lightgrey",padding:"20px"}}>
            <h3 onClick={(e) => {e.preventDefault();props.setMode(0)}}>Sign up</h3>
            <h3 onClick={(e) => {e.preventDefault();props.setMode(1)}}>Sign in</h3>
        </div>
    )

}

export default LoginNav