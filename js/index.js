window.addEventListener("DOMContentLoaded", function (e) {
  const connection = new RTCMultiConnection();

  connection.socketURL = socketURL;

  connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true,
  };

  console.log(connection);

  connection.mediaConstraints.audio = true;
  connection.mediaConstraints.video = false;

  connection.session.audio = true;
  connection.session.video = false;

  connection.onstream = function (e) {
    onStream(e);
  };

  connection.onopen = function (e) {
    onOpen(e, connection);
  };

  openRoomButton.onclick = function (e) {
    onOpenRoom(e, connection);
  };

  joinRoomButton.onclick = function (e) {
    onJoinRoom(e, connection);
  };
});
