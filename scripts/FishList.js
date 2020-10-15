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
  const fishes = useFish()


  contentElement.innerHTML += `
  <article class="fishList">
    All the fish go here!
    </article>
    `
}