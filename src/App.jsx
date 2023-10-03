import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Products from './pages/Products/Products';
import SingleBlogPage from './pages/SingleBlogPage/SingleBlogPage';
import SingleProjectPage from './pages/SingleProjectPage/SingleProjectPage';
import AllProductsPage from './pages/ProductCategoryPage/AllProductsPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/projects/:id' element={<SingleProjectPage />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:category' element={<AllProductsPage />} />
          <Route exact path='/products/:category/:id' element={<SingleProductPage />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/blog/:blogId' element={<SingleBlogPage />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  )
}

export default App
