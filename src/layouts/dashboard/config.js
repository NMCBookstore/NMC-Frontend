import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import BookOpenIcon from '@heroicons/react/24/solid/BookOpenIcon';
import ClipboardDocumentIcon from '@heroicons/react/24/solid/ClipboardDocumentIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import CreditCardIcon from '@heroicons/react/24/solid/CreditCardIcon';
import { SvgIcon } from '@mui/material';
export const UserSideBar = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Books',
    path: '/books',
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Genres',
    path: '/genres',
    icon: (
      <SvgIcon fontSize="small">
        <ClipboardDocumentIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Order',
    path: '/order',
    icon: (
      <SvgIcon fontSize="small">
        <CreditCardIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: '/accoutlist',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
];
