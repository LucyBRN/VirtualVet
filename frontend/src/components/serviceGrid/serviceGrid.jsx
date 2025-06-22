import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import classes from "./serviceGrid.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ServiceGrid() {
  return (
    <Box className={classes.box}>
      <Grid
        className={classes.container}
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid className={classes.item_grid} item xs={6}>
          <Item className={classes.item}>Clients management</Item>
        </Grid>
        <Grid className={classes.item_grid} item xs={6}>
          <Item className={classes.item}>Inventory management</Item>
        </Grid>
        <Grid className={classes.item_grid} item xs={6}>
          <Item className={classes.item}>Productivity features</Item>
        </Grid>
        <Grid className={classes.item_grid} item xs={6}>
          <Item className={classes.item}>Access anytime, anywhere</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
