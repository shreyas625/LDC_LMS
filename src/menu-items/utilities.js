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
    IconKey,
    IconCirclePlus,
    IconCategory
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
    IconUsers,
    IconCirclePlus,
    IconCategory
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Administration',
    type: 'group',
    icon: icons.IconSettings,
    children: [
        {
            id: 'utilitiesUser',
            title: 'Admin',
            type: 'collapse',
            url: '/utilities/admin',
            icon: icons.IconUser,
            breadcrumbs: true,
            children: [
                {
                    id: 'utilitiesGroup',
                    title: 'Users',
                    type: 'item',
                    url: '/utilitiesUser/users',
                    icon: icons.IconUsers,
                    breadcrumbs: true
                },
                {
                    id: 'utilitiesGroup',
                    title: 'Groups',
                    type: 'item',
                    url: '/utilitiesUser/addgroup',
                    icon: icons.IconUsers,
                    breadcrumbs: true
                },
                {
                    id: 'utilitiesRoles',
                    title: 'Roles',
                    type: 'item',
                    url: '/utilitiesUser/roles',
                    icon: icons.IconFileSettings,
                    breadcrumbs: true
                },
                {
                    id: 'utilitiesMenu',
                    title: 'Menu',
                    type: 'item',
                    url: '/utilitiesUser/menus',
                    icon: icons.IconCategory,
                    breadcrumbs: true
                }
            ]
        }
    ]
};

export default utilities;
