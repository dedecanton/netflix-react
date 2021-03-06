import React, { useEffect, useState } from 'react';
import Tmdb from './components/Tmdb/';
import MovieRow from './components/MovieRow/';
import FeaturedMovie from './components/FeaturedMovie/';
import Header from './components/Header/';
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {

      // get movies list
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // featuredMovie
      let originals = list.filter(items => items.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);


  useEffect(() => {
    const scrollListener = () => window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>

      <footer>
        Feito por André Canton<br />
        Direitos de imagem para Netflix<br />
        Dados pegos do site Themoviedb.org<br />
      </footer>

      {movieList.length <= 0 &&
        < div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' />
        </div>
      }
    </div >
  )

}