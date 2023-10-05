import CommonBanner from '../../components/CommonBanner/CommonBanner'
import CommonSection from '../../components/CommonSection/CommonSection'
import FilterProjects from '../../components/FilterProjects/FilterProjetcs';

const Projects = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Our Projects" />
      <FilterProjects />
      <CommonSection />
      
    </>
  )
}

export default Projects