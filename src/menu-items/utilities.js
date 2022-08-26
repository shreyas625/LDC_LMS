// assets
import {
    IconTypography,
    IconPalette,
    IconShadow,
    IconFileSettings,
    IconUser,
    IconUsers,
    IconUserCheck,
    IconSettings,
    IconBuildingStore,
    IconWindmill,
    IconKey
} from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconFileSettings,
    IconSettings,
    IconSettings,
    IconShadow,
    IconWindmill,
    IconKey,
    IconUser,
    IconBuildingStore,
    IconUserCheck,
    IconUsers
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Admin',
    type: 'group',
    icon: icons.IconSettings,
    children: [
        /*{
            id: 'authentication',
            title: 'Admin',
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
        },*/

        {
            id: 'utilitiesGroup',
            title: 'Group',
            type: 'item',
            url: '/utilities/group',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'utilitiesRoles',
            title: 'Roles',
            type: 'item',
            url: '/utilities/roles',
            icon: icons.IconFileSettings,
            breadcrumbs: false
        },
        {
            id: 'utilitiesUser',
            title: 'User',
            type: 'item',
            url: '/utilities/user',
            icon: icons.IconUser,
            breadcrumbs: false
        }
        /*{
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }*/
    ]
};

export default utilities;
