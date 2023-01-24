import CountryContainer from "../containers/CountryContainer";

const Country = ({countries}) => {

    const handleCountryForm = (event) => {
        event.preventDefault();
        // setSearch(event.target[0].value);
    };

    const countryList = countries.map((country, id) => {
        
        return (
        <form name="newform" type="text" key = {id}>
        <li>{country.name.common}</li>

            <input type="checkbox"></input>

        </form>
                
        )

    })
    return(
        
        <> 
            <form name="input_country" type="text" onSubmit={handleCountryForm} >
                <input type="text" placeholder="Enter country"/>
                <input type="submit" value="OK"/>
            </form>

            <ul>Country to visit: {countryList}</ul> 
        </>
    );
};

export default Country;
