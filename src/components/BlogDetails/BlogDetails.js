import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import Comments from '../comments/Comments';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    postBody: {
        marginBottom: theme.spacing(15),
        fontSize: '1.2rem'
    },
    
}));

const BlogDetails = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    // console.log(postId);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(posts => setPost(posts))
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(comments => setComments(comments))
    }, [])
    return (
        <div>
            <h1>Blog Details Page</h1>
            <hr />
            <Box m={5} justifyContent="center" color="text.primary">
                 <Typography variant="h4" color="primary" component="h4" gutterBottom>
                    {post.title}
                </Typography>
                <hr/>
                <Typography className={classes.postBody} variant="body2" component="p">
                    {post.body}
                </Typography>


                <Typography variant="h4" component="h4" gutterBottom>
                    All Comments :
                </Typography>
                <hr/>
                {
                    comments.map(comment => <Comments key={comment.id} comment={comment} /> )
                }
            </Box>

        </div>
    );
};

export default BlogDetails;