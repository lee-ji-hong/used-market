'use client';//useState를 사용하려면 csr 형태로 바꿔야 함
import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    console.log(menu)
    setMenu(!menu);
  }

  return (
    <nav>
      <div>
        {/* logo */}
        <div className="flex items-center text-2xl h-14">
          <Link href='/'>Logo</Link>
        </div>

        {/* menu */}
        <div className="text-2xl sm:hidden">
          {(menu === false) ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
        </div>

        {/* nav-items large screen */}
        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>

      {/* nav-items mobile */}
      <div className="block sm:hidden">
        {(menu === false) ? null : <NavItem mobile/>}
      </div>
    </nav>
  )
}
export default Navbar;