SELECT *
FROM todos.todos;

SELECT *
FROM todos.users;


INSERT INTO todos.todos(
        description, 
        iscomplete, 
        user_id
    ) VALUES (
        '${description}', 
        false, 
        5
) RETURNING id as _id, *;

DELETE FROM todos.todos
WHERE id = 1143;

UPDATE todos.todos
SET iscomplete =  NOT iscomplete
WHERE id = 1136 