import Link from "next/link";

const Hobbies = ({params})=>{
    const path = params.user;
    console.log(path)
    return (
        <>
            <Link href={`../${path}/hobbies/wresling`}>Wrestling</Link> <br />
            <Link href={`../${path}/hobbies/boxing`}>Boxing</Link> <br />
            <Link href={`../${path}/hobbies/ufc`}>ufc</Link> <br />
            <Link href={`../${path}/hobbies/football`}>football</Link> <br />
        </>
    )
}

export default Hobbies;