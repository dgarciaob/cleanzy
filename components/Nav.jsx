import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex my-6 mx-10 justify-between items-center">
        <Link href="/" className="flex gap-3 items-center">
          <Image 
            src="/icons/logoCleanzy.svg"
            alt="Cleanzy Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="items-center text-2xl hidden sm:block">Cleanzy | Brillando en cada rincón.</p>
        </Link>

        <Link href="/">
          <button className="primary-bg-color px-3.5 py-2 text-white text-lg rounded-xl hover:opacity-80 active:opacity-70">Suscríbete</button>
        </Link> 
    </nav>
  )
}

export default Nav