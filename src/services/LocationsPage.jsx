import axios from "axios"
import { useEffect, useState, createContext } from "react"
import LcGallery from "../view/Locations/LcGallery.jsx"


export const RMContext = createContext();


function LocationsPage() {

    const Url = "https://rickandmortyapi.com/api/location"

    const [locations, setLocations] = useState([]);

    const getLocations = async () => {
        const res = await axios(Url);
        setLocations(res.data.results); // Es .results porque los datos se encuentran dentro de results
    }

    useEffect(() => {
        getLocations();
    }, [])


    //Paso por props lcGallery
    return <div>
        <LcGallery listLocation={locations}/> 
    </div>
}

export default LocationsPage;