import {
  useScrollPosition
} from "@docusaurus/theme-common";
import { useRef, useState } from "react";


const useBannerTranslate = () => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [navCollapse, setNavCollpase] = useState(false)
  const [translate, setTranslate] = useState(0)
  useScrollPosition(({scrollY}, lastPosition) => {
    if(!bannerRef.current) return
    const translate = scrollY / 5
    if(translate >= 64) {
      bannerRef.current.style['transform'] = `translate3d(0px, 64, 0px)`
      setTranslate(64)
    } else {
      bannerRef.current.style['transform'] = `translate3d(0px, ${translate}px, 0px)`
      setTranslate(translate)
    }
    if(scrollY > 50) {
      setNavCollpase(true)
    } else {
      setNavCollpase(false)
    }
  })

  return { bannerRef, navCollapse, translate}
}

export default useBannerTranslate