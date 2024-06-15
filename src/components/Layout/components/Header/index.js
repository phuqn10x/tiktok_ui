import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tippy from "@tippyjs/react/headless"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import "tippy.js/dist/tippy.css"
import images from "~/assets/images"
import styles from "./Header.module.scss"
import { Wrapper as PopperWrapper } from "~/components/Popper"
const cx = classNames.bind(styles)

function Header() {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    console.log("test")
    setTimeout(() => {
      setSearchResult([1, 2, 3])
    }, 0)
  }, [])
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <PopperWrapper>
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                ket qua
              </div>
            </PopperWrapper>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}></div>
      </div>
    </header>
  )
}

export default Header
