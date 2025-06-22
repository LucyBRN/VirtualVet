import { Fragment, useEffect, useState } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import classes from "./clients.module.css";
//import AddOwnerModal from "../../../views/modals/Owners/AddOwner/AddOwnerModal";
import axios from "axios";

const Clients = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [editShown, setEditShown] = useState(false);
  //const [editingId, setEditingId] = useState();
  const [addOwnerOpen, setAddOwnerOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/owners")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  /*
  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:8080/owners${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };
*/

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/owners/${id}`).then(() => {
      setData([]);
    });
  };

  const handleShowEditable = () => {
    setEditShown((current) => !current);
  };

  return (
    <Fragment>
      {/*
      <AddOwnerModal
        className={classes.modal}
        open={addOwnerOpen}
        onClose={() => setAddOwnerOpen(false)}
      />
      {error}
      {loading}
      {/*<Button type="button" href="/admin/locatari/adauga">
        Adauga locatar
  </Button>*/}
      <Button
        type="button"
        className={classes.navButton}
        onClick={() => setAddOwnerOpen(true)}
      >
        Adauga locatar
      </Button>
      <TableContainer component={Paper} sx={{ minWidth: 1000 }}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nume</TableCell>
              <TableCell align="center">Prenume</TableCell>
              <TableCell align="center">Actiuni</TableCell>
            </TableRow>
          </TableHead>
          <Fragment>
            <TableBody>
              {data && data.length > 0
                ? data.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        {editShown ? (
                          <FormControl className={classes.form}>
                            <TableCell
                              id="id"
                              component="th"
                              scope="row"
                              align="center"
                              className={classes.form__item}
                            >
                              <TextField
                                type="text"
                                variant="standard"
                                defaultValue={item.id}
                              />
                            </TableCell>
                            <TableCell
                              id="last_name"
                              component="th"
                              scope="row"
                              align="center"
                              className={classes.form__item}
                            >
                              <TextField
                                type="text"
                                variant="standard"
                                defaultValue={item.lastName}
                              />
                            </TableCell>
                            <TableCell
                              id="first_name"
                              component="th"
                              scope="row"
                              align="center"
                              className={classes.form__item}
                            >
                              <TextField
                                type="text"
                                variant="standard"
                                defaultValue={item.firstName}
                              />
                            </TableCell>
                          </FormControl>
                        ) : (
                          <Fragment>
                            <TableCell id="id" scope="row" align="center">
                              {item.id}
                            </TableCell>
                            <TableCell
                              id="last_name"
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {item.lastName}
                            </TableCell>
                            <TableCell
                              id="first_name"
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {item.firstName}
                            </TableCell>
                          </Fragment>
                        )}
                        <TableCell component="th" scope="row" align="center">
                          <Box className={classes.actions__icons}>
                            <FontAwesomeIcon
                              className={classes.actions__icons__delete}
                              icon={faTrash}
                              style={{ color: "#005eff" }}
                              size="xl"
                              onClick={() => handleDelete(item.id)}
                            />
                            <FontAwesomeIcon
                              className={classes.actions__icons__update}
                              icon={faPenToSquare}
                              style={{ color: "#005eff" }}
                              size="xl"
                              onClick={handleShowEditable}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </Fragment>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Clients;
