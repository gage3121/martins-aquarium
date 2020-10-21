export const Tip = (tip) => {
    return `
        <section class="tip card">
            <div><img class="tip__name"${tip.fish}</div>
            <div class="tip__tank">${tip.tank}</div>
            <div class="tip__salinity">${tip.salinity}</div>
            <div class="tip__temperature">${tip.temperature}</div>
        </section>
    `
}