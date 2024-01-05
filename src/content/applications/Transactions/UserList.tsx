import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import UserTable from './UserTable';
import { subDays } from 'date-fns';
import { useListUserQuery } from 'src/services/user/userAPI';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    },
    {
      id: '2',
      orderDetails: 'Fiat Deposit',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: '23M3UOG65G8K',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    }
  ];

  const { data: userInfo } = useListUserQuery();

  return (
    <Card>
      <UserTable userInfo={userInfo} />
    </Card>
  );
}

export default RecentOrders;
