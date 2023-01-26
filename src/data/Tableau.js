import {
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import { Iconify } from "../components/iconify";
import Label from "../components/label";

export const Tableau = ({
  filteredUsers,
  rowsPerPage,
  page,
  selected,
  handleOpenMenu,
  handleClick,
  emptyRows,
}) => (
  <TableBody>
    {filteredUsers
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row) => {
        const { id, name, role, status, company, avatarUrl, isVerified } = row;
        const selectedUser = selected.indexOf(name) !== -1;

        return (
          <TableRow
            hover
            key={id}
            tabIndex={-1}
            role="checkbox"
            selected={selectedUser}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedUser}
                onChange={(event) => handleClick(event, name)}
              />
            </TableCell>

            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar alt={name} src={avatarUrl} />
                <Typography variant="subtitle2" noWrap>
                  {name}
                </Typography>
              </Stack>
            </TableCell>

            <TableCell align="left">{company}</TableCell>

            <TableCell align="left">{role}</TableCell>

            <TableCell align="left">{isVerified}</TableCell>

            <TableCell align="left">
              <Label color={(status === "Banned" && "error") || "success"}>
                {status}
              </Label>
            </TableCell>

            <TableCell align="right">
              <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                <Iconify icon={"eva:more-vertical-fill"} />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    )}
  </TableBody>
);
