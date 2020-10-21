const locationCollection = [
    {
        name: "Australia",
        image: "http://www.technocrazed.com/wp-content/uploads/2015/09/Towering-Cliffs-And-Colorful-Reefs-Mesmerize-You-With-Beauty-Of-Australian-Coast-139.jpg",
        geo: "Off the coast of Sydney"
    },
    {
        name: "Japan",
        image: "https://i.pinimg.com/originals/cb/c9/0d/cbc90df5eaefa932962e238b75d9c91d.jpg",
        geo: "Off the coast near Miyazaki"
    },
    {
        name: "California",
        image: "https://www.californiabeaches.com/wp-content/uploads/2017/05/bigs-dog-at-north-baker-beach-with-Golden-Gate-Bridge-behind-06-Large.jpg",
        geo: "Off the coast near San Francisco"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}