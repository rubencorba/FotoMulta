import MenuComponent from "../components/menu/menuComponent";
import NavBarComponent from "../components/navBar/navBarComponent";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarComponent />
      <div className="flex flex-1">
        <MenuComponent />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
