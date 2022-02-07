let ran;
button = document.getElementById('button');

window.addEventListener("load", ()=>{
  alert("Refresh the page for different Songs");

  ran= Math.floor((Math.random() * 3) + 1);
  if(ran == 1){
    document.getElementById('searchText1').innerHTML = 'Lumineers "Sleep on the Floor"';
    document.getElementById('searchText2').innerHTML = 'Kodaline "All I Want"';
    document.getElementById('lyrics').innerHTML =`
      And when we looked outside, couldn't even see the sky <br>
      When you said your last goodbye <br>
      Jesus Christ can't save me tonight <br>
      I lay in tears in bed all night
      `
  }
  else if (ran == 2){
    document.getElementById('searchText1').innerHTML = 'One Direction "Night Changes"';
    document.getElementById('searchText2').innerHTML = 'Taylor Swift "Blank Space"';
    document.getElementById('lyrics').innerHTML = `Nice to meet you, where you been? <br>
      Moon is lighting up her skin <br>
      Magic, madness, heaven, sin
    `
  }
  else{
    document.getElementById('searchText1').innerHTML = 'Queen "We are The Champions"';
    document.getElementById('searchText2').innerHTML = 'Lady Gaga "Bad Romance"';
    document.getElementById('lyrics').innerHTML = `I've made a few <br>
      You know that I want you <br>
      And you know that I need you <br>
      But I've come through
    `
  }
});



button.addEventListener("click", ()=>{
  document.getElementById('search1').style.visibility = "hidden";
  document.getElementById('search2').style.visibility = "hidden";
  button.style.visibility = "hidden";
  document.getElementById('lyrics').style.visibility = "visible";
});
