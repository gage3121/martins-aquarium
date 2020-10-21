const tipCollection = [
    {
        fish: "Blobfish",
        tank: "Per the conditions of the tank no cleaning is necessary because things like vegetation simply can't survive.",
        salinity: "35 PPT or 35 parts salt for every 1,000 parts water.",
        temperature: "Slightly above freezing at 36 degrees F"
    },
    {
        fish: "Lionfish",
        tank: "Be very careful as the lionfish has venomous spines but clean the tank regularly.",
        salinity: "35PPT",
        temperature: "They prefer a water temperature of around 17.5 degrees C or 63 degrees F.",
    },
    {
        fish: "Moon Jellyfish",
        tank: "Jellyfish are sensitive to rapid changes in salinity, temperature, pH, etc. Therefor their tanks must be cleaned and maintained regularly in order to keep them safe and happy.",
        salinity: "35PPT",
        temperature: "Moon Jellyfish need a water temperature of about 19 degrees C or 66 degrees F."
    }
]

export const useTip = () => {
    return tipCollection.slice()
}