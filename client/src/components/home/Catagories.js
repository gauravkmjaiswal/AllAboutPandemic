import React from "react";
import { catagories } from "../../constant/data";
import {
  Button,
  makeStyles,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  TableBody,
  Tab,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  create: {
    margin: 20,
    background: "#6495ED",
    color: "#fff",
    width: "80%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
export default function () {
  const classes = useStyles();
  console.log("welcome");
  return (
    <>
      <Link to="./create" className={classes.link}>
        <Button className={classes.create}>Create Blog</Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link className={classes.link} to={`/`}>
                All Catagories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catagories.map((category) => (
            <TableRow key={category}>
              <TableCell>
                <Link className={classes.link} to={`/?category=${category}`}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
