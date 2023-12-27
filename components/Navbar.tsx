import { NAV_LINKS } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 boreder-red-500">
        <Link href="/">
            <Image src="/logo2tlo.svg" alt="INORG Logo" width={80} height={40} />
            <ul className="hidden h-full gap12 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </ul>
        </Link>
    </nav>
  )
}

export default Navbar