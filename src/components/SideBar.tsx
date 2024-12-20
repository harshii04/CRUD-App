import { ChartBar, ShoppingBag, Stack } from "@phosphor-icons/react";
import SideNavElement from "./SideNavElement";
import { useState } from "react";
import React from "react";

const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const sidebarItems = [
    { route: "Dashboard", icon: <ChartBar size={24} /> },
    { route: "Shopping", icon: <ShoppingBag size={24} /> },
    { route: "Stack", icon: <Stack size={24} /> },
  ];

  return (
    <>
      <aside className="h-screen w-16 bg-brandBlue static">
        <nav className="py-8">
          <ul className="flex flex-col gap-4 px-2">
            {sidebarItems.map((item) => (
              <SideNavElement
                key={item.route}
                isActive={activeItem === item.route}
                icon={item.icon}
                onClick={() => setActiveItem(item.route)}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
