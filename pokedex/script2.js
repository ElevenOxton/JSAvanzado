const url="https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json";


const busqueda = async () =>{
    const response = await fetch(`${url}`); 
    const result = await response.json();
    await dibujar(result)
}

const dibujar = (pokemon) => {
    document.querySelector("#resultado").innerHTML=""
    for(let i in pokemon){
        document.querySelector("#resultado").innerHTML+=`
    <div class="col align-self-center d-flex align-items-center justify-content-center" id="todo">
      <div class="card d-flex align-items-center" id="fondo">
          <div class="card-body">
            <img src="${pokemon[i].ThumbnailImage}" id="perfil" class="img" >
            <p>Nombre:${pokemon[i].name}</p>
            <p>Tipo:${pokemon[i].type}</p>
          </div>
            <div class=" mt-3">
            <p>
                <button class="btn btn-warning fw-bolder" id="mas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Mas información
                </button>
            </p>
                <div style="min-height: 120px;">
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                        <div class="card fw-bold border border-danger text-light" style="width: 180px;">
                            <p>Base stat: </p>
                            <p>Base experience:</p>
                            <p>Peso: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
      `
    }

}

dibujar()
let boton = document.querySelector("#busqueda");
boton.addEventListener("click",busqueda);