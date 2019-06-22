document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const pokemonListItem = createPokemonListItem(event.target);
  const pokemonList = document.querySelector('#pokemon-list');
  pokemonList.appendChild(pokemonListItem);

  event.target.reset();
}

const createPokemonListItem = function (form) {
  const pokemonListItem = document.createElement('li');
  pokemonListItem.classList.add('pokemon-list-item');

  const englishName = document.createElement('h2')
  englishName.textContent = form.englishName.value;
  pokemonListItem.appendChild(englishName);

  const japaneseName = document.createElement('h3')
  japaneseName.textContent = form.japaneseName.value;
  pokemonListItem.appendChild(japaneseName);

  const type = document.createElement('h3')
  type.textContent = form.type.value;
  pokemonListItem.appendChild(type);

  return pokemonListItem;
}

const handleDeleteAllClick = function (event) {
  const pokemonList = document.querySelector('#pokemon-list');
  pokemonList.innerHTML = '';
}
