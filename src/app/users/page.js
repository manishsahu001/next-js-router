import Link from "next/link";

const Users = ()=>{
    return (
        <>  
            <Link href="/users/1">User 1</Link> <br />
            <Link href="/users/2">User 2</Link> <br />
            <Link href="/users/3">User 3</Link> <br />
            <Link href="/users/4">User 4</Link> <br />
            <Link href="/users/5">User 5</Link> <br />
            <Link href="/users/6">User 6</Link> <br />
            <Link href="/users/7">User 7</Link> <br />
            <Link href="/users/8">User 8</Link>
        </>
    )
}

export default Users;