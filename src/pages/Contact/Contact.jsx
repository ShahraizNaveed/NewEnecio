import Map from '../../components/Map/Map'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import RequestQuote from '../../components/RequestQuote/RequestQuote';
import HaveSomeQuestions from '../../components/HaveSomeQuestions/HaveSomeQuestions';

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Contact US" />
      <HaveSomeQuestions />
      <RequestQuote />
      <Map />
    </>
  )
}

export default Contact