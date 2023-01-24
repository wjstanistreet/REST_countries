import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountryContainer = (event) => {

    const [country, setCountry] = useState(null);

    // const [search, setSearch] = useState("");

    // const search = event.target[0].value;

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/Peru`)
        .then(response => response.json())
        .then(data => setCountry(data[0][0]))
        console.log(country);
    }, []);

    return(
        <>
            <Country country={country}/>
        </>
    );

};

export default CountryContainer;