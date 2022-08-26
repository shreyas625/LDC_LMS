// assets
import {
    IconKey,
    IconUser,
    IconList,
    IconUserCheck,
    IconBuildingStore,
    IconUserPlus,
    IconUsers,
    IconArrowForwardUp,
    IconReceiptRefund,
    IconChecklist
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconUser,
    IconUserCheck,
    IconBuildingStore,
    IconUserPlus,
    IconArrowForwardUp,
    IconReceiptRefund,
    IconUsers,
    IconList,
    IconChecklist
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Menus',
    //caption: 'Pages Caption',
    type: 'group',
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
            id: 'partner',
            title: 'Partner',
            type: 'collapse',
            icon: icons.IconUserCheck,
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
            icon: icons.IconBuildingStore,
            children: [
                {
                    id: 'prodcutHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/product/home',
                    target: false
                },
                {
                    id: 'productCharges',
                    title: 'Charges',
                    type: 'item',
                    url: '/pages/product/charges',
                    target: false
                }
            ]
        },
        {
            id: 'investor',
            title: 'Investor',
            type: 'collapse',
            icon: icons.IconUserPlus,
            children: [
                {
                    id: 'investorHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/investor/home',
                    target: false
                },
                ,
                {
                    id: 'investorBank',
                    title: 'Bank',
                    type: 'item',
                    url: '/pages/investor/bank',
                    target: false
                },
                {
                    id: 'investorStat',
                    title: 'Bank Statement',
                    type: 'item',
                    url: '/pages/investor/bankstatement',
                    target: false
                },
                {
                    id: 'investorDeposit',
                    title: 'Deposit',
                    type: 'item',
                    url: '/pages/investor/deposit',
                    target: false
                },
                {
                    id: 'investorWithdrawal',
                    title: 'Withdrawal',
                    type: 'item',
                    url: '/pages/investor/withdrawal',
                    target: false
                },
                {
                    id: 'investorInvestments',
                    title: 'Investments',
                    type: 'item',
                    url: '/pages/investor/Investments',
                    target: false
                }
            ]
        },
        {
            id: 'borrower',
            title: 'Borrower',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'borrowerHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/borrower/home',
                    target: false
                },
                {
                    id: 'borrowerBank',
                    title: 'Bank',
                    type: 'item',
                    url: '/pages/borrower/bank',
                    target: false
                },
                {
                    id: 'borrowerBankStatement',
                    title: 'Bank Statement',
                    type: 'item',
                    url: '/pages/borrower/bankstatement',
                    target: false
                },
                {
                    id: 'borrowerLoan',
                    title: 'Loan',
                    type: 'collapse',

                    url: '/pages/borrower/loan',
                    children: [
                        {
                            id: 'borrowerLoanPaymentCharges',
                            title: 'Payment Charges',
                            type: 'item',
                            url: '/pages/borrowerLoan/paymentcharges',
                            target: false
                        }
                    ]
                }
            ]
        },

        {
            id: 'disbursement',
            title: 'Disbursement',
            type: 'collapse',
            icon: icons.IconArrowForwardUp,
            children: [
                {
                    id: 'disbursementHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/disbursement/home',
                    target: false
                },

                {
                    id: 'disbursementEscrowBank',
                    title: 'Escrow Bank',
                    type: 'item',
                    url: '/pages/disbursement/escrowbank',
                    target: false
                },
                {
                    id: 'disbursementEscrowBankStatement',
                    title: 'Escrow Statement',
                    type: 'item',
                    url: '/pages/disbursement/escrowbankstatement',
                    target: false
                }
            ]
        },

        {
            id: 'amotization',
            title: 'Amotization',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'amotizationHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/amotization/home',
                    target: false
                },

                {
                    id: 'amotizationAdjustments',
                    title: 'Adjustments',
                    type: 'item',
                    url: '/pages/amotizations/adjustments',
                    target: false
                }
            ]
        },

        {
            id: 'repayment',
            title: 'Repayment',
            type: 'item',
            url: '/pages/repayment',
            icon: icons.IconChecklist,
            breadcrumbs: false
        },

        /*{
            id: 'repayment',
            title: 'Repayment',
            type: 'item',
            icon: icons.IconChecklist,
            children: [
                {
                    id: 'repaymentHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/repayment/home',
                    target: false
                },

                {
                    id: 'repaymentGeneration',
                    title: 'Generation',
                    type: 'item',
                    url: '/pages/repayment/generation',
                    target: false
                }
            ]
        },

        {
            id: 'batch',
            title: 'Batch',
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'batchHome',
                    title: 'Home',
                    type: 'item',
                    url: '/pages/batch/home',
                    target: false
                }
            ]
        },*/

        {
            id: 'distribution',
            title: 'Distribution',
            type: 'item',
            url: '/pages/distribution',
            icon: icons.IconList,
            breadcrumbs: false
        },

        {
            id: 'foreclosure',
            title: 'Foreclosure',
            type: 'item',
            url: '/pages/foreclosure',
            icon: icons.IconUser,
            breadcrumbs: false
        }
    ]
};

export default pages;
