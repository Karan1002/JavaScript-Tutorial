const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//      Using Async Await

const getFacts = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log((factPara.innerText = data[2].text));
  console.log(data);
};

//      Promise Chain

// getFacts = () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[2].text;
//     });
// };
btn.addEventListener("click", getFacts);
