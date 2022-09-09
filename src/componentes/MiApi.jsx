import { useState, useEffect } from "react";
function MiApi() {

    const [modeloDeAuto, setModeloDeAuto] = useState(''); 

    const [autos, setAutos] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el componente
    useEffect(() => {
      consultarInformacion();
    }, []);
  
    //Filtro por Modelo de vehiculo
    const autosFiltrados = autos.filter(e => e.name.toLowerCase().startsWith(modeloDeAuto.toLowerCase()));

const consultarInformacion = async () => {
    const url = 'https://private-anon-f2f8a3e599-carsapi1.apiary-mock.com/manufacturers';
const response = await fetch(url)
const data = await response.json()

console.log(data);

setAutos([...autos,...data]);

}
return (
 
<div className="container">

<div className="header">
<nav className="navbar navbar-expand-lg bg-dark mb-5 p-4">
            <div className="container">
                <h4 className="text-white">Marcas de autos y caballos de fuerza</h4>
                <form className="d-flex">
                <input name="filtro" id="filtro" placeholder="Buscar Marca de Auto" value={modeloDeAuto} onChange={(e) => setModeloDeAuto(e.target.value)} />

                </form>

            </div>
        </nav>
  {/* <input name="filtro" id="filtro" value={modeloDeAuto} onChange={(e) => setModeloDeAuto(e.target.value)} /> */}
</div>
 {autosFiltrados.map(a => 
<div className="card" key={a.name}>
  {/* <img>Imagen : {a.img_url}</img> */}
      <h3>Modelo: <span className="span">{a.name}</span></h3>
      <p class="card-text">Caballos de fuerza: {a.avg_horsepower}</p>
</div>

)}

</div>

);
}
export default MiApi;