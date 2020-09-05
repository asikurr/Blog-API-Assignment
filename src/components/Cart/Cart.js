import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: '10px'
    },
    title: {
        fontSize: '1.5rem',
    },
    pos: {
        marginBottom: 12,
    },
});

const Cart = (props) => {
    const classes = useStyles();
    const { id, title, body } = props.postData;
    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h1" color="primary" className={classes.title} gutterBottom>
                    {title.slice(0, 30)}
                </Typography>

                <Typography variant="body2" component="p">
                    {body.slice(0, 100)}

                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${id}`}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small">Read More
                    </Button>
                </Link>

            </CardActions>
        </Card>
    );
};

export default Cart;