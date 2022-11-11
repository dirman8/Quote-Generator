function otherLanguage() {
  let favorite;
  console.log("called from otherLanguage :" + favorite);
}

function favLanguage() {
  let favorite="Javascript";
  otherLanguage();
  console.log("called from favLanguage :" + favorite);
}

var favorite = "C#"
favLanguage();
console.log("called from Global :" + favorite);