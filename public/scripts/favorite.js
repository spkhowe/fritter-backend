function addFavorite(fields) {
    fetch('/api/favorites', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFavorite(fields) {
    fetch(`/api/favorites/${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function viewAllFavorites(fields) {
    fetch('/api/favorites')
    .then(showResponse)
    .catch(showResponse);
}

function deleteAllFavorites(fields) {
    fetch(`/api/favorites`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }