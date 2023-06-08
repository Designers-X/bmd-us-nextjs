import React from 'react'
// import styles from '@/styles/Home.module.css'
import MarkqueCarousel from '@/utilities/MarkqueCarousel'
import { WistiaHero } from '@/utilities/WistiaHero'
import Cards from '@/utilities/CategoriesCards'
import TrustBadge from '@/utilities/TrustBadges'
import Purpose from '@/utilities/Purpose'
import { HomeGallery } from '@/utilities/HomeGallery'
import { NewsLetter } from '@/utilities/NewsLetter'
import PatnerData from "../../json/parters.json"
import TrustBadgeData from '../../json/trustBages.json'
import HomePageData from '../../json/home.json'
import SEO from '../../json/SEO.json'
import PageHead from '@/utilities/Head'

export default function Home() {
  return (
    <>
      <section>
        <PageHead content={SEO.home.SEO}/>
        <WistiaHero id={HomePageData.wistia.id} content={HomePageData.wistia.content} />
        <MarkqueCarousel image={PatnerData} />
        <Cards contents={HomePageData.categories} />
        <TrustBadge contents={TrustBadgeData} />
        <Purpose contents={HomePageData.purpose} />
        <HomeGallery id={HomePageData.homeGallery}/>
        <NewsLetter content={HomePageData.newsletter}/>
      </section>
    </>
  )
}
