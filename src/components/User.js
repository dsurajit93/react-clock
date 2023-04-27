
const User = ({user}) => {
    // console.log(user);
  return (
    <div className="card">
        <div className="card-body">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.mobile}</p>
        </div>
    </div>
  )
}

export default User
