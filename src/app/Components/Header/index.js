"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Headerdata from "../../../../data/db.json";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container">
      <div className="navBar d-flex align-items-center justify-content-center">
        <ul className="d-flex mb-0">
          {Headerdata.headerData.map((item, index) => (
            <li
              key={index}
              className={`navItem d-none d-sm-block ${
                pathname === item.path ? "active" : "" 
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
