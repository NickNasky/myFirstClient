let savedData = {};
let host = 'https://sheltered-temple-20365.herokuapp.com/'
$(document).ready(() => {
$.get(host)
  .then((data) => {
    for (let i = 0; i < data.length; i++){
    $('.assignments').append(
        `<div class="underline">
        <ul>
          <h1>${data[i].name}</h1>
          <li>ID: ${data[i].id}
          <li>${data[i].due_date}</li>
          <li>Priority: ${data[i].priority}</li>
          <li>${data[i].description}</li>
          <li>Subject: ${data[i].subject}</li>
        </ul>
        <button type="submit" class="btn btn-primary delete-btn" id=${data[i].id}>Delete</button>
        </div>`
    )};
    savedData = data;
    $('.post-btn').click(postObj);
    $('.put-btn').click(putObj);
    $('.delete-btn').click(delObj);
    $('.get-btn').click(getObj);
    $('.reset').click(reloadPage);
  });
});

function reloadPage() {
  event.preventDefault();
  window.location.reload();
}

function getObj() {
  event.preventDefault();
  let idNum = $('#getOne').val();
  $.get(host + idNum)
  .then((data) => {
    $('.assignments').empty();
    $('.assignments').append(
        `<div class="underline">
        <ul>
          <h1>${data.name}</h1>
          <li>ID: ${data.id}
          <li>${data.due_date}</li>
          <li>Priority: ${data.priority}</li>
          <li>${data.description}</li>
          <li>Subject: ${data.subject}</li>
        </ul>
        <button type="submit" class="btn btn-primary delete-btn" id=${data.id}>Delete</button>
        </div>`)
  });
};

function postObj() {
  let post = {};
  post.name = $('#assignment').val()
  post.due_date = $('#date').val();
  post.priority = $('#priority').val();
  post.description = $('#description').val();
  post.subject = $('#subject').val();
    if(post.name && post.due_date && post.priority && post.description && post.subject) {
      $.post(host, post)
      .catch((data) => {
        alert(data.responseJSON.Error)
      });
      window.location.reload();
    } else {
      event.preventDefault();
      alert('Please fill out all fields!')
    }
}
function putObj() {
  let put = {};
  idNum = $('#assignmentId').val();
  put.name = $('#assignment1').val();
  put.due_date = $('#date1').val();
  put.priority = $('#priority1').val();
  put.description =$('#description1').val();
  put.subject = $('#subject1').val();
  if(idNum && put.name && put.due_date && put.priority && put.description && put.subject) {
    $.ajax({
      url: host + idNum,
      method: 'PUT',
      data: put
    })
    .catch((data) => {
    alert (data.responseJSON.Error)
    });
    window.location.reload();
  } else {
    event.preventDefault();
    alert('Please fill out all fields correctly!');
  };
}

function delObj() {
  let idNum = $(this).attr('id');
  $.ajax({
    url: host + idNum,
    type: 'DELETE'
  });
  window.alert("Item successfully deleted!");
  window.location.reload();
};
