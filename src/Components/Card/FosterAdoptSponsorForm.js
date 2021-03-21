import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FosterAdoptForm(props) {

    const getCurrentDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        return today.getFullYear() + '-' + (month <= 10 ? ('0' + month) : month) + '-' + today.getDate();
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained" color="primary" href="#contained-buttons" size="medium"
                disabled={props.buttonDisabled && props.title === 'Sponsor'}
                onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>I want to {props.title} {props.name}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="name"
                        label={props.title === 'Sponsor' ? "Full Name or Business Name" :
                            "Full Name"}
                        type="text"
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        margin="dense"
                    />
                    {props.title !== 'Sponsor' &&
                    <TextField
                        id="availability"
                        label="Availability"
                        defaultValue={getCurrentDate()}
                        type="date"
                        fullWidth
                        margin="dense"
                    />
                }
                    {props.title === 'Sponsor' &&
                        <TextField
                            id="sponsorUrl"
                            label="Business Website"
                            type="url"
                            fullWidth
                            margin="dense"
                        />
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}