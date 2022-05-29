const detailPokemon = async () => {
    try {
        const find = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await find.json();
        console.log(find);
        let pokemons = '';
        data.results.forEach((pokemon) => {
            pokemons += `
            <div class="max">
    <img
        class="pic"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="sprite"
    />
</div>
            <a href="./detalle.html"><h3>${pokemon.name}</h3></a>`;
        });

        document.querySelector('.card').innerHTML = pokemons;
    } catch (error) {
        console.log(error);
    }
};
detailPokemon();
