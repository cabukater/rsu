import React, { Component } from 'react'
import CardBox from 'components/CardBox'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
       <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item spacing={2}>
              <CardBox/>
            </Grid>

            <Grid item spacing={2}>
              <CardBox/>
            </Grid>

            <Grid item spacing={2}>
              <CardBox/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
