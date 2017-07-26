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
  });
  $('.post-btn').click(postObj);
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
