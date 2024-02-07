import React, { useCallback, useEffect, useState } from "react";
import { USER_LIST } from "../utils/constants";
import listUsersInView from "../utils/listUsersInView";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

export const UserList = ({ defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [usersInView, setUsersInView] = useState([]);
  const [player, setPlayer] = useState({
    id: 0,
    is_broadcaster: true,
    username: "user0",
    x: 800,
    y: 400,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const submitUpdateModal = useCallback((e) => {
    e.preventDefault();

    setPlayer((player) => ({
      ...player,
      x: e.target.elements.x.value,
      y: e.target.elements.y.value,
      screenWidth: e.target.elements.screenWidth.value,
      screenHeight: e.target.elements.screenHeight.value,
    }))

    setOpen(false);
  }, []);

  useEffect(() => {
    const updatedUsersInView = listUsersInView(Object.values(USER_LIST), player.x, player.y, player.screenWidth, player.screenHeight);
    setUsersInView(updatedUsersInView);
  }, [player]);

  return (
    <Container maxWidth="md">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '1px solid #fefefe',
          borderRadius: '3px',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create User List
          </Typography>
          <form onSubmit={submitUpdateModal}>
            <TextField placeholder="X" inputProps={{ type: 'number' }} fullWidth margin="dense" name="x" label="X" variant="outlined" defaultValue={player.x} />
            <TextField placeholder="Y" inputProps={{ type: 'number' }} fullWidth margin="dense" name="y" label="Y" variant="outlined" defaultValue={player.y} />
            <TextField placeholder="Width" inputProps={{ type: 'number' }} fullWidth margin="dense" name="screenWidth" label="Width" variant="outlined" defaultValue={player.screenWidth} />
            <TextField placeholder="Height" inputProps={{ type: 'number' }} fullWidth margin="dense" name="screenHeight" label="Height" variant="outlined" defaultValue={player.screenHeight} />
            <Button type="submit" variant="outlined" fullWidth>Submit</Button>
          </form>
        </Box>
      </Modal>
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          The following Users are currently visible based on position and screen size.
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>Create User List</Button>
      </Box>
      <Box my={4}>
        {usersInView.length === 0 && (
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        )}
        {usersInView.length > 0 && (
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Broadcaster</TableCell>
                  <TableCell align="right">X</TableCell>
                  <TableCell align="right">Y</TableCell>
                  <TableCell align="right">Distance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersInView.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.is_broadcaster.toString()}</TableCell>
                    <TableCell align="right">{user.x}</TableCell>
                    <TableCell align="right">{user.y}</TableCell>
                    <TableCell align="right">{user.distanceToPlayer}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
};
