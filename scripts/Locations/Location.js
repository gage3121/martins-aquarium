export const Location = (location) => {
    return `
        <section class="location card">
            <div class="location__name">${location.name}</div>
            <div><img  class="location__image image--card" src="${location.image}" /></div>
            <div class="location__geo">${location.geo}</div>
        </section>
    `
}