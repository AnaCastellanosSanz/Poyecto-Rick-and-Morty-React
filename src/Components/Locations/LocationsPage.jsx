import axios from "axios"
import { useEffect, useState } from "react"
import LcGallery from "./LcGallery.jsx"

function LocationsPage() {

    const Url = "https://rickandmortyapi.com/api/location"

    const [locations, setLocations] = useState([]);

    const getLocations = async () => {
        const res = await axios(Url);
        setLocations(res.data.results);
    }

    useEffect(() => {
        getLocations();
    }, [])

    return <div>
        <LcGallery list={locations}/>
    </div>
}

export default LocationsPage;