$(document).ready(() => {
$.get('http://localhost:8080/')
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++){
    $(".assignments").append(
        `<ul>
          <h1>${data[i].name}</h1>
          <li>${data[i].due_date}</li>
          <li>${data[i].description}</li>
          <li>${data[i].priority}</li>
          <li>${data[i].subject}</li>
        </ul>`
    )};
  });
});
