import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo";

export default function LogoOnlyLayout() {
  return (
    <>
      <header className="absolute inset-0 w-full p-3 z-10 h-min main-content">
        <Logo />
      </header>
      <div className="content-body overflow-y-scroll h-full z-20">
        <Outlet />
      </div>
    </>
  );
}
