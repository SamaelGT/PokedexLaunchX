//Imagen Pokemon
const fetchPokemon = () => {
    const Pokename = document.getElementById("Pokename");
    let pokeInput = Pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage("../Image/pikachu_cry.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let id = data.id;
            pokeID(id);
            console.log(id);
            let tipo = data.types.map(typ => typ.type.name);
            pokeTipo(tipo);
            console.log(tipo);
            let  Altura = data.height;
            pokeAltu(Altura);
            console.log(Altura);
            let  Peso = data.weight;
            pokePeso(Peso);
            console.log(Peso);
            let  Habilidades = data.abilities.map(ability => ability.ability.name);
            pokeHability(Habilidades);
            console.log(Habilidades);
            let  Movimientos = data.moves.map(moves => moves.move.name);
            pokeMovimientos(Movimientos);
            console.log(Movimientos);
            let hp = data.stats[0].base_stat;
            pokeHealtPoint(hp);
            console.log(hp);
            let Atk = data.stats[1].base_stat;
            pokeAtack(Atk);
            console.log(Atk);
            let Def = data.stats[2].base_stat;
            pokeDefense(Def);
            console.log(Def);
            let Satk = data.stats[3].base_stat;
            pokeSatk(Satk);
            console.log(Satk);
            let Sdef = data.stats[4].base_stat;
            pokeSdef(Sdef);
            console.log(Sdef);
            let Speed = data.stats[5].base_stat;
            pokeSpeed(Speed);
            console.log(Speed);
            let Back = data.sprites.back_default;
            pokeBack(Back);
            console.log(Back);
            let Name = data.name;
            pokeNN(Name);
            console.log(Name);
        }
    });
}


//fetchPokemon();
const pokeImage = (url) => {
    const Pball = document.getElementById("Pball");
    Pball.src = url;
}
const pokeID = (id) => {
    const identify = document.getElementById("pokeID");
    identify.innerHTML = (id);
}
const pokeTipo = (tipo) => {
    const tipos = document.getElementById("pokeTipo");
    tipos.innerHTML = ("Type: " + tipo);
}
const pokeAltu = (Altu) => {
    const Altura = document.getElementById("pokeAltu");
    Altura.innerHTML = ("Height:   " + Altu/10 + " m");
}
const pokePeso = (Peso) => {
    const peso = document.getElementById("pokePeso");
    peso.innerHTML = ("Weight:   " + Peso/10 + " Kg");
}
const pokeHability = (Habilidades) => {
    const Ability = document.getElementById("pokeHability");
    Ability.innerHTML = ("Hability: " + Habilidades);
}
const pokeMovimientos = (Movimientos) => {
    const Movim = document.getElementById("pokeMovimientos");
    Movim.innerHTML = ("Moves: " + Movimientos);
}
const pokeHealtPoint = (hp) => {
    const HP = document.getElementById("pokeHealt");
    HP.innerHTML = ("Hp: " + hp);
}
const pokeAtack = (Atk) => {
    const ATK = document.getElementById("pokeAtack");
    ATK.innerHTML = ("Atk: " + Atk);
}
const pokeDefense = (Def) => {
    const DEF = document.getElementById("pokeDef");
    DEF.innerHTML = ("Def: " + Def);
}
const pokeSatk = (Satk) => {
    const SATK = document.getElementById("pokeSatk");
    SATK.innerHTML = ("Satk: " + Satk);
}
const pokeSdef = (Sdef) => {
    const SDEF = document.getElementById("pokeSdef");
    SDEF.innerHTML = ("Sdef: " + Sdef);
}
const pokeSpeed = (Speed) => {
    const SPEED = document.getElementById("pokeSpeed");
    SPEED.innerHTML = ("Speed: " + Speed);
}
const pokeBack = (Back) => {
    const BACK = document.getElementById("pokeBack");
    BACK.src = (Back);
}
const pokeNN = (Name) => {
    const NAME = document.getElementById("pokeNN");
    NAME.innerHTML = (Name);
}