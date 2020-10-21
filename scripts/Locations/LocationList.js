import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {
  
  const contentElement = document.querySelector(".travel__locations")
  const locations = useLocation()


  let locationHTMLRepresentations = ""
  for (const location of locations) {

    locationHTMLRepresentations += Location(location)
  }


  contentElement.innerHTML += `
  <article class="locationList">
    ${locationHTMLRepresentations}
    </article>
    `
}