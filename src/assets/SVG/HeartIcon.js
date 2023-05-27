import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h50v50H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFG0lEQVR4nO2dyYtdRRjFqx1xDnFs0/Ls9+qcel6wQVoTJ+y/ICIoooKgJpsE0YVgOxNQHBYOm6hRHJq4UHThQlHULJwWAYPGKQYVCRpURERN2hjtvvJ1roskHdKvu+pW1bvfD87mLd77Tp071vSMURRFURRFURRFURRFURRFSRlr7ZEkLyK5EsBDJNcBeJHkBIC1JG+11i5vt9un1FWT/JZz7lKS41UNE1VN66oaVzrnLpTaTT/QbrdPILmC5NskJ0mWc9A0yY8B3NHpdM7wXZN8J4A7SX5S/dZcatpJ8i3n3A3W2uNNblhrhwA8Vhkp5ysAu0k+6SMY+Y7qyN+9wJp2AHgUwBKTyWXp7h7OhrlqF4BHBgcHj+61ppGRkWOkAeU7PNe0U860oiiOMCkC4CwAn3k2Xe5zdG7pdrujc63JOXcugK8C17SZZNekBMnL5FQOaZx7X8ZWH6wmADcu9PLUQ01/ysOBSQFr7fUk/63DOPfW/caYgVlKGqiekGqtB8A/AK4zMSF5JcmpCGGUVSOsnSWMJ2LVIwemc+6KKGF0Op0LAPwd0XxZ6b7/a5KzJoF65AFkaa1hFEWxmOS2BMyX1ZlytbX2moTq+a7Vai2qLRCSz8Y2zf3fDXYkVtPTtYQhXQk9vOE2WVMAlgUPBMCGBMyWOQjAm6HDWBrbJDNTLy+yPSN9QbENMjMBeDxIGNJnQ/K32AaZmQD8Ojo6erj3QABcEtscM5U8CHkPhOQ9sY0xU0mvcIhAXoltjJkKwEveAwndtd7PArA5RCC/xDbGfPWz90ACjLg1SZMaCJPSLu+BAPgxAWNljgKwPcQZ8kVsY8xU8kDkPRAA78c2xnz1bohA1idgrMxUE94Dcc7dnICxMkfJDBjvgVTzcqObY4ay1p7vPRCZARhpuk+Zs2Ru2NDQ0FEmBHJzim2QmUlGWE0oANwU2yDz0+qQgSzRCQ7sJYwp59zpwQKpQvkwgaOubOz7x76QvDYBo2UOkgl8wQOR8WGS38c2y/T1Q5Cx9NmoloTFNlwmrnFTFyRPkjURCZguUxSAP2T+s6kTAGtiG2eiAnCXqZuiKI7VMRLOFsZ26dUwMSC5KvbRyPS0wsRibGzssGq9d+xGKBPRJmPMoSYmJM/TTkfOrDEMOrG6FwA8nMDRWcYUgAdMKsiCfpLfNjiMrcG62Bdy6aprXTgTkngOMgDlAwC3NzCQW0zCHCK75jQojDcOsHlBOgwPD5/akM7Hbdbak00OWGvPWejWTExbk7KxjckJ2WKiT0cXpwFcZXIkka0uSs+612TMAMnnEmjE0ocAvJD8TfxgyKiZLKDvgzDeSXb3uF5xzh0H4KPYjcr5a2O0LvXAo4zZrVME8Gm32z3R9COyTy7JLzMKY2tRFKeZfka2kM2kI/Lr4JPcUqHb7Q6mfPkCsEUOHNMkql3pNsZufO6vTdl0iYTYihzABwmEUFZ6T2oyTUYGt1J4TwGwQWbSxG6PJJAXLgAvRwzj1b75BwSfM1gAPBMhkKeizxRJGbdncelUTb22a2L7zQJr7eWBx1P+qmWpQD8BYBnJnwLcL2RXo4tj+8sSksOet/T43Dl3ZmxfWdNqtRaRfN1DGK81/h3D80DX+Dxv9nLzflBmxPgsSDEzN/vlJH/v8Y9W4vx9RFNwzjnp/JtDIN84586OXW9jOiaxZ3ei6QNcotbXvqRMMTNnC8nbSD5faVw+07ZRFEVRFEVRFEVRFEVRFMU0jf8AcIK8HDe+bN8AAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgComponent;
