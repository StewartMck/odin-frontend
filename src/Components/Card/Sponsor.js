import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Data from './CardData';

const useStyles = makeStyles({
    image: {
        height: "10em",

    },
});

export default function Sponsor(props) {
    const classes = useStyles();

    if (props.sponsor.SponsorImage) {
        return (
            <>
            <div class="text-divider">Sponsored By</div>
            <a href={props.sponsor.SponsorUrl} target="_blank">
                <CardMedia
                    className={classes.image}
                    image={props.sponsor.SponsorImage}
                    title={props.sponsor.SponsorName}
                />
            </a>
            <hr class="text-divider-end"/>
            </>
        )
    } else {
        return (
            <>
            <div class="text-divider">Sponsored By</div>
            <a href={props.sponsor.SponsorUrl || null} target="_blank">
                <h1 className="sponsorTitle">{props.sponsor.SponsorName || `Please sponsor me`}</h1>
            </a>
             <hr class="text-divider-end"/>
            </>
        )
    }
};