import React from 'react'
import TopBar from "../components/top-bar/index.jsx"
import MainBlock from '../components/main-block/index.jsx'
import NavCardBlock from '../components/nav-card-block/index.jsx'
import PopularBlogs from '../components/popular-blogs/index.jsx'
import PhotoAlbum from '../components/photo-album/index.jsx'
import AboutMe from '../components/about-me/index.jsx'

export default function Home() {
  return (
    <div>
      <TopBar/>
      <MainBlock/>
      <NavCardBlock/>
      <PopularBlogs/>
      <PhotoAlbum/>
      <AboutMe/>
    </div>
  )
}
