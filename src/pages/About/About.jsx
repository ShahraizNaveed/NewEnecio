import "./About.css"
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import AboutHome from '../../components/AboutHome/AboutHome'
import Clients from '../../components/Clients/Clients'
import PassionBanner from '../../components/PassionBanner/PassionBanner'
import QualityStandards from '../../components/QualityStandards/QualityStandards'
import Testimonials from '../../components/Testimonials/Testimonials'

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="About US" />
      <AboutHome hide="true" />
      <QualityStandards />
      <Clients hide="true" />
      {/* <PassionBanner /> */}
      <Testimonials />
    </>
  )
}

export default About