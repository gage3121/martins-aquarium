import { useTip } from './TipDataProvider.js'
import { Tip } from './Tip'


export const TipList = () => {
  
    const contentElement = document.querySelector(".contentContainer__right")
    const tips = useTip()
  
  
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
  
      tipHTMLRepresentations += Tip(tip)
    }
  
  
    contentElement.innerHTML += `
    <article class="tipList">
      ${tipHTMLRepresentations}
      </article>
      `
}