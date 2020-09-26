3. waits and runs after the requested get method returns with data or error
5. Select
2. 304 
4. all of the above 
2. Formats the web page 
2. In the application server 
3. process.env.PORT
2. req.body
4. response.status(404)
2. the form clears its fields and moves to the root of the website
2. cached, 4. typically used to receive data and 5 used with files
1. on the server to create back-end services, as well as on the browser to consume those services
4. has no restrictions on data length
4. 'Julia Roberts', undefined. getName isn't defined beyond the scope of the star variable code.  
1. the console.log was called when the function defined to return 1.  The function was not called again by the console/log() after it was redefined to return 2. 
4. possibly null and 5. possibly has duplicates in the column it belongs to
2. number of not null fields in names column in cornucopia table
1. join a table to itself using different columns of the table
 4. db.restaurants.find({ "borough" : "Queens" })
3. 1. db.collection('res').find({ score: > 30 });
3. is not mandatory that the server will be able to provide the data as preferred by a client
SELECT 
   e.first_name || ' ' || e.last_name as "Employee",
   m.first_name || ' ' || m.last_name as "Emp Manager",
   d.department_name as "Department",
   dm.first_name || ' ' || dm.last_name as "Dept Manager"
FROM employees m
INNER JOIN employees e ON (m.employee_id = e.manager_id)
LEFT JOIN departments d ON (e.department_id = d.department_id)
LEFT JOIN employees dm ON (d.manager_id = dm.employee_id);