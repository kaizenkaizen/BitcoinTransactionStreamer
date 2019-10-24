import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 5),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

// This react component takes props and returns a table
function TransactionTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time of Transaction</StyledTableCell>
            <StyledTableCell align="right">Transaction Index</StyledTableCell>
            <StyledTableCell align="right">Hash</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableData(props.unconfirmed)}
        </TableBody>
      </Table>
    </Paper>
  );
}

// this will take the data passed it and show it nicely within a table
function renderTableData(unconfirmed) {
 return unconfirmed.map((unconfirmed, index) => {
    const { time, txIndex, hash } = unconfirmed; //destructuring
    return (
       <StyledTableRow key={txIndex}>
          <StyledTableCell component="th" scope="row"> {time}</StyledTableCell>
          <StyledTableCell align="right">{txIndex}</StyledTableCell>
          <StyledTableCell align="right">{hash}</StyledTableCell>
       </StyledTableRow>
    )
 });
}

export default TransactionTable;
