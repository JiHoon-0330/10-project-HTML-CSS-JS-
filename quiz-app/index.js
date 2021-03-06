// 문제 만들기
const quiz = [
  {
    question: "제 이름은 무엇일까요?",
    a: "이지훈",
    b: "홍길동",
    c: "김철수",
    d: "오갑돌",
    answer: "a"
  },
  {
    question: "지원한 분야는?",
    a: "프론트엔드",
    b: "백엔드",
    c: "데이터베이스",
    d: "인공지능",
    answer: "a"
  }
  //   {
  //     question: "",
  //     a: "",
  //     b: "",
  //     c: "",
  //     d: ""
  //   }
];

let currentQuestion = 0;

const loadQuiz = () => {
  for (let keys in quiz[currentQuestion]) {
    // 문제 출력이 끝나면...
    if (keys === "answer") {
      break;
    }
    document.querySelector(`.${keys}`).textContent =
      quiz[currentQuestion][keys];
  }
};

document
  .querySelector(".quiz__container > button")
  .addEventListener("click", () => {
    // 문제를 다 풀지 않았으면...
    if (currentQuestion < quiz.length) {
      const { answer } = quiz[currentQuestion];
      console.log(
        ``,
        document.querySelector("input[name='answer']:checked").id,
        answer
      );
      // 정답을 맞췄으면...
      if (
        answer === document.querySelector("input[name='answer']:checked").id
      ) {
        // 다음 문제가 있으면...
        if (currentQuestion < quiz.length - 1) {
          currentQuestion++;
          loadQuiz();
          document.querySelector(`#${answer}`).checked = false;
        } else {
          currentQuestion++;
          document.querySelector("h2").textContent = "모든 문제를 풀었습니다!";
          document.querySelector("ul").innerHTML = "";
          document.querySelector("button").textContent = "처음으로";
        }
      } else {
        alert("다시 한 번 생각해보세요");
      }
    } else {
      location.reload();
    }
  });

loadQuiz();
