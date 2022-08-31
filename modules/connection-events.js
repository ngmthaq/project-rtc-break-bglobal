function onStream(e) {
  console.log("Connection stream ", e);
  roomContainer.appendChild(e.mediaElement);
}
