const fishCollection = [
    {
        name: "Danny Devito",
        food: "Deep ocean crustaceans",
        species: "Psychrolutes marcidus",
        length: 8,
        location: "Australia",
        image: "https://unilaglss.files.wordpress.com/2013/09/1304072_bizarre-animals-blob-fish_jpg87187751d3467487bfa1c7b6de8410a5.jpg"
    },
    {
        name: "Leo",
        food: "Mostly crustaceans like crab and shrimp, but will also eat other small fish.",
        species: "Pterois volitans",
        length: 12,
        location: "Japan",
        image: "http://4.bp.blogspot.com/-qwzGOXIH_fU/UOJYAJ92PzI/AAAAAAAAWKg/vjGO00L09OI/s1600/Lionfish+3.jpg"
    },
    {
        name: "Luna",
        food: "Moon Jellyfish are carnivorous and primarily live on plankton, and other organisms like crustaceans, fish eggs and smaller jellies.",
        species: "Aurelia aurita",
        length: 13,
        location: "California",
        image: "https://vignette.wikia.nocookie.net/endlessocean/images/b/bd/Moon_jelly_3.jpg/revision/latest?cb=20150823035236"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    const holyFish = []
  
    for (const fish of fishCollection) {
      console.log(fish)
      console.log("What actually is the % doing? ", fish.name, fish.length % 3)
      if (fish.length % 3 === 0) {
        console.log(fish)
        holyFish.push(fish)
      }
    }
    console.log(holyFish)
    return holyFish
  }
  
  export const soldierFish = () => {
  
    const soldiers = []
  
    for (const fish of fishCollection) {
      if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
        soldiers.push(fish)
      }
    }
     console.log(soldiers)
     console.log("OG fish collection: ", fishCollection)
    return soldiers
  }
  
  export const nonHolyFish = () => {
    
  
    const regularFish = []
  
    for (const fish of fishCollection) {
      if(fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish)
      }
    }
    return regularFish
  }