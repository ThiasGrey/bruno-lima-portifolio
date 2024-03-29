'use client';

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
    
    
]

export const Header = () => {

    const HandleContact = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(
        <motion.header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        width={70}
                        height={60}
                        src="/images/myLogo-BM.svg"
                        alt="Logo Bruno Dev"
                    />
                </Link>

                <nav className="flex gap-4 sm:gap-10 items-center">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                    <button className="text-grey-400 flex items-center gap-2 font-medium font-mono w-max" onClick={HandleContact}>
                    <span className="text-cyan-400">#</span> Entre em contato </button>
                    
                </nav>
            </div>
        </motion.header>
    )
}