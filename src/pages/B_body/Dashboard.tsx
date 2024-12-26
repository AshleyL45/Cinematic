import React, {FC, useEffect, useState, useTransition} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Utilisez Grid standard
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress'; // Importez CircularProgress
import MovieItem from "../../components/MovieItem";
import Pages from "../../components/layout/Pages";
import {get} from "../../API/api";
import './dashboard.css';
import {Collection, Movie} from '../../@types/movie'; // Assurez-vous que le chemin est correct

const Dashboard: FC = () => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const [isPending, startTransition] = useTransition();

    const hydrateCollection = (page: number) => {
        startTransition(() => {
            get(`/movie/popular?page=${page}`)
                .then((result: Collection) => {
                    setMovieCollection(prev => {
                        if (prev && page > 1) {
                            return {
                                ...result,
                                results: [...prev.results, ...result.results]
                            };
                        } else {
                            return result;
                        }
                    });
                    setCurrentPage(page);
                    console.log("result", result);
                })
                .catch(error => {
                    console.error("Failed to fetch movies", error);
                });
        });
    };

    useEffect(() => {
        hydrateCollection(1);
    }, []);

    const loadMore = () => {
        hydrateCollection(currentPage + 1);
    };

    return (
        <>
            {movieCollection ? (
                <Pages title={"Dashboard"}>
                    <Box
                        className="box-card"
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh" // Assure que le conteneur occupe toute la hauteur de la vue
                    >
                        <Grid container spacing={5} flexGrow={1}>
                            {movieCollection.results.map((item: Movie) => (
                                <Grid
                                    key={item.id} // Assurez-vous que 'key' est sur le composant Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    sx={{display: 'flex'}}
                                >
                                    <MovieItem movie={item}/>
                                </Grid>
                            ))}
                        </Grid>
                        {/* Bouton pour charger plus de films */}
                        {currentPage < movieCollection.total_pages && (
                            <Box
                                display="flex"
                                justifyContent="center"
                                mt={4}
                                mb={4} // Ajoutez une marge inférieure pour un meilleur espacement
                            >
                                <Button className="button-container"
                                    variant="contained"
                                    onClick={loadMore}
                                    disabled={isPending}
                                >
                                    {isPending ? <CircularProgress size={24} color="inherit"/> : 'Charger Plus'}
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Pages>
            ) : (
                // Optionnel: Afficher un indicateur de chargement initial
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress/>
                </Box>
            )}
        </>
    );
};

export default Dashboard;
