const User = ({params})=>{
    console.log(params.user)
    return (
        <>
            <h1>User : {params.user}</h1>
        </>
    )
}
export default User;