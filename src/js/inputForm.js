import refs from './refs';
import fetchCountries from './fetchCountries';
import updateCountriesItems from './updateCounriesItems';
const debounce = require('lodash.debounce');

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();

    const inputValue = refs.input.value;
    fetchCountries(inputValue).then(data => updateCountriesItems(data));
  }, 500),
);
