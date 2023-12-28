import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flex items-center max-container padding-container relative z-30 py-5">
        <Link href="/" className="mr-8">
          <Image src="/logo.svg" alt="INORG Logo" width={100} height={60} />
        </Link>

            <ul className="hidden lg:flex h-full gap-12 space-x-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="bold-20 text-blue-80 flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                </Link>
              ))}
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