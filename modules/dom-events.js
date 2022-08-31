function onOpenRoom(e, connection) {
  let roomId = roomInput?.value || defaultRoomId;
  e.target.disabled = true;
  connection.open(roomId);
}

function onJoinRoom(e, connection) {
  let roomId = roomInput?.value || defaultRoomId;
  e.target.disabled = true;
  connection.open(roomId);
}
