import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {getUiLinks(links)}
  </nav>;
}

function getUiLinks(links) {
  return links.map((link) =><a key={link} href={`#${link}`}>{link}</a>)
}

export default NavBar;
