import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    

    // const [search, setSearch] = useState("");

    // const search = event.target[0].value;

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => setCountries(data))}, []);

    return(
        <>
            <Country countries={countries}/>
        </>
    );

};

export default CountryContainer;