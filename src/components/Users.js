import User from "./User"


const Users = () => {
    const users = [
        {"name": "Tom", "mobile": 9087656789, "email": "tom@gmail.com"},
        {"name": "Jerry", "mobile": 8797657898, "email": "jerry@gmail.com"},
        {"name": "Spike", "mobile": 7896789786, "email": "spike@gmail.com"},
        {"name": "Droopy", "mobile": 8976789098, "email": "droopy@gmail.com"},
        {"name": "Casper", "mobile": 9784609876, "email": "casper@gmail.com"},
    ]
  return (
    <div className="container">
        <div className="row">
      {
        users.map((user, i)=>(
            <div className="col-sm-3 p-1">
                <User key={i} user={user} />
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Users
