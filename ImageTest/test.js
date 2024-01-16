var index = 1;
var pngname = "64.png";
var fontexts = document.getElementById("imgText"); // ID가 'imgText'인 요소

function NextImage() {
  ImageChange(1);
  document.getElementById("img").src = "./images/" + pngname; // 클래스 사용

    fontexts.innerText = pngname; // 텍스트 변경

}

function BackImage() {
  ImageChange(-1);
}

function ImageChange(value) {
  index += value;

  // 예시: 이미지 이름을 변경하는 로직
  pngname = index + ".png"; // 이미지 이름을 index에 따라 변경

  // switch 문을 사용해 특정 조건에 따른 동작을 추가할 수 있음
  switch (index) {
    case 1:
      // index가 1일 때의 동작
      break;
    // 추가적인 케이스
  }
}
