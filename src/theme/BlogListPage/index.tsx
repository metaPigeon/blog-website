import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import type { Props } from "@theme/BlogListPage";
import Layout from "@theme/Layout";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import SearchMetadata from "@theme/SearchMetadata";
import clsx from "clsx";
import BlogListItem from "@site/src/components/blogListItem";
import "./styles.scss";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  console.log(items, "items11");
  return (
    <Layout>
      <div className={"container"}>
        <div className={"board"}>
          <div className={"container"}>
            <div className="row">
              <div className="col-12 col-md-10 m-auto">
              {items.map(({ content: BlogPostContent }) => (
                <BlogListItem
                  key={BlogPostContent.metadata.permalink}
                  title={BlogPostContent.metadata.title}
                  tags={BlogPostContent.metadata.tags as any}
                  description={BlogPostContent.metadata.description}
                  date={BlogPostContent.metadata.date as any}
                  image={BlogPostContent.frontMatter.image}
                  permalink={BlogPostContent.metadata.permalink}
                >
                  {/* <BlogPostContent /> */}
                </BlogListItem>
              ))}
              <BlogListPaginator metadata={metadata} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
