function viewHomepage(fields) {
    fetch('/api/homepage')
      .then(showResponse)
      .catch(showResponse);
  }