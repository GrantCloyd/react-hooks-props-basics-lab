import React from "react"

function Links({ links }) {
   return (
      <>
         <h3>Links</h3>
         <a href={links.github} className="href">
            {links.github}
         </a>
         <a href={links.linkedin} className="href">
            {links.linkedin}
         </a>
      </>
   )
}

export default Links
