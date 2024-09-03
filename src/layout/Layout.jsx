import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="px-5">
        <Outlet/>
    </main>
  )
}

export default Layout
