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
                    id: 'partnerhome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/partner/home',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
