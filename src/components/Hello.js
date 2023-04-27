import './../App.css'
// const Hello = (props) =>{
const Hello = ({name, age}) =>{
    // console.log(props)
    // const name = "Jhon Smith"
    // const age = 22
    return(
        <>
            <h1 className="heading">Hello from Component</h1>
            {/* <h2>{props.name} is {props.age} years old</h2> */}
            <h2>{name} is {age} years old</h2>
            <p>{10 + 20}</p>
        </>

    )
}

export default Hello