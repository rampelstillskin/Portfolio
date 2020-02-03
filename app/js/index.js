let handMove = [{ bottom: "0px" }, { bottom: "10px" }, { bottom: "0px" }];

let handTiming = {
  duration: 1000,
  iterations: Infinity
};

let handAnimation = document
  .querySelector(".hand__next-block")
  .animate(handMove, handTiming);
