import notifications from './notifications';
import countriesItems from '../templates/countiesItems.hbs';
import countries from '../templates/countries.hbs';
import refs from './refs';

function updateCountriesItems(arr) {
  if (arr === undefined) {
    return;
  }
  if (arr.length >= 10) {
    notifications.onOverflowList();
  } else if (arr.length < 10 && arr.length !== 1) {
    onListCountries(arr);
  } else if (arr.length === 1) {
    onOnlyOneCountrie(arr);
  } else {
    notifications.onNotFound();
  }
  console.log(arr);
}
function onListCountries(el) {
  refs.listCountries.innerHTML = '';
  const countriesItemsTemplate = countriesItems(el);
  refs.listCountries.insertAdjacentHTML('beforeend', countriesItemsTemplate);
}
function onOnlyOneCountrie(el) {
  refs.listCountries.innerHTML = '';
  const countriesTemplate = countries(el);
  refs.listCountries.insertAdjacentHTML('beforeend', countriesTemplate);
}
export default updateCountriesItems;
