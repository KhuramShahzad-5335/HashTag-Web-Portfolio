/* eslint-disable react/no-unescaped-entities */
function ECommerce() {
  return (
    <div id="ecom__sec__wrapper">
      <div id="ecom__sec__left__side">
        <img src="./ecom_banner.png" alt="Ecommerce Section Banner Image" id="ecom__sec__banner__img"/>
      </div>
      <div id="ecom__sec__right__side">
        <h1 id="ecom__sec__subheading">E Commerce</h1>
        <h3 id="ecom__sec__mainheading">E-Commerce</h3>
        <p id="ecom__sec__desc">
          E-Commerce Is An Incredibly Powerful Method For Driving Sales In Your
          Business. Consider This: There Are 226 Million Users On Facebook, A
          Staggering 2 Billion On Instagram, 1 Billion Actively Engaged On
          TikTok, And A Significant 875 Million Professionals On LinkedIn.
          Ignoring E-Commerce Means Bypassing Billions Of Potential Customers,
          And I'm Sure You Don't Want To Miss Out On.
        </p>
        <button  id="ecom__sec__cta__button" onClick={() => alert("Ruko zara sbr kro")}>Read More</button>
      </div>
    </div>
  );
}

export default ECommerce;
