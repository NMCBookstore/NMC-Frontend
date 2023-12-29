import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import BooksListTable from './ReviewListTable';
import { subDays } from 'date-fns';
import ReviewListTable from './ReviewListTable';

function ReviewList() {
  return (
    <Card>
      <ReviewListTable />
    </Card>
  );
}

export default ReviewList;
