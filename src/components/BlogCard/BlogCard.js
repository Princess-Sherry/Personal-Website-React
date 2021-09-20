import {
    BlogCardWrapper,
    BlogCardCover,
    BlogCardDate, BlogCardLink, BlogCardTitle,
    BlogCardType
} from "./styles";

const BlogCard = ({cover, date, category, title, link}) => (
  <BlogCardWrapper>
    <BlogCardCover cover={cover}>
      <BlogCardDate>{date}</BlogCardDate>
    </BlogCardCover>
    <BlogCardType>{category}</BlogCardType>
    <BlogCardTitle>
      <BlogCardLink href={link} target="_blank">{title}</BlogCardLink>
    </BlogCardTitle>
  </BlogCardWrapper>
);

export default BlogCard;
