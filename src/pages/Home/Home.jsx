import HomeBanner from '../../components/Banner/HomeBanner';
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
      <ProjectsSlider />
      <Team />
      <Clients hide="false"  />
      <AfterClientSection />
    </>
  )
}

export default Home