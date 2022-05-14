import React, { type ComponentProps } from "react";
import clsx from "clsx";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import type { Props } from "@theme/Navbar/Layout";
import {
  useThemeConfig,
  useHideableNavbar,
  useNavbarMobileSidebar,
  useScrollPosition
} from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import useBannerTranslate from "@site/src/components/hooks/useBannerTranslate";
function NavbarBackdrop(props: ComponentProps<"div">) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  // const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const {bannerRef, navCollapse} = useBannerTranslate()
  return (
    <div className={clsx(styles.navbarWrapper)}>
      <nav
        // ref={navbarRef}
        className={clsx(
          "navbar",
          "navbar--fixed-top",
          {
            'navbar--collpase': navCollapse
          },
          // hideOnScroll && [
          //   styles.navbarHideable,
          //   !isNavbarVisible && styles.navbarHidden,
          // ],
          {
            "navbar--dark": style === "dark",
            "navbar--primary": style === "primary",
            "navbar-sidebar--show": mobileSidebar.shown,
          }
        )}
      >
        {children}
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
      </nav>
      <div className={styles.banner} ref={bannerRef}>
        <div>

        </div>
      </div>
    </div>
  );
}
