import { FaAddressCard, FaTachometerAlt, FaUserAlt, FaUsers } from "react-icons/fa"
import { IoDocument } from "react-icons/io5"
import Document from "./container/Document"
import MainDashboard from "./container/MainDashboard"
import Profile from "./container/Profile"
import User from "./container/User"
import UserRole from "./container/UserRole"

export const RouteAdminRole = [
    {
        title: 'Dashboard',
        first_path: '',
        first_icon: <FaTachometerAlt />,
        exact: true,
        component: <MainDashboard />
    },
    {
        title: 'Profile',
        first_path: 'profile',
        first_icon: <FaTachometerAlt />,
        component: <Document />
    },
    {
        title: 'Home',
        first_path: 'home',
        first_icon: <FaTachometerAlt />,
        routes: [
            {
                name: 'Home',
                layout: '/admin',
                second_path : "home-main",
                second_icon: <FaTachometerAlt />,
                component: <MainDashboard />
            }
        ]
    },
    {
        title: 'Admin',
        first_path: 'admin',
        first_icon: <FaTachometerAlt />,
        routes: [
            {
                name: 'Document',
                layout: '/admin',
                second_path : "admin-document",
                second_icon: <IoDocument />,
                component: <Document />
            },
            {
                name: 'User',
                layout: '/admin',
                second_path : "admin-user",
                second_icon: <FaUserAlt />,
                component: <User />
            },
            {
                name: 'User Role',
                layout: '/admin',
                second_path : "admin-role",
                second_icon: <FaUsers />,
                component: <UserRole />
            },
        ]
    },
    {
        title: 'Other',
        first_path: 'other',
        first_icon: <FaTachometerAlt />,
        routes: [
            {
                name: 'Profile',
                layout: '/admin',
                second_path : "other-profile",
                second_icon: <FaAddressCard />,
                component: <Profile />
            },
        ]
    }
]

// export const RoutePetaniRole = [
//     {
//         title: 'Menu',
//         routes: [
//             {
//                 path : "",
//                 layout: '/admin',
//                 exact: true,
//                 name: 'Dashboard',
//                 icon_path: <FontAwesomeIcon icon={faTachometerAlt} className='mr-4'/>,
//                 component: Dashboard
//             },
//             {
//                 path : "/lahan",
//                 layout: '/admin',
//                 name: 'Lahan',
//                 icon_path: <FontAwesomeIcon icon={faLayerGroup} className='mr-4'/>,
//                 component: LandFarmer
//             },
//             {
//                 path : "/analytics",
//                 layout: '/admin',
//                 name: 'Analytics',
//                 icon_path: <FontAwesomeIcon icon={faDiagnoses} className='mr-4'/>,
//                 component: Analytics
//             },
//             {
//                 path : "/probe-activate",
//                 layout: '/admin',
//                 name: 'Probe Activation',
//                 icon_path: <FontAwesomeIcon icon={faCheckDouble} className='mr-4'/>,
//                 component: ProbeActivation
//             },
//         ]
//     },
//     {
//         title: 'Other',
//         routes: [
//             {
//                 path : "/profile",
//                 layout: '/admin',
//                 name: 'Profile',
//                 icon_path: <FontAwesomeIcon icon={faAddressCard} className='mr-4'/>,
//                 component: Profile
//             },
//         ]
//     }
// ]

// export const RouteAnalisRole = [
//     {
//         title: 'Menu',
//         routes: [
//             {
//                 path : "",
//                 layout: '/admin',
//                 exact: true,
//                 name: 'Dashboard',
//                 icon_path: <FontAwesomeIcon icon={faTachometerAlt} className='mr-4.5'/>,
//                 component: Dashboard
//             },
//             {
//                 path : "/analytics",
//                 layout: '/admin',
//                 name: 'Analytics',
//                 icon_path: <FontAwesomeIcon icon={faDiagnoses} className='mr-4'/>,
//                 component: LandAnalytics
//             },
//             {
//                 path : "/history",
//                 layout: '/admin',
//                 name: 'History',
//                 icon_path: <FontAwesomeIcon icon={faHistory} className='mr-5' />,
//                 component: HistoryAnalytics
//             },
//         ]
//     },
//     {
//         title: 'Other',
//         routes: [
//             {
//                 path : "/profile",
//                 layout: '/admin',
//                 name: 'Profile',
//                 icon_path: <FontAwesomeIcon icon={faAddressCard} className='mr-4'/>,
//                 component: Profile
//             },
//         ]
//     }
// ]

