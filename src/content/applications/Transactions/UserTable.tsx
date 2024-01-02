import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { format } from 'date-fns';
import Label from 'src/components/Label';
import { EmailVerify, User } from 'src/models/User';
import BulkActions from './BulkActions';

interface UserTableProps {
  className?: string;
  userInfo: User[];
}
interface FiltersEmail {
  emailStatus?: EmailVerify;
}

//New one
const getEmailStatusLabel = (emailStatus: EmailVerify): JSX.Element => {
  const map = {
    false: {
      text: 'Not verified',
      color: 'error'
    },
    true: {
      text: 'Verified',
      color: 'success'
    }
  };

  const statusKey = emailStatus.toString();

  if (map.hasOwnProperty(statusKey)) {
    const { text, color } = map[statusKey];
    return <Label color={color}>{text}</Label>;
  }

  // Xử lý trường hợp emailStatus không tồn tại trong map
  return <Label color="error">Unknown</Label>;
};

//New one
const applyEmailFilters = (
  user: User[] | undefined,
  filters: FiltersEmail
): User[] => {
  return (
    user?.filter((item) => {
      let matches = true;

      if (
        filters.emailStatus &&
        item.is_email_verified.toString() === filters.emailStatus.toString()
      ) {
        matches = false;
      }

      return matches;
    }) || []
  );
};

//New one
const applyUserPagination = (
  user: User[],
  page: number,
  limit: number
): User[] => {
  return user.slice(page * limit, page * limit + limit);
};

const UserTable: FC<UserTableProps> = ({ userInfo }) => {
  //New one
  const [selectUser, setSelectedUser] = useState<string[]>([]);

  // New one
  const selectBulkUserActions = selectUser.length > 0;

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  //New one
  const [emailFilters, setEmailFilters] = useState<FiltersEmail>({
    emailStatus: null
  });

  const statusOptions = [
    {
      id: 'false',
      name: 'Verified'
    },
    {
      id: 'true',
      name: 'Not verified'
    }
  ];

  //New one
  const handleEmailStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setEmailFilters((prevFilters) => ({
      ...prevFilters,
      emailStatus: value
    }));
  };

  //New one
  const handleSelectAllUser = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUser(
      event.target.checked ? userInfo.map((item) => item?.username) : []
    );
  };

  //New one
  const handleSelectOneUser = (
    event: ChangeEvent<HTMLInputElement>,
    userName: string
  ): void => {
    if (!selectUser.includes(userName)) {
      setSelectedUser((prevSelected) => [...prevSelected, userName]);
    } else {
      setSelectedUser((prevSelected) =>
        prevSelected.filter((id) => id !== userName)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  //New one
  const filteredUser = applyEmailFilters(userInfo, emailFilters);

  //New one
  const paginatedUser = applyUserPagination(filteredUser, page, limit);

  //New one
  const selectedSomeUser =
    selectUser.length > 0 && selectUser.length < userInfo.length;

  //New one
  const selectAllUser = selectUser.length === userInfo?.length;
  const theme = useTheme();

  return (
    <Card>
      {selectBulkUserActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectBulkUserActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Email status</InputLabel>
                <Select
                  value={emailFilters.emailStatus}
                  onChange={handleEmailStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem
                      key={String(statusOption.id)}
                      value={String(statusOption.id)}
                    >
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="User List"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectAllUser}
                  indeterminate={selectedSomeUser}
                  onChange={handleSelectAllUser}
                />
              </TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Email Verified</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUser.map((item) => {
              const isUserSelected = selectUser.includes(item?.username);
              return (
                <TableRow hover key={item?.id} selected={isUserSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isUserSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneUser(event, item?.username)
                      }
                      value={isUserSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item?.username}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item?.rank}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item?.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {getEmailStatusLabel(item?.is_email_verified)}
                      {/* {cryptoOrder.cryptoCurrency} */}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {/* {getStatusLabel(cryptoOrder.status)} */}
                    {format(new Date(item?.created_at), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredUser?.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

UserTable.propTypes = {
  userInfo: PropTypes.array.isRequired
};

UserTable.defaultProps = {
  userInfo: []
};

export default UserTable;
