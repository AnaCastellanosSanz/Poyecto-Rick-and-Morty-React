import axios from "axios"
import { useEffect, useState } from "react"
import LcGallery from "../Components/Locations/LcGallery.jsx"

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