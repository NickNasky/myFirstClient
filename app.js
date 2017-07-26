let savedData = {};

$(document).ready(() => {
$.get('http://localhost:8080/')
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++){
    $('.assignments').append(
        `<ul>
          <h1>${data[i].name}</h1>
          <li>${data[i].due_date}</li>
          <li>Priority: ${data[i].priority}</li>
          <li>${data[i].description}</li>
          <li>Subject: ${data[i].subject}</li>
        </ul>`
    )};
    savedData = data;
  });
  $('.post-btn').click(postObj);
  $('.put-btn').click(putObj);
});

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
