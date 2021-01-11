import notifications from './notifications';
import countriesItems from '../templates/countiesItems.hbs';
import countries from '../templates/countries.hbs';
import refs from './refs';

function updateCountriesItems(arr) {
  if (arr.length >= 10) {
    notifications.onOverflowList();
  } else if (arr.length < 10 && arr.length !== 1) {
    refs.listCountries.innerHTML = '';
    const countriesItemsTemplate = countriesItems(arr);
    refs.listCountries.insertAdjacentHTML('beforeend', countriesItemsTemplate);
  } else if (arr.length === 1) {
    refs.listCountries.innerHTML = '';
    const countriesTemplate = countries(arr);
    refs.listCountries.insertAdjacentHTML('beforeend', countriesTemplate);
  } else {
    notifications.onNotFound();
  }
}

export default updateCountriesItems;
