import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center max-container padding-container relative z-30 py-5">
        <Link href="/" className="mr-10">
          <Image src="/logo.svg" alt="INORG Logo" width={100} height={60} />
        </Link>

            <ul className="hidden lg:flex h-full gap-10 space-x-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="bold-16 text-blue-80 flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                </Link>
              ))}
              <p className="bold-16 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            </ul>
        
        <Image
        src="/menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar