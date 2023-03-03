function streamvideo() {
  const video = document.querySelector("video");
  const options = { video: true };
  navigator.mediaDevices.getUserMedia(options).then(strem => video.srcObject = strem).catch(err => console.log(err))

  let click_button = document.querySelector("#click-photo");
  let canvas = document.querySelector("#canvas");
  click_button.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    let download  = document.querySelector(".download-link")
    download.setAttribute("href", image_data_url)
    // data url of the image
    console.log(image_data_url);
  });
}
streamvideo()
