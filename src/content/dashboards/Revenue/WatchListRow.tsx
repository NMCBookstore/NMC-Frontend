import {
  Button,
  Card,
  Box,
  CardActions,
  Typography,
  Avatar,
  alpha,
  Stack,
  Divider,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import { useListTotalUserNumberQuery } from 'src/services/user/userAPI';
import { useEffect, useState } from 'react';
import { useGetGenresQuery } from 'src/services/genres/genresAPI';
import { useGetAllProductsQuery } from 'src/services/product/productAPI';
import { useGetAllOrderQuery } from 'src/services/order/orderAPI';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

function WatchListRow() {
  const theme = useTheme();

  const [numberUser, setNumberUser] = useState<number>(0);
  const [numberGenres, setNumberGenres] = useState<number>(0);
  const [numberBooks, setNumberBooks] = useState<number>(0);
  const [numberOrders, setNumberOrders] = useState<number>(0);

  const { data: totalUser } = useListTotalUserNumberQuery();
  const { data: totalGenres } = useGetGenresQuery();
  const { data: totalBooks } = useGetAllProductsQuery();
  const { data: totalOrders } = useGetAllOrderQuery();

  useEffect(() => {
    setNumberUser(totalUser?.length);
    setNumberGenres(totalGenres?.length);
    setNumberBooks(totalBooks?.length);
    setNumberOrders(totalOrders?.length);
  }, [totalUser, totalGenres, numberBooks, totalOrders]);

  console.log(
    'totalUser: ',
    numberUser,
    numberGenres,
    numberBooks,
    numberOrders
  );
  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Books
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Total amount of books
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">now</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                {numberUser}
              </Typography>
            </Box>
          </Box>
          <Box pt={2}></Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Genres
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Total amount of genres
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">now</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                {numberGenres}
              </Typography>
            </Box>
          </Box>
          <Box pt={2}></Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  User
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Total of user
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">now</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                {numberUser}
              </Typography>
            </Box>
          </Box>
          <Box pt={2}></Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Orders
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Total of orders
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">now</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                {numberOrders}
              </Typography>
            </Box>
          </Box>
          <Box pt={2}></Box>
        </Box>
      </Stack>
      <Divider />
    </Card>
  );
}

export default WatchListRow;
