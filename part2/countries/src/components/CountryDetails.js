import React from 'react';
import Weather from './Weather';

const CountryDetail = (props) => (
    <div>
        <ul key={props.filteredCountry.name}><b>
            {props.filteredCountry.name}</b><br></br>
            capital {props.filteredCountry.capital} <br></br>
            population {props.filteredCountry.population}<br></br>
            <b>Languages: </b> 
            {props.filteredCountry.languages.map(language =>
             <li key={language.name}>{language.name}</li>)}
             <img src={props.filteredCountry.flag} height="50px"/>
        </ul>)
        <Weather country={props.filteredCountry.name}></Weather>
</div>
);

export default CountryDetail;
