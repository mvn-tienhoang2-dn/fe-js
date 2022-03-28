var url1 = "https://reqres.in/api/users?page=1";
var url2 = "https://reqres.in/api/users?page=2";
var url3  = "https://reqres.in/api/users/1"
fetch(url1)
  .then(response => response.json())
  .then(function (callFetch) {
    var html = '';
    let $userHtml = document.getElementById('call-fetch')
    for (let i = 0; i < callFetch.data.length; i++) {
      html +=  `<tr>
         <td>  ${callFetch.data[i].id}</td>
         <td>${callFetch.data[i].first_name}</td>
         <td>${callFetch.data[i].last_name}</td>
         <td>${callFetch.data[i].email}</td>
      <td><img src="${callFetch.data[i].avatar}" alt="avatar"></td>
        </tr>`;
    }
    $userHtml.innerHTML = html;
  });

//! axios

axios
  .get(url2)
  .then(function (response2) {
    return response2.data 
  })
  .then(function(callAxios) {
    let html2 = '';
    let $userHtml2 = document.getElementById('call-axios')
    for (let i = 0 ; i < callAxios.data.length; i++) {
      html2 += `<li class="user-item col-4">
      <div>
      <img src="${callAxios.data[i].avatar}">
      <p>ID: ${callAxios.data[i].id}</p>
      <p>Fullname: ${callAxios.data[i].first_name} ${callAxios.data[i].last_name}</p>
      <p>Email: ${callAxios.data[i].email}</p>
      </div>
      </li>`;
    }
    $userHtml2.innerHTML = html2;
  }) 
  //!ajax
function loadHtml(users) {
    let html3 = '';
  let $userHtml3 = document.getElementById('call-ajax')
    html3 =
        `<img src="${users.avatar}">
          <div>
            <p>ID: ${users.id}</p>
            <p>Fullname: ${users.first_name} ${users.last_name}</p>
            <p>Email: ${users.email}</p>
          </div>`;
      $userHtml3.innerHTML = html3;
    }
  function userInfo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url3, true);
    xhr.onload = function(){
      var test = JSON.parse(xhr.responseText).data;
      loadHtml(test);
    };
    xhr.send();
  }
userInfo();
