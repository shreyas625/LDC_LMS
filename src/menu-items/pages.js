// assets
import { IconKey, IconUser } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'partner',
            title: 'Partner',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'partnerHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/partner/home',
                    target: false
                },
                {
                    id: 'partnerBank',
                    title: 'Bank',
                    type: 'item',
                    url: '/pages/partner/bank',
                    target: false
                },
                {
                    id: 'partnerStat',
                    title: 'Bank Statement',
                    type: 'item',
                    url: '/pages/partner/bankstat',
                    target: false
                },
                {
                    id: 'partnerDeposit',
                    title: 'Deposit',
                    type: 'item',
                    url: '/pages/partner/deposit',
                    target: false
                },
                {
                    id: 'partnerWithdrawal',
                    title: 'Withdrawal',
                    type: 'item',
                    url: '/pages/partner/withdrawal',
                    target: false
                }
            ]
        },
        {
            id: 'product',
            title: 'Product',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'partnerHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/partner/home',
                    target: false
                },
                {
                    id: 'partnerBank',
                    title: 'Bank',
                    type: 'item',
                    url: '/pages/partner/bank',
                    target: false
                },
                {
                    id: 'partnerStat',
                    title: 'Bank Statement',
                    type: 'item',
                    url: '/pages/partner/bankstat',
                    target: false
                },
                {
                    id: 'partnerDeposit',
                    title: 'Deposit',
                    type: 'item',
                    url: '/pages/partner/deposit',
                    target: false
                },
                {
                    id: 'partnerWithdrawal',
                    title: 'Withdrawal',
                    type: 'item',
                    url: '/pages/partner/withdrawal',
                    target: false
                }
            ]
        },
        {
            id: 'investor',
            title: 'Investor',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'partnerHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/investor/home',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
