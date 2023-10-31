/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function MarkServPageHero() {
  return (
    <div id = "markservice__page__wrapper">
        <h1 id="ecom__hero__main__heading">Tell Your Brand Story</h1>
        <Link type="button" id="ecom__hero___main_cta" onClick={() => alert("will add later")}>Let's Get Social</Link>
    </div>
  )
}

export default MarkServPageHero;