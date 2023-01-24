

const Country = ({country}) => {

    const handleCountryForm = (event) => {
        event.preventDefault();
        // setSearch(event.target[0].value);
    };

    return(
            <form name="input_country" type="text" onSubmit={handleCountryForm} >
                <input type="text" placeholder="Enter country"/>
                <input type="submit" value="OK"/>
            </form>
    );
};

export default Country;