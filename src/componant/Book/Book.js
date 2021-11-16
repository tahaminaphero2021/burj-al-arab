import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType}=useParams();
    return (
        <Grid container >
        <Grid container justify="center" item xs="12">
            <Typography variant="h2">Let's Book A {bedType} Room</Typography>
        </Grid>
            
        <Grid  container justify="center" item xs="12">
            <Typography>Want A<Link to ="/home" color="primary">Different Room</Link> </Typography>
        </Grid>
            
        </Grid>
    );
};

export default Book;