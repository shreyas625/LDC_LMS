import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
import Partner from 'views/partners/Partner';
import Borrower from 'views/Borrower/Borrower';
import BankBorrower from 'views/Borrower/BankBorrower';
import Investor from 'views/investors/Investor';
import InvestorsBank from 'views/investors/InvestorsBank';
import ParnterBank from 'views/partners/PartnerBank';
import Users from 'views/Admin/Users';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/pages/partner/home',
            element: <Partner />
        },
        {
            path: '/pages/partner/bank',
            element: <ParnterBank />
        },
        {
            path: '/pages/investor/home',
            element: <Investor />
        },
        {
            path: '/pages/borrower/home',
            element: <Borrower />
        },
        {
            path: '/pages/borrower/bank',
            element: <BankBorrower />
        },
        {
            path: '/pages/investor/bank',
            element: <InvestorsBank />
        },
        {
            path: '/utilitiesUser/users',
            element: <Users />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
