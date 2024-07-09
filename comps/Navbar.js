import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo-as.png" alt="letters A S logo" width={77} height = {77}/>
            </div>
            <Link href="/"> Home </Link>
             <Link href="/about">About</Link>
             <Link href="/ninjas">List</Link>
        </nav>
     );
}
 
export default Navbar;