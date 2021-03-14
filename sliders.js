let status = true;

const text = document.querySelector(".text-container");
const textColorBtn = document.querySelector("#text-color");
const bgColorBtn = document.querySelector("#bg-color");

textColorBtn.addEventListener("click", (event) => {
  bgColorBtn.className = "";
  textColorBtn.className = "active";
  status = true;
});
bgColorBtn.addEventListener("click", (event) => {
  textColorBtn.className = "";
  bgColorBtn.className = "active";
  status = false;
});

$("#red-slider, #green-slider, #blue-slider").slider({
  max: 255,
  range: "min",
  value: 90,
  slide: handleValueChange,
  change: handleValueChange,
});

function handleValueChange() {
  let red = $("#red-slider").slider("value");
  let green = $("#green-slider").slider("value");
  let blue = $("#blue-slider").slider("value");
  let hex = RGBtoHex(red, green, blue);
  if (status === true) {
    text.style.color = hex;
  } else {
    text.style.backgroundColor = hex;
  }
}

function RGBtoHex(red, green, blue) {
  return [red.toString(16), green.toString(16), blue.toString(16)].reduce(
    (acc, curr) => {
      if (curr.length === 1) {
        return acc + ("0" + curr);
      }
      return acc + curr;
    },
    "#"
  );
}
