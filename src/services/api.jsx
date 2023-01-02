

//El fetch es asíncrono
const getDataApi = () => {
    //Devuelve una promesa la cual recibimos con la función .then, el cual recibe una callback que es la encargada de traducir esa promesa en formato json, esa transformación también es asíncrona por lo que devuelve otro .then.
    return fetch ('https://rickandmortyapi.com/api/character')
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
        //Se hace el map para que vaya cogiendo cada dato del array de objetos
        //Todos estos datos se obtienen en la consola
        //data.results es porque los datos estan dentro de la parte de results y se devuelven los datos que queremos mostrar de la API.
        const cleanData = data.results.map((person) => {
            return{
                id: person.id , 
                img: person.image, 
                name: person.name,
                status: person.status,
                location: person.location.name, 
                gender: person.gender,
            }
        })
        return cleanData 
    });

};

//Esta información me la tengo que llevar a app y debo utilizar el useeffect para que se solicite la información únicamente una vez.
export default getDataApi; 