import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


import Data from './CardData';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    image: {
        height: "15em",
    },
    sponsor: {
        height: "5em",
    },
    avatar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
});


export default function FeaturedCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.image}
                    image={Data.Image}
                    title={Data.Name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {Data.Name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Breed: {Data.Breed}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age: {Data.Age}
                    </Typography>
                    <a href={Data.SponsorUrl} target="_blank">
                    <CardMedia
                        className={classes.sponsor}
                        image={Data.SponsorImage}
                        title={Data.SponsorName}
                    />
                    </a>
                    <div className={classes.avatar}>
                        <Avatar alt="Good with other dogs" src="../../Assets/Icons/Dog.svg" title="good" />
                        <Avatar alt="Good with cats " src="../../Assets/Icons/Cat.svg" />
                        <Avatar alt="Good with children" src="../../Assets/Icons/Child.svg" />
                    </div>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" href="#contained-buttons" size="large">
                    Adopt
                </Button><Button variant="contained" color="primary" href="#contained-buttons">
                    Sponsor
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Voster
                </Button>
            </CardActions>
        </Card>
    );
}