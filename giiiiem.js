function gogus(){
  const diviant = document.querySelector("div")
    let x = 1;
    let i = 1;
    const inputE = document.getElementById("num") ;
    const inputVal = inputE.value;
    const how = Number(inputVal);
    const isNumber = isNaN (how) ;
    const ol = document.getElementById("nodess");
    let manifacture = inputVal * -1;
    ol.innerHTML = "";
    const pval = document.getElementById("yessir");
    pval.innerHTML="";
    if (inputVal === "") {
      document.getElementById("yessir").innerHTML= "hmmm...How can I say it, your input is a lil empty like your cranium (jk(im not)).";
    }else{
      if (inputVal < 100) {
        if (inputVal < 0) {
          while (x <= manifacture) {
const creating = document.createElement("li");
const valuecreate = document.createTextNode("Sugoma");
creating.appendChild(valuecreate);
document.getElementById("nodess").appendChild(creating);
            x = x+1;
          }
        } else {
          while (i <= inputVal ) {
            const lielement = document.createElement("li");
            const livalue = document.createTextNode("Among us");
            lielement.appendChild(livalue);
            document.getElementById("nodess").appendChild(lielement);
              i= i+1;
          }
        }
      } else {
        document.getElementById("yessir").innerHTML="Dude, What the Flip ¿";
      }
    }
  }
  