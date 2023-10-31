/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function AbtHashTagWebSec() {
  return (
    <div id="ecom__page__hero__container_abt">
      <h1 id="ecom__hero__main__heading_abt">Let Success Your Brand Digitally</h1>
      <p id="ecom__hero__main__para_abt">
        HashtagWeb specializes in product solution & development. We specialised
        in Idea prototyping, MVP development, custom software solutions. We put
        a strong focus on the needs of your business to figure out solutions
        that best fits your goal and get it done.
      </p>
      <Link
        type="button"
        id="ecom__hero___main_cta"
        onClick={() => alert("will add later")}
      >
        Let's Make Your Own Brand
      </Link>
    </div>
  );
}

export default AbtHashTagWebSec;