// export const RouteInvestorRole = [
//     {
//         title: 'Menu',
//         routes: [
//             {
//                 path : "",
//                 layout: '/admin',
//                 exact: true,
//                 name: 'Dashboard',
//                 icon_path: <FontAwesomeIcon icon={faTachometerAlt} className='mr-4'/>,
//                 component: Dashboard
//             },
//             {
//                 path : "/project",
//                 layout: '/admin',
//                 name: 'Project',
//                 icon_path: <FontAwesomeIcon icon={faProjectDiagram} className='mr-4'/>,
//                 component: Project
//             },
//             {
//                 path : "/analytics",
//                 layout: '/admin',
//                 name: 'Analytics',
//                 icon_path: <FontAwesomeIcon icon={faDiagnoses} className='mr-4'/>,
//                 component: Analytics
//             },
//             {
//                 path : "/schedule",
//                 layout: '/admin',
//                 name: 'Schedule',
//                 icon_path: <FontAwesomeIcon icon={faCalendarAlt} className='mr-4'/>,
//                 component: Schedule
//             }
//         ]
//     },
//     {
//         title: 'Report',
//         routes: [
//             {
//                 path : "/daily",
//                 layout: '/admin',
//                 name: 'Daily',
//                 icon_path: <FontAwesomeIcon icon={faFileAlt} className='mr-4'/>,
//                 component: Schedule
//             },
//             {
//                 path : "/monthly",
//                 layout: '/admin',
//                 name: 'Monthly',
//                 icon_path: <FontAwesomeIcon icon={faFileArchive} className='mr-4'/>,
//                 component: Schedule
//             },
//             {
//                 path : "/yearly",
//                 layout: '/admin',
//                 name: 'Yearly',
//                 icon_path: <FontAwesomeIcon icon={faBook} className='mr-4'/>,
//                 component: Schedule
//             },
//         ]
//     },
//     {
//         title: 'Other',
//         routes: [
//             {
//                 path : "/profile",
//                 layout: '/admin',
//                 name: 'Profile',
//                 icon_path: <FontAwesomeIcon icon={faAddressCard} className='mr-4'/>,
//                 component: Profile
//             },
//         ]
//     }
// ]


// export const RouteAdminUser = [
//     {
//         path : "",
//         exact: true,
//         layout: '/admin/user-detail/:id_seq',
//         name: 'Data Petani',
//         component: CustomerDetail
//     },
//     {
//         path : "/land",
//         layout: '/admin/user-detail/:id_seq',
//         name: 'Lahan',
//         component: Land
//     },
//     {
//         path : "/commodity",
//         layout: '/admin/user-detail/:id_seq',
//         name: 'Komoditas',
//         component: Commodity
//     },
//     {
//         path : "/cultivation",
//         layout: '/admin/user-detail/:id_seq',
//         name: 'Budidaya',
//         component: Cultivation
//     },
//     {
//         path : "/photo",
//         layout: '/admin/user-detail/:id_seq',
//         name: 'Dokumentasi Foto',
//         component: CustomerPhoto
//     }
// ]


// export const routeAuth = [
//     {
//         path : "/sign-in",
//         layout: '/auth',
//         exact: true,
//         name: 'Login',
//         component: Login
//     },
//     {
//         path : "/sign-up",
//         layout: '/auth',
//         name: 'Register',
//         component: Register
//     },
//     {
//         path : "/otp-validate",
//         layout: '/auth',
//         name: 'OTP',
//         component: OtpPage
//     },
// ]