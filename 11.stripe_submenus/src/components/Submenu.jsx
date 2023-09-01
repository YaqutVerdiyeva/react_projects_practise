import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const { isSubmenuOpen, page, location } = useGlobalContext();
  console.log(page);
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    // console.log(links)
    if (page?.links.length === 3) {
      setColumns("col-3");
    }
    if (page?.links.length > 3) {
      setColumns("col-4");
    }
  }, []);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
      <h1>daxswaxdaqwsxd</h1>
        <h4>{page?.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {page?.links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
