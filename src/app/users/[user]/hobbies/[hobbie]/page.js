import Link from "next/link";

const Hobbie = ({params})=>{
    // console.log(params)
    const patha = params.user;
    const pathb = params.hobbie;
    
    // console.log(path)
    return (
        <>
            <h1>User : {params.user}</h1>
            <h1>Hobbie : {params.hobbie}</h1>
            <Link href={`../../${pathb}/some`}>Description</Link>
        </>
    )
}
export default Hobbie;