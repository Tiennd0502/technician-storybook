import {
  DashboardIcon,
  HistoryIcon,
  ReportIcon,
  TechnicianIcon,
  FeedbackIcon,
  SettingIcon,
} from '@/assets/icons';

export const MENU_ITEM_LIST = [
  {
    id: '1',
    leftIcon: DashboardIcon,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    id: '2',
    leftIcon: DashboardIcon,
    label: 'Product & services',
    href: '/product-services',
  },
  {
    id: '3',
    leftIcon: TechnicianIcon,
    label: 'Technicians',
    href: '/technicians',
  },
  {
    id: '4',
    leftIcon: ReportIcon,
    label: 'Reports',
    href: '/reports',
  },
  {
    id: '5',
    leftIcon: FeedbackIcon,
    label: 'Feedbacks',
    href: '/feedbacks',
  },
  {
    id: '6',
    leftIcon: HistoryIcon,
    label: 'History',
    href: '/history',
  },
  {
    id: '7',
    leftIcon: SettingIcon,
    label: 'Settings',
    href: '/settings',
  },
];
