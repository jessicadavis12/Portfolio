const todoURL = 'http://localhost:3000/todos';

//read- GET
$(document).ready(function(){
    $.ajax({
        url: todoURL, 
        method:'GET'
    })
    .done(function(dataObj){
        $('ul').empty();
        dataObj.map(function(todo){
            let completed = todo.isComplete ? "completed": "";
            $('ul').append(
                `<li data-id=${todo._id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
        })
    })
    .fail(function(errorObj){
        console.error('Issue getting create data from the front end API', errorObj)
    })
})

//create post
$('input').keypress(function(event){
    if(event.which ==13 && $(this).val() !==""){
        let todoItem = {
            description: $(this).val()
        }
        $.ajax({
            url: todoURL, 
            method: "POST",
            data: todoItem
        })
        .done(function(newTodo){
            let completed = newTodo.isComplete ? "completed":"";
            $('ul').append(
                `<li data-id=${newTodo._id} class=${completed}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
            $('input').val("")
        })
    }
});

//Update - PUT
$('ul').on('click', 'li', function(){
    let self = this;
    let thisToDoId = $(this).data('id')
    $.ajax({
        url: `${todoURL}/${thisToDoId}`, 
        method:"PUT"
    })
    .done(function(){
        $(self).toggleClass('completed');
    })
    .fail(err =>console.log(`issues with trying to update class: ${err}`))
});

// Delete - DELETE
$('ul').on('click', 'span', function(event){
    event.stopPropagation(); // what is stopPropagation?
    var self = this; // this refers to span and is global inside the function
                    // I need access to it later in another function so I am
                    // setting self var to this so I have access throughout the handler
    // handles route based on id of the parent element since user clicks on span element (no id)
    var thisId = $(this).parent().data('id');
    var url = `${todoURL}/${thisId}`;
    $.ajax({
        url: url,
        method: 'DELETE',
    })
    .done(function(){
        $(self).parent().remove(); // removes the li element of the span clicked in browser
    })
    .fail(function(err){
        console.log('Delete failed with error ', err)
    });
  });