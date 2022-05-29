let offset = 0;
///Cortar
const previous = document.querySelector('.buffer__previous');
const next = document.querySelector('.buffer__next');

next.addEventListener('click', () => {
    offset += 20;
    pokemonLoad();
});
previous.addEventListener('click', () => {
    offset -= 20;
    pokemonLoad();
});
/// cortar

export const pokemonLoad = async () => {
    try {
        const find = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
        );
        const data = await find.json();
        let pokemons = '';
        data.results.forEach((pokemon) => {
            let regex = /(\d+)/g;
            let id = pokemon.url.match(regex);
            id = id[1];
            pokemons += `
            <div class="mini">
    <img
        class="pic"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="sprite"
    />
</div>
            <a href="./detalle.html"><h3>${pokemon.name}</h3></a>`;
        });

        document.querySelector('.buffer').innerHTML = pokemons;
    } catch (error) {
        console.log(error);
    }
    pokemonCounter();
};
function pokemonCounter() {
    let pokemonCounter = offset + 20;
    let counter = `<div><p>Pokemons: ${pokemonCounter}/1000</p></div>`;
    document.querySelector('.counter').innerHTML = counter;
}
pokemonLoad();
