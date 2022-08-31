window.addEventListener("DOMContentLoaded", function (e) {
  const connection = new RTCMultiConnection();

  connection.socketURL = socketURL;

  connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true,
  };

  console.log(connection);

  if (connection.DetectRTC.hasMicrophone === true) {
    connection.mediaConstraints.audio = true;
    connection.session.audio = true;
  } else {
    alert("Máy không có mic đâu");
  }

  if (connection.DetectRTC.hasWebcam === true) {
    connection.mediaConstraints.video = true;
    connection.session.video = true;
  } else {
    alert("Máy không có camera đâu");
  }

  if (connection.DetectRTC.hasSpeakers === false) {
    alert("Máy không có loa hay tai nghe à, nghe bằng niềm tin à");
  }

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
