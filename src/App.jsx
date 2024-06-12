import { TVShowAPI } from "./api/tv-show"
import "./global.css"
import s from "./style.module.css"
import { useEffect, useState } from "react"
import {BACKDROP_BASE_URL} from "./config"
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail'
import {Logo} from './components/Logo/Logo'
import logo from "./assets/images/logo.png"
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem"
import { TVShowList } from "./components/TVShowList/TVShowList"
import { SearchBar } from "./components/SearchBar/SearchBar"

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendations, setReccomendationList] = useState([]);

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if(populars.length > 0) {
      setCurrentTVShow(populars[0])
    }
  }

  async function fetchRecommandations(TVShowId) {
    const recommendations = await TVShowAPI.fetchRecommandations(TVShowId);
    if(recommendations.length > 0) {
      setReccomendationList(recommendations.slice(0,10))
    }
  }

  function setCurrentTvShowFromRecommendation(tvShow) {
    alert(JSON.stringify(tvShow))
  }

  async function searchTVShow(tvShowName) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0])
    }
  }

  useEffect(() => {
      fetchPopulars()
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommandations(currentTVShow.id)
    }
  }, [currentTVShow]);

  return <div className={s.main_container} style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` :  "black"}}>
    <div className={s.header}>
      <div className="row">
        <div className="col-4">
          <Logo image={logo} title="Watowatch" subtitle="Find a show you may like"/>
        </div>
        <div className="col-sm-12 col-md-4">
          <SearchBar onSubmit={searchTVShow}/>
        </div>
      </div>
    </div>
    <div className={s.tv_show_detail}>{ currentTVShow && <TVShowDetail tvShow={currentTVShow}/> }</div>
    <div className={s.recommentations}>{recommendations && recommendations.length > 0 && (<TVShowList onClickItem={setCurrentTVShow} tvShowList={recommendations}/>)}</div>
  </div>
}
