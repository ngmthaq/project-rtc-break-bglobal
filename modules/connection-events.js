function onStream(e) {
  console.log("Connection stream ", e);
  roomContainer.appendChild(e.mediaElement);
}

function onOpen(e, connection) {
  connection.send("Test");
}
