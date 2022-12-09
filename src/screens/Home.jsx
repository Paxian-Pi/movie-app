import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/banner.png'
import TextField from '../common/TextField'
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=a9ab7f9d';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchItem, setItem] = useState('')

    const prviousSearchedMovie = localStorage.getItem('searchTerm');

    useEffect(() => {
        // Load last searched movie, if any

        searchMovies(prviousSearchedMovie)
    }, [prviousSearchedMovie]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);

        const data = await response.json();

        console.log(data.Search);
        setMovies(data.Search);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
        >
            <div>
                <img className='img-fluid' style={{ width: '1440', height: '550px' }} src={banner} alt='Banner' />
                <h3 className='text-overlay'>Watch something incredible.</h3>
                <div className='m-5'>
                    <TextField
                        value={searchItem}
                        onChange={(e) => setItem(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                searchMovies(searchItem)
                                setItem('')
                                localStorage.setItem('searchTerm', searchItem)
                            }
                        }}
                    />
                </div>

                {/* {
                    movies.length > 0
                        ? (
                            <div>
                                {
                                    movies.map((movie) => {
                                        return <MovieCard key={movie.imdbID} mov={movie} />
                                    })
                                }
                            </div>
                        )
                        : (
                            <div className="empty">
                                <h2>No movies found</h2>
                            </div>
                        )
                } */}
                
                {
                    movies.length > 0 && prviousSearchedMovie != null
                        ? (
                            <div>
                                {
                                    movies.map(movie => {
                                        return (
                                            <div key={movie.imdbID}>
                                                <div className='text-start ms-5 mb-1'>{movie.Type}</div>
                                                <div className='row ms-5'>
                                                    <div className='movie-card me-3 mb-5'>
                                                        <div className='movie-title'>
                                                            {movie.Title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                        : (
                            <div className="empty">
                                <h2>Search for movies and press "Enter"</h2>
                            </div>
                        )
                }

            </div>
        </motion.div>
    )
}

export default Home