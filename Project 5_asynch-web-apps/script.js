

//fetch request to github api
function callGithubAPI(entry){
  fetch(`https://api.github.com/users/${entry}/repos`)
  .then(response => response.json())
  .then(newResponse => displayResults(newResponse))
  .catch(error => alert('oopsie daisy. Looks like something went wrong'))
}

//cta submit button - call to api

function submitButton(){
  $(".form").submit(event => {
    event.preventDefault();
    let entry = getInputVal();
    callGithubAPI(entry);
  })
    //get value from input and call api with that user in url
}

//display results - append to html after submit including repo name and link
function displayResults(newResponse){
  console.log(newResponse[0].full_name);
  let repoName = newResponse[0].full_name;
  let urlLink = newResponse[0].owner.html_url;
  console.log(urlLink);
  $('.results').empty();
  $('.form').hide();
  $('.results').append(`
    <h2>Repo</h2>
    <p>${repoName}</p>
    <h2>URL</h2>
    <p>${urlLink}</p>
    `)
}



//get input value and set it to url
function getInputVal(){
  var inputVal = $('input[type=text]').val();
  console.log(inputVal);
  return inputVal;
}

//call everything
// function handleSubmit() {
//    $('.form').on('click', function(event) {
//       event.preventDefault();
//       alert("made it ma!");
//    })
// }



function init() {
	//call event listener
	submitButton();
}

$(init); //document on ready
