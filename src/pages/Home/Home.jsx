import React from 'react'
import HomeBanner from '../../components/Banner/HomeBanner';
import Service from '../../components/Services/Service';
import AboutHome from '../../components/AboutHome/AboutHome';
import Team from '../../components/Team/Team';
import AfterClientSection from '../../components/AfterClientSection/AfterClientSection';
import Clients from '../../components/Clients/Clients';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <HomeBanner />
      <AboutHome hide="false" />
      {/* <Service /> */}
      <ProjectsSlider />
      <Team />
      <Clients hide="false"  />
      <AfterClientSection />
    </>
  )
}

export default Home