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

import data from './CardData';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    image: {
        height: "15em",
    },
});

export default function FeaturedCard() {
    const classes = useStyles();

    return (
        <div className="Cards">
            {data.map((animal) => {
                return (<Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={animal.Image}
                            title={animal.Name}
                        />
                        <CardContent>
                            <h1 className="petName">{animal.Name}</h1>
                            <h3 className="petDetails">Breed: {animal.Breed}</h3>
                            <h3 className="petDetails">Age: {animal.Age}</h3>
                            <Sponsor
                            sponsor={animal}
                            />
                            <Avatars
                                data={animal}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="cardActions">
                        <FosterAdoptSponsorForm
                            title="Adopt"
                            name={animal.Name}
                        />
                        <FosterAdoptSponsorForm
                            title="Sponsor"
                            name={animal.Name}
                            buttonDisabled={animal.SponsorName ? true : false}
                        />
                        <FosterAdoptSponsorForm
                            title="Foster"
                            name={animal.Name}
                            buttonDisabled={animal.SponsorName ? true : false}
                        />
                    </CardActions>
                </Card>
                )
            })}
        </div>
    );
}