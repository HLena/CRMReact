import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
        <h2>CRM - clientes</h2>
      </aside>
      <main className="md:w-3/4 md:h-screen p-10 overflow-scroll">
        content
      </main>
        
    </div>
  )
}

export default Layout