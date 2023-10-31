/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function EComSerHeroSec() {
  return (
    <div id = "ecom__page__hero__container">
        <h1 id="ecom__hero__main__heading">Let Success Your Brand Digitally</h1>
        <Link type="button" id="ecom__hero___main_cta" onClick={() => alert("will add later")}>Let's Make Your Own Brand</Link>
    </div>
  )
}

export default EComSerHeroSec