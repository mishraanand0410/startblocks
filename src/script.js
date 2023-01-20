const api_url = 'http://localhost:3000/todo';
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url,{
      method : "GET",
      headers: {
        'Content-Type': 'application/json'        
      },
      
    })
    
    // Storing data in form of JSON
    var data = await response;
    console.log("data",data.json());
    if (response) {
        hideloader();
    }
    //show(data);
   
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors',
      contentType: 'application/json',
      accept:'*/*'
    };
    
    fetch("http://localhost:3000/todo", requestOptions)
      .then(response => response.body)
      .then(result => console.log("result",result))
      .catch(error => console.log('error', error));
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td> 
    <td>${r.salary}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}