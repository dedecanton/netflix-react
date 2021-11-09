import React, { useEffect, useState } from 'react';
import Tmdb from './components/Tmdb/';
import MovieRow from './components/MovieRow/';
import FeaturedMovie from './components/FeaturedMovie/';
import Header from './components/Header/';
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {

      // get movies list
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // featuredMovie
      let originals = list.filter(items => items.slug === 'originals')
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      <Header/>

    {featuredData && 
      <FeaturedMovie item={featuredData}/>
    }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>

    </div>
  )

}