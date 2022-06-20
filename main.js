const stringArray = ["david", "nathen", "daniel", "abey", "abeve", "light"];
console.log(stringArray.sort());
const numArray = [7, 32, 652, 85, 75];
console.log(numArray.sort((a, b) => a - b));
console.log(numArray.sort((a, b) => b - a));
const namesArray = [];
let forInputLoop = 0;
function pushNamesToArr() {
  if (forInputLoop < 10) {
    namesArray.push(inputNames.value);
    inputNames.value = "";
    forInputLoop++;
  } else if (forInputLoop == 10) {
    console.log(namesArray.sort());
  }
}
let randomNumsArr = [];
function pushRandomNumsToArr() {
  for (i = 0; i < 10; i++) {
    randomNumsArr.push(parseInt(Math.random() * 121));
  }
  console.log(randomNumsArr.sort((a, b) => b - a));
}
pushRandomNumsToArr();
console.log(stringArray.join("-"));

var companiesArray = [
  "intel",
  "biotech",
  "communix",
  "overwolf",
  "playtika",
  "wix",
];
// function printName() {
//   for(i=0;i<companiesArray.length;i++){
//     document.body.innerHTML+="<p>"+companiesArray[i]+"</p>"
//   }
// }
printName()
function printCompanyNames() {
  for (i = 0; i < 4; i++) {
    let j=0
    for(j;j<5;j+3){
    document.body.innerHTML +=
      "<div class='img-div'><img src=pics/" +
      companiesArray[j] +
      ".jpg><p>" +
      companiesArray[j] +
      " city:tel aviv</p></div>" +
      "<div class='img-div'><img src=pics/" +
      companiesArray[j++] +
      ".jpg><p>" +
      companiesArray[j++] +
      " city:tel aviv</p></div>" +
      "<div class='img-div'><img src=pics/" +
      companiesArray[j + 2] +
      ".jpg><p>" +
      companiesArray[j + 2] +
      " city:tel aviv</p></div>" +
      "<br>";}
  }
}
printCompanyNames()
