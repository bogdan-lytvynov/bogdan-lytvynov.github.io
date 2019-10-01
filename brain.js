const onMessage = event => {
  document.getElementById('root').innerHTML = JSON.stringify(event.data)
}

window.addEventListener('message', onMessage)

const selectRoomButton = document.getElementById('room')

const selectRoomPayload = {
  roomId: '123'
}
const sendPostmessageToParent = () => {
  window.parent.postMessage(selectRoomPayload, '*')
}

selectRoomButton.addEventListener('click', sendPostmessageToParent)


