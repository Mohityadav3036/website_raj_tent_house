'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
     <h1 className="text-3xl font-bold w-max m-auto mb-10 animate-color-change relative">RAJ TENT HOUSE</h1>

         <Menu setActive={setActive} >
                   <Link href={"/"}>
                         <MenuItem setActive={setActive} active={active} item="Home">
                                 
                         </MenuItem>
                   </Link>
                   <Link href={"/gallery"}>
                         <MenuItem setActive={setActive} active={active} item="Gallery">
                                 
                         </MenuItem>
                   </Link>
                   <Link href={"/contact"}>
                         <MenuItem setActive={setActive} active={active} item="Contact-us">
                                 
                         </MenuItem>
                   </Link>
                   <Link href={"/about"}>
                         <MenuItem setActive={setActive} active={active} item="About">
                                 
                         </MenuItem>
                   </Link>
                 
                   

         </Menu>
         <div>
            
         </div>
    </div>
  )
}

export default Navbar
