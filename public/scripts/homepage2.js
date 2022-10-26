function viewActivityHomepage(fields) {
    fetch('/api/homepage/activity')
      .then(showResponse)
      .catch(showResponse);
  }