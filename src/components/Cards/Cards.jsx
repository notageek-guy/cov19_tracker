import React from 'react'
import {
    Card,CardContent,Typography, Grid
}
from "@mui/material";

import CountUp from 'react-countup';
import cx from "classnames"
import styles from "./Card.module.css"


const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item component={Card} xs={12} md={10} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Total Infected</Typography>
                        <Typography variant='h5' >
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={10} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Total Deaths</Typography>
                        <Typography variant='h5' >
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;