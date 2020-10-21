import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"


const buildFishContainerHTML = (arrayOfFish) => {
  
  let fishHTMLRepresentations = ""
  for (const fish of arrayOfFish) {

    fishHTMLRepresentations += Fish(fish)

  }

  return fishHTMLRepresentations
}


export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")


  const holyFishes = mostHolyFish()
  console.log(holyFishes)

  const holyFishHTML = buildFishContainerHTML(holyFishes)
  console.log(holyFishHTML)

  
  const soldierFishes = soldierFish()
  const soldierFishHTML = buildFishContainerHTML(soldierFishes)

  
  const regularFishes = nonHolyFish()
  const regularFishHTML = buildFishContainerHTML(regularFishes)

  

  
  contentElement.innerHTML += `
  <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
      ${holyFishHTML}
      ${soldierFishHTML}
      ${regularFishHTML}
    </div>
  </section>
`
}