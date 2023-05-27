import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x={24}
      y={24.5}
      width={24}
      height={24}
      transform="rotate(-180 24 24.5)"
      fill="url(#pattern0)"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_159_399" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_159_399"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAALxAAAC8QGtF8mjAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAASZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOcJQFAAAAGF0Uk5TAAECAwQFBwgKDBETGRscIiQlJicoKi0vMDQ3ODw9QEFCSU1OU1pdbG1vcHN4f4GJioyNj5CUlp2foKmtr7S1trm+wMPGyszNz9DR1NfZ2tvd3uDi4+Tl5ufo7O/w9fr9/tKoTlkAAAGnSURBVFjD7dbZUsIwFAbgiisqi1JQXMB930BcUVFRBFRwF8GF//1fwgtLk5akOXXGC2f6X3ZyvmmSk6aa1js27pB4l6bIXB2OeZqwDA/pgzbgGoocc4OjZaB50mMBVPV44AbvAQAWfg+UAAAZC3ClArIKYPrRuf4mrgC0zojukLBlrBBwEw/4IyCQLpYkKaz3E4BDpy7aJACfTkCFAJAPkgxoOAFFApB2ApYIgG9mOyNJKuG18r8BYssrgiyGqMCapIe+5onAq6wLL4gA+SDJgKYMuCcCORmwSwSi2ca7IPWDoNfKHuACEHyVU0k3gPBeWHUBNJQ30vBRfccvACI/z5VHeegFQN7fBug1AOd94tu5ygGXgClwgF4DAGyJ/w/SrD5sPMr7LYBRj2fRH0phY4DbpTtOMIFWPfbVe5/8YEILMOurAUL3TDHBAFh9kNR/TKgAAHIu6znBtlfUeongol4omPXdI6NcYj6iYNbP1mxdPEkS2PuX7a92SpkFN/+2ub0R1oFfPzrABMv6k6fABOv+UReRCfb9p22jkcQtztz0T3s67OXfIc8IKEeGzxEAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
export default SVGComponent;
