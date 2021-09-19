import blogcard1 from "assets/images/blogcard1.jpeg";
import blogcard2 from "assets/images/blogcard2.jpeg";
import blogcard3 from "assets/images/blogcard3.jpeg";
import blogcard4 from "assets/images/blogcard4.jpeg";
import blogcard5 from "assets/images/blogcard5.jpeg";
import blogcard6 from "assets/images/blogcard6.jpeg";
import BlogCard from "components/BlogCard";
import PageContentRow from "components/Styles/PageContentRow";
import PageTitle from "components/Styles/PageTitle";
import React from "react";

const Blog = () => (
  <div class="Blog">
    <PageTitle>Blog</PageTitle>
    <PageContentRow>
      <BlogCard
        cover={blogcard1}
        date="Jan 20"
        category="News"
        title="Final Episode Now Released"
        link="https://sailormoon.fandom.com/wiki/Sailor_Moon_Wiki"
      ></BlogCard>
      <BlogCard
        cover={blogcard2}
        date="Feb 20"
        category="News"
        title="Special Episode Now Released"
        link="https://sailormoon.fandom.com/wiki/5,000_Years_Kaguya_Island"
      ></BlogCard>
      <BlogCard
        cover={blogcard3}
        date="Mar 20"
        category="Sports"
        title="Ranked First in Final Round"
        link="https://sailormoon.fandom.com/wiki/A_Ray_of_Light"
      ></BlogCard>
      <BlogCard
        cover={blogcard4}
        date="Apr 20"
        category="Dance"
        title="Ballet Among The Flowers"
        link="https://sailormoon.fandom.com/wiki/In_Love_with_Waltz"
      ></BlogCard>
      <BlogCard
        cover={blogcard5}
        date="May 20"
        category="Fight"
        title="Flying To Moon Kingdom"
        link="https://sailormoon.fandom.com/wiki/A_Lenda_do_Luar"
      ></BlogCard>
      <BlogCard
        cover={blogcard6}
        date="Jun 20"
        category="Fight"
        title="In The Name Of The Moon"
        link="https://sailormoon.fandom.com/wiki/A_Chain_of_Thought"
      ></BlogCard>
    </PageContentRow>
  </div>
);

export default Blog;
