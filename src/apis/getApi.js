import jQuery from "jquery";


const handleFormSubmit = (e) =>{

        e.preventDefault();
        
        let userSearch = $("#searchWeather").val();

        console.log(userSearch);

}

export default handleFormSubmit;