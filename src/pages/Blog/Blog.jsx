import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import BlogCard from '../../components/BlogCard/BlogCard'

const Blog = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Blogs" />
      <BlogCard />
    </>
  )
}

export default Blog