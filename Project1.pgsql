/*Task 1*/
SELECT  first_name, 
        last_name, 
        salary
    FROM    employees
    WHERE   salary 
    BETWEEN 30000 AND 40000;

/*Task 2*/
SELECT  job_id, 
        salary, 
        LEFT(last_name, 6)
    FROM employees
    WHERE char_length (last_name) >=6;  

/*Task 3.1*/
SELECT first_name, last_name
FROM employees
WHERE salary > 8000 
AND 
to_date('01/01/1997', 'mm/dd/yyyy') < hire_date;

/*Task 3.2*/
SELECT min(salary)
FROM hr.employees;

/*Task 3.3 not done with % section*/
SELECT  last_name,
        first_name,
        salary, 
        commission_pct,  
        (salary + salary*COALESCE(commission_pct, 0)) AS compensation,
        ROUND ((salary + salary*COALESCE(commission_pct, 0))/
        (SELECT
            MIN(salary)
            FROM hr.employees)*100, 2) as Percent_Salary
    FROM hr.employees
WHERE salary > 8000 
AND 
to_date('01/01/1997', 'mm/dd/yyyy') < hire_date;

/*Task 4*/
SELECT  first_name||' '||last_name AS Name, 
        department_name
FROM employee_details_vw
WHERE department_name = 'Bootcamp'
ORDER BY employee_id;

SELECT first_name||' '||last_name AS Name, 
        department_name
FROM employee_details_vw
WHERE department_name = 'Sales'
ORDER BY employee_id;


/*Task 5*/
SELECT  e.first_name,
        e.last_name,
        h.email,
        e.department_name,
        e.city
FROM hr.emp_details_view AS e 
Join hr.employees as h
ON e.employee_id = h.employee_id
WHERE e.department_name = 'Executive';

/*Task 6*/
SELECT  e.first_name,
        e.last_name,
        h.email,
        e.department_name,
        e.city,
        i.first_name
FROM hr.employees as h 
LEFT JOIN employees i 
    ON (i.employee_id = h.manager_id)
Join  hr.emp_details_view AS e 
ON e.employee_id = i.employee_id  
WHERE e.department_name = 'Executive';

SELECT
  emp.first_name AS "FIRST",
  emp.last_name AS "LAST",
  emp.email AS "EMAIL",
  mgr.first_name AS "MANAGER",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees emp
-- left join needed to catch any unmatched rows
-- in this case King has mgr id of 146 - there is NO emp id 146 so no match
LEFT JOIN employees mgr
  ON (mgr.employee_id = emp.manager_id)
-- joins employees table wth departments table using department id
JOIN departments d
  ON (emp.department_id = d.department_id)
-- joins locations table with departments table using location id
JOIN locations l
  ON (l.location_id = d.location_id)
-- only displays executives
WHERE department_name = 'Executive';



/*Task 7*/


/**/
/**/
/**/

SELECT 
    fname as first, 
    lname as last, 
    height, 
    weight, 
    t.name as team 
FROM players  p  LEFT JOIN teams t
ON t.id = p.team_id;

SELECT emp.first_name||' '||emp.last_name AS "Employee", 
    mgr.first_name||' '|| mgr.last_name AS "Manager" 
    FROM employees emp
LEFT JOIN employees mgr
    ON emp.manager_id = mgr.employee_id
    ORDER BY "Manager" ASC NULLS FIRST; 

SELECT emp.first_name||' '||emp.last_name AS "Employee", 
        COALESCE (loc.city, '--Location Unknown')
FROM employees AS emp 
LEFT JOIN hr.departments dept
ON emp.department_id = dept.department_id
LEFT JOIN hr.locations loc
ON loc.location_id = dept.location_id
ORDER BY emp.last_name; 
