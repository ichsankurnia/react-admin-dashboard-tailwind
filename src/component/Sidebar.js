import { Fragment, useEffect, useRef, useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RouteAdminRole } from "../route";
import Header from "./Header";
import { connect } from "react-redux";


const Sidebar = ({collapse}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [menuActive, setMenuActive] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

	const trigger = useRef(null);
	const sidebar = useRef(null);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
			setSidebarOpen(false);
			console.log('TARGET', target)
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});
	
	  // close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

    useEffect(() => {
        const arrPath = location.pathname.split('/')
        setMenuActive(arrPath[2])
    }, [location.pathname])

    const activePath = (path) => {
        if(location.pathname === '/dashboard'){
            if(path === ''){
                return true
            }
        }else if(location.pathname === '/dashboard/' + path){
            return true
        }else{
            return false
        }
    }

    const activeDrop = (title) => {
        if(location.pathname.includes(title.toLowerCase())) return true
        else return false
    }

    const handleShowSubMenu = (title) => {
        if(menuActive===title){
            setMenuActive('')
        }else if(menuActive?.toLowerCase().includes(title.toLowerCase())){
            setMenuActive('')
        }else{
            setMenuActive(title)
        }
    }

    const handleClickLogo = () => {
        navigate('/', {replace: true})
        window.location.reload()
    }
    
    
    const getRoutesPath = () => {
        return RouteAdminRole.map(({title, first_path, first_icon, routes}, key) => 
            <div key={key} className='mb-5 font-medium'>
                {routes && routes.length> 0?
                <div>
                    <div className={`mb-1 cursor-pointer ${activeDrop(first_path) || menuActive===first_path? 'text-white' : 'text-gray-400'} hover:text-white flex justify-between items-center pb-1 transition duration-300 ease-in-out transform hover:scale-105`} onClick={()=>handleShowSubMenu(first_path)}>
                        <div className='flex item-center'>
                            <span className='mr-4 flex items-center'>{first_icon}</span>
                            <p>{title}</p>
                        </div>
                        {activeDrop(first_path) || menuActive===first_path? <IoMdArrowDropdown className='text-lg' /> : <IoMdArrowDropright className='text-lg' /> }
                    </div>
                    <ul  className={`${menuActive?.includes(first_path)? 'block bg-gray-700 rounded transition duration-500 ease-in-out transform hover:scale-105' : 'hidden'}`}>
                    {routes.map(({second_path, name, second_icon}, key) => 
                        <li key={key}>
                            <Link to={second_path} onClick={() => setSidebarOpen(false)}
                                className={`px-3 py-2.5 rounded-lg my-2 ${activePath(second_path)? 'text-white': 'text-gray-400'} hover:text-white block transition duration-150`}>
                                <div className="flex items-center">
                                    <span className='mr-4'>{second_icon}</span>
                                    <span>{name}</span>
                                </div>
                            </Link>
                        </li>
                    )}
                    </ul>
                </div>
                :
                <div className={`${activePath(first_path)? 'text-white': 'text-gray-400'} pb-1 hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`} onClick={() => setSidebarOpen(false)}>
                    <Link to={first_path} className='flex item-center'>
                        <span className='mr-4 flex items-center'>{first_icon}</span>
                        <p>{title}</p>
                    </Link>
                </div>
                }
            </div>
        )
    }

    const getRoutesPathUnCollapese = () => {
        return RouteAdminRole.map(({first_path, first_icon, routes}, key) => 
            <div key={key} className='mb-5 relative flex justify-center font-medium'>
                {routes && routes.map.length> 0?
                <div>
                    <div className={`mb-1 cursor-pointer ${activeDrop(first_path) || menuActive===first_path? 'text-white scale-150' : 'text-gray-400'} hover:text-white pb-1 transition duration-300 ease-in-out transform hover:scale-150`} onMouseEnter={()=>handleShowSubMenu(first_path)} onClick={()=>handleShowSubMenu(first_path)}>
                        <span className='text-base'>{first_icon}</span>
                    </div>
                    <ul  className={`${menuActive===first_path? 'bg-gray-800 absolute top-0 left-13 z-50 pl-2 pr-5 transition duration-500 ease-in-out transform hover:scale-105' : 'hidden'}`}>
                    {routes.map(({second_path, name, second_icon}, key) => 
                        <li key={key}>
                            <Link to={second_path} onClick={() => setSidebarOpen(false)}
                                className={`px-3 py-2.5 rounded-lg my-2 ${activePath(second_path)? 'text-white': 'text-gray-400'} hover:text-white block transition duration-150`}>
                                <div className="flex items-center">
                                    <span className='mr-4'>{second_icon}</span>
                                    <span>{name}</span>
                                </div>
                            </Link>
                        </li>
                    )}
                    </ul>
                </div>
                :
                <Link to={first_path} onClick={() => setSidebarOpen(false)}
                    className={`${activePath(first_path)? 'text-white scale-150': 'text-gray-400'} pb-1 hover:text-white transition duration-500 ease-in-out transform hover:scale-150`}>
                    <span className='text-base'>{first_icon}</span>
                </Link>
                }
            </div>
        )
    }


    return (
        <Fragment>
            <div className={`text-sms animate-fade-left-to-right`}>
                
                {/* SIDEBAR MOBILE */}
                <div className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" onClick={() => setSidebarOpen(false)}></div>
                <div className='md:hidden bg-white sticky top-0 w-full h-12 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow rounded-2xl z-30'>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}
                        className='inline-flex items-center justify-center p-1 rounded-md text-black hover:bg-black hover:text-white outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                    >	
                        {sidebarOpen?
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        :
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        }
                    </button>
                    <Header />
                </div>
                
                {/* SIDEBAR */}
                <div id="sidebar" ref={sidebar}
                    className={`absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto h-screen bg-gray-800 md:translate-x-0 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} ${collapse&& 'w-64 animate-fade-left-to-right'} `}
                >
                    <div className='overflow-y-auto p-4 flex flex-col items-center h-full py-4 font-poppins text-white'>
                        <span className='mt-2 cursor-pointer' onClick={handleClickLogo}>{collapse? 'App Logo' : 'Logo'}</span>

                        {collapse? 
                        <div className='w-full h-full px-1 mt-8 flex flex-col animate-fade-left-to-right'>
                            {getRoutesPath()}
                        </div>
                        :
                        <div className='w-full h-full px-1 mt-8 flex flex-col absolute top-10 transition-all duration-700 scale-150'>
                            {getRoutesPathUnCollapese()}
                        </div>
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        collapse: state.collapse
    }
}

export default connect(mapStateToProps, null)(Sidebar)