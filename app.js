const url = `https://covid-api.mmediagroup.fr/v1/cases`
fetch(url)
    .then(res => res.json())
    .then(data =>displayCountry(data))
       
const displayCountry= allcountries =>{
    const countries=(Object.entries(allcountries))
        const tableBody=document.getElementById('tableBody')
        tableBody.innerHTML=''
        countries.forEach(country => {
        const tr=document.createElement('tr')
        tr.innerHTML=`
        <td title="Country">${country[0]}</td>
        <td title="Capital">${country[1].All.capital_city}</td>
        <td title="Total Case">${country[1].All.confirmed}</td>
        <td title="Deaths">${country[1].All.deaths}</td>
        <td title="Recovered">${country[1].All.recovered}</td>
        <td title="Population">${country[1].All.population}</td>
        <td title="Area">${country[1].All.sq_km_area}</td>
        <td title="Updated Time">${country[1].All.updated}</td>
        `
        tableBody.appendChild(tr)
    });
}
    










        // if (!Object.entries) {
        //     Object.entries = function( obj ){
        //     var ownProps = Object.keys( obj ),
        //         i = ownProps.length,
        //         resArray = new Array(i); // preallocate the Array
        //     while (i--)
        //         resArray[i] = [ownProps[i], obj[ownProps[i]]];
        
        //         return resArray
        //     };
        // }