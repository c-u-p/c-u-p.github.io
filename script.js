function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);    
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function topFunction() {
window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function() {

  const div1Element = document.getElementById('programming');
  const div2Element = document.getElementById('frontend');
  const div3Element = document.getElementById('backend');
  const div4Element = document.getElementById('database');
  const div5Element = document.getElementById('datascience');
  const div6Element = document.getElementById('cloud');
  const div7Element = document.getElementById('os');

  // const divpop = document.getElementById('divpop');
  function changeToGif(de) {
    const imgElement = de.querySelector('img');
    var sv = imgElement.src.slice(0, -3);
    imgElement.src = sv + 'gif';
    de.style.transform = 'translate(-1%, -1%) scale(1)';
  }

  function changeToStatic(de) {
    const imgElement = de.querySelector('img');
    var sv = imgElement.src.slice(0, -3);
    imgElement.src = sv + 'png';
    de.style.transform = 'translate(+1%, +1%) scale(1)';
  }

  div1Element.addEventListener('mouseover', (event) => changeToGif(div1Element));
  div1Element.addEventListener('mouseout', (event) => changeToStatic(div1Element));

  div2Element.addEventListener('mouseover', (event) => changeToGif(div2Element));
  div2Element.addEventListener('mouseout', (event) => changeToStatic(div2Element));

  div3Element.addEventListener('mouseover', (event) => changeToGif(div3Element));
  div3Element.addEventListener('mouseout', (event) => changeToStatic(div3Element));

  div4Element.addEventListener('mouseover', (event) => changeToGif(div4Element));
  div4Element.addEventListener('mouseout', (event) => changeToStatic(div4Element));

  div5Element.addEventListener('mouseover', (event) => changeToGif(div5Element));
  div5Element.addEventListener('mouseout', (event) => changeToStatic(div5Element));

  div6Element.addEventListener('mouseover', (event) => changeToGif(div6Element));
  div6Element.addEventListener('mouseout', (event) => changeToStatic(div6Element));

  div7Element.addEventListener('mouseover', (event) => changeToGif(div7Element));
  div7Element.addEventListener('mouseout', (event) => changeToStatic(div7Element));

});