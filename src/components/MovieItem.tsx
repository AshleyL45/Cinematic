import * as React from 'react';
import {FC} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import '../pages/B_body/dashboard.css'
// @ts-ignore
import {MovieItem as MovieType} from "../@types/movieItem"

const MovieItem: FC<{ movie: MovieType }> = ({movie}) => {
    return (
        <Card className="card-container" sx={{maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia
                component="img"
                height="auto"
                sx={{objectFit: 'cover', flexGrow: 1}}
                image={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt={movie.title}
                title={movie.original_title}
            />
        </Card>
    );
};

export default MovieItem;
