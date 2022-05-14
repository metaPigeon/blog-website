import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";

import type { Props } from "@theme/BlogLayout";
import useBannerTranslate from "@site/src/components/hooks/useBannerTranslate";
export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  console.log(sidebar, children, "jksdlf");
  // const {translate} = useBannerTranslate()
  return (
    <Layout {...layoutProps}>
      <div style={{position: 'relative', display: 'flex'}}>
        <div className="col-lg-2">

        </div>
      <div className={"container"}>
        <div className={"board"}>
            <div className="row">
            <div className="col-12 col-md-10 m-auto">
              {/* <main
                className={clsx("col", "bloglistpage", {
                  "col--7": hasSidebar,
                  "col--9 col--offset-1": !hasSidebar,
                })}
                itemScope
                itemType="http://schema.org/Blog"
              > */}
                {children}
                </div>
              {/* </main> */}
              
            </div>
          </div>
          
      </div>
      {toc && <div className="col--2 toc col-lg-2" style={{paddingTop: 14}}>{toc}</div>}
      </div>
    </Layout>
  );
}
