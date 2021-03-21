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

    if (Data.SponsorImage) {
        return (
            <a href={Data.SponsorUrl} target="_blank">
                <CardMedia
                    className={classes.image}
                    image={Data.SponsorImage}
                    title={Data.SponsorName}
                />
            </a>
        )
    } else {
        return (
            <a href={Data.SponsorUrl || null} target="_blank">
                <h1 className="sponsorTitle">{Data.SponsorName}</h1>
            </a>

        )
    }
};