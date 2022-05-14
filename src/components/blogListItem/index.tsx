import React from "react";
import type { Metadata } from "@theme/BlogPostPage";
import Link from '@docusaurus/Link';
interface Iprops extends Metadata {
  image: string
}
//https://rmt.dogedoge.com/fetch/fluid/storage/hello-fluid/cover.png?w=480&fmt=webp

const BlogListItem = (props: Iprops) => {
  const { tags, date, title, description, image, permalink } = props;
  return (
    <Link to={permalink}>
    <div className={'row mx-auto index-card'}>
      <div className={'col-12 col-md-4 m-auto index-img'}>
        <img src={image} alt={title} />
      </div>
      <div className={'col-12 col-md-8 mx-auto index-info'}>
        <h1 className="index-header">{title}</h1>
        <div className="index-excerpt">{description}</div>
        <div className="index-btm post-metas">
          <div className="post-meta mr-3">
            <i className="iconfont icon-date"></i>
            <time dateTime="2020-04-22 22:22">{date}</time>
          </div>
          <div className="post-meta">
            <i className="iconfont icon-tags"></i>
            {
              tags.map(tag => {
                return <a href={tag.permalink}>#{tag.label}</a>
              })
            } 
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogListItem;
