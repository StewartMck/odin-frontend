import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Avatars from './Avatars';
import Sponsor from './Sponsor';
import FosterAdoptSponsorForm from './FosterAdoptSponsorForm';

import Data from './CardData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
  },
    image: {
        height: "15em",
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
                    <h1 className="petName">{Data.Name}</h1>
                    <h3 className="petDetails">Breed: {Data.Breed}</h3>
                    <h3 className="petDetails">Age: {Data.Age}</h3>
                    <Sponsor />
                    <Avatars
                    data={Data}
                    />
                </CardContent>
            </CardActionArea>
            <CardActions className="cardActions">
                <FosterAdoptSponsorForm
                title="Adopt"
                name={Data.Name}
                />
                <FosterAdoptSponsorForm
                title="Sponsor"
                name={Data.Name}
                buttonDisabled = {Data.SponsorName ? true : false}
                />
                 <FosterAdoptSponsorForm
                title="Foster"
                name={Data.Name}
                buttonDisabled = {Data.SponsorName ? true : false}
                />        
            </CardActions>
        </Card>
    );
}