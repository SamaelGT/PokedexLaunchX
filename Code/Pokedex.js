//Imagen Pokemon
const fetchPokemon = () => {
    const Pokename = document.getElementById("Pokename");
    let pokeInput = Pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage("../Image/pikachu_cry.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        console.log(data)
    })
}

//fetchPokemon();
const pokeImage = (url) => {
    const Pball = document.getElementById("Pball");
    Pball.src = url;
}

//Numero 
const pokeImage = (url) => {
    const Pball = document.getElementById("NPoke");
    Pball.src = url;
}