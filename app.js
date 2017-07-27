let savedData = {};

$(document).ready(() => {
$.get('http://localhost:8080/')
  .then((data) => {
    for (let i = 0; i < data.length; i++){
    $('.assignments').append(
        `<ul>
          <h1>${data[i].name}</h1>
          <li>ID: ${data[i].id}
          <li>${data[i].due_date}</li>
          <li>Priority: ${data[i].priority}</li>
          <li>${data[i].description}</li>
          <li>Subject: ${data[i].subject}</li>
        </ul>
        <button type="submit" class="btn btn-primary delete-btn" id=${data[i].id}>Delete</button>`
    )};
    savedData = data;
    $('.post-btn').click(postObj);
    $('.put-btn').click(putObj);
    $('.delete-btn').click(delObj);
    $('.get-btn').click(getObj);
  });
});

function getObj() {
  event.preventDefault();
  let idNum = $('#getOne').val();
  console.log("clicked");
  $.get('http://localhost:8080/' + idNum)
  .then(function(data) {
    $('.assignments').empty();
    $('.assignments').append(
        `<ul>
          <h1>${data.name}</h1>
          <li>ID: ${data.id}
          <li>${data.due_date}</li>
          <li>Priority: ${data.priority}</li>
          <li>${data.description}</li>
          <li>Subject: ${data.subject}</li>
        </ul>
        <button type="submit" class="btn btn-primary delete-btn" id=${data.id}>Delete</button>`)
  });
};

function postObj() {
  let post = {};
  post.name = $('#assignment').val()
  post.due_date = $('#date').val();
  post.priority = $('#priority').val();
  post.description = $('#description').val();
  post.subject = $('#subject').val();
  $.post('http://localhost:8080/', post);
  window.location.reload();
}
function putObj() {
  let put = {};
  let idNum = put.id;
  if ($('#assignmentId').val() != null) {
    idNum = $('#assignmentId').val();
  } else {
    event.preventDefault();
    console.warn('Please enter a valid ID');
  }
  put.name = $('#assignment1').val();
  put.due_date = $('#date1').val();
  put.priority = $('#priority1').val();
  put.description =$('#description1').val();
  put.subject = $('#subject1').val();
  $.ajax({
    url: 'http://localhost:8080/' + idNum,
    method: 'PUT',
    data: put
  });
  window.location.reload();
}

function delObj() {
  let idNum = $(this).attr('id');
  $.ajax({
    url: 'http://localhost:8080/' + idNum,
    type: 'DELETE'
  });
  window.alert("Item successfully deleted!");
  window.location.reload();
};
