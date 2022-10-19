function viewFavoritesByFreet(fields) {
    fetch(`/api/favorites?freetId=${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }

function addFavoriteToFreet(fields) {
    fetch(`/api/favorites/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}