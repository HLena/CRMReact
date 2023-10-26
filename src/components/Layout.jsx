import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation();
  const navOptions = [
    {
      id: 'OPT001',
      link: '/',
      name: 'Clientes',
      icon: 'src/assets/images/users-solid.svg'
    },
    {
      id: 'OPT002',
      link:'/customer/new',
      name: 'Nuevo Cliente',
      icon: 'src/assets/images/user-plus-solid.svg'
    }
  ]
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 lg:w-1/5 bg-sky-500 px-3 py-10 m-3 rounded-xl">
        <h2 className="text-white font-bold text-lg">CRM - clientes</h2>
        <nav className="mt-10">
            {
              navOptions.map(({id, name, link, icon}) => (
                  <NavLink 
                    key={id}
                    to={link} 
                    className={`p-2 rounded-md text-white font-bold hover:bg-sky-600 hover:cursor-pointer transition-all mb-2 flex gap-2 ${pathname === link ? 'bg-sky-600':'bg-sky-500'}`}> 
                    <img src={icon} alt={`${name}-icon`} className="w-6"/>
                    {name}
                  </NavLink>
              ))
            }
        </nav>
      </aside>
      <main className="md:w-3/4 lg:w-4/5 md:h-screen p-10 overflow-scroll">
        <Outlet/>
      </main>
        
    </div>
  )
}

export default Layout