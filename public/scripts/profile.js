function createGroupProfile(fields) {
    fetch('/api/profiles', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

function viewProfileByUsername(fields) {
    fetch(`/api/profiles?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewProfilesByUser(fields) {
    fetch(`/api/profiles`)
    .then(showResponse)
    .catch(showResponse)
}

function deleteProfileByUsername(fields) {
    fetch(`/api/profiles/${fields.username}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }
  