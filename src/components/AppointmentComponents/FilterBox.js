import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

export default function FilterBox(){

  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};