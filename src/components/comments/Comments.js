import React, {useState,useEffect} from 'react';
import './comments-style.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 175,
        marginBottom:'1rem',
        display: 'flex'
    },
    img:{
        height:'5rem',
        width:'5rem',
        borderRadius:'100%',
        padding:'1rem'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
   
});


const Comments = (props) => {
    const classes = useStyles();
    const {name, email, body} = props.comment;

    const [image, setImage] = useState({})
    useEffect(() => {
       fetch('https://randomuser.me/api/?results=1')
       .then(response => response.json())
       .then(imageData => imageData.results.map(img => setImage(img.picture.medium)))

    }, []);

    

    return (
        <>
            <Card className={classes.root}>
                <img className={classes.img} src={image} alt=""/> 
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {email}
                     </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Comments;