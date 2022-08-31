window.addEventListener("DOMContentLoaded", function (e) {
  const connection = new RTCMultiConnection();

  connection.socketURL = socketURL;

  connection.session = {
    audio: true,
    video: false,
  };

  connection.mediaConstraints = {
    audio: true,
    video: false,
  };

  connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true,
  };

  connection.onstream = function (e) {
    onStream(e);
  };

  openRoomButton.onclick = function (e) {
    onOpenRoom(e, connection);
  };

  joinRoomButton.onclick = function (e) {
    onJoinRoom(e, connection);
  };
});
