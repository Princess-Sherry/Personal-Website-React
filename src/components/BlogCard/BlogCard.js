import {
    BlogCardWrapper,
    BlogCard__cover,
    BlogCard__date, BlogCard__link, BlogCard__title,
    BlogCard__type
} from "./styles";

const BlogCard = ({cover, date, category, title, link}) => (
  <BlogCardWrapper>
    <BlogCard__cover cover={cover}>
      <BlogCard__date>{date}</BlogCard__date>
    </BlogCard__cover>
    <BlogCard__type>{category}</BlogCard__type>
    <BlogCard__title>
      <BlogCard__link href={link} target="_blank">{title}</BlogCard__link>
    </BlogCard__title>
  </BlogCardWrapper>
);

export default BlogCard;
