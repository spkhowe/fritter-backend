function viewFavoritesByFreet(fields) {
    fetch(`/api/favorites?freetId=${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }