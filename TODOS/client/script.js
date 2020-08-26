const todoUrl = "http://localhost:3000/todos"

//read -GET
$(document).ready(()=>{
  $.ajax({
      url: todoUrl, 
      method: 'GET'
    })
  .done((datdObj)=>{
    $('ul').empty();
    datdObj.map((todo)=>{
        let completed = todo.isComplete ? "completed" : "";
        $('ul').append(
          `<li data-id=${todo.id} class=${completed}> ${todo.description}<span><i class='far fa-trash-alt'></i>"</span></li>`
        );
    })
  })
  .fail((error)=>{
    console.error('Issues getting create data from the backend API', errorObj);
  })

})

// CREATE- post
$("input").keypress(function(event) {
    if (event.which === 13 && $(this).val() !== "") {
      var todoItem = {
         description: $(this).val()
      }
      $.ajax({
        url: todoUrl,
        method: 'POST',
        data: todoItem
      })
      .done((newTodo)=>{
        let completed = newTodo.isComplete ? "completed" : "";
          $('ul').append(
            `<li data-id=${newTodo.id} class=${completed}>${newTodo.description}<span><i class='far fa-trash-alt'></i>"</span></li>`
          );
          $("input").val("");//moved the ""to withn the parentheses 
          })
    }
});
// NOTE: this is not needed for the app p but is used to show
// bubbling in action if stopPropagation() is not used in DELETE method
$('body').on('click', ()=>{
  console.log('I am the body')
})

$('div').on('click', ()=>{
  console.log('I am the div')
})

//update- put
$('ul').on('click', ()=>{
  let self = this;
  let thisTodoid = $(this).data('id')
  $.ajax({
    url:`${todoUrl}/${thisTodoid}`,
    method: 'PUT'
  })
  .done(function(){
    $(self).toggleClass('completed');
  })
  .fail(err=> console.log(`Issues with trying to update class: ${err}`))
});

//delete 
  $("ul").on("click", "span", function(event) {
    event.stopPropagation();
    var self = this; // this refers to span and is global inside the function
    // I need access to it later in another function so I am
    // setting self var to this so I have access throughout the handler
// handles route based on id of the parent element since user clicks on span element (no id)
    var thisId = $(this).parent().data('id');
    var url = `${todoUrl}/${thisId}`;
    $.ajax({
      url: url,
      method: 'DELETE'
    })
    .done(function(){
      $(self).parent().remove();
    })
    .fail(function(err){
      console.log('Delete failed with error', err)
    });
  });