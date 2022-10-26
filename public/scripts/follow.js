function followProfile(fields) {
    console.log("fields:", fields)
    fetch('/api/follows', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

function unfollowProfile(fields) {
    fetch(`/api/follows/${fields.username}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
  }

function viewUserFollowing(fields) {
    fetch(`/api/follows?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}