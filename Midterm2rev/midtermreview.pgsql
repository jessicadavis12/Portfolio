SELECT * FROM regions;
SELECT * FROM countries;
SELECT
    country_id, 
    country_name, 
    region_id
FROM countries;

SELECT department_id
    FROM employees;

SELECT DISTINCT department_id
    FROM employees;

SELECT DISTINCT department_id, manager_id
    FROM employees;

SELECT employee_id, last_name, salary, 
        commission_pct
FROM employees
WHERE commission_pct IS NOT NULL
or (salary > 10000
AND hire_date > '31-DEC-98');

SELECT * 
FROM hr.employees
WHERE last_name LIKE 'L%';

SELECT  COUNT (DISTINCT employee_id) 
FROM hr.employees
WHERE manager_id IS NOT NULL;

SELECT first_name, last_name, salary, commission_pct,
COALESCE(commission_pct, 0) +.10 AS raise 
FROM employees LIMIT 10;

SELECT last_name, 
EXTRACT(YEAR FROM hire_date) AS "Hire Year"
FROM employees WHERE job_id = 'MK_REP';

SELECT job_id FROM hr.employees;

SELECT department_id, count(DISTINCT employee_id) FROM employees
GROUP BY department_id;

SELECT job_id, count(DISTINCT employee_id) FROM employees
GROUP BY job_id;

SELECT last_name, first_name, job_id, salary
FROM hr.employees
ORDER BY last_name ASC, first_name DESC;

SELECT *
FROM hr.locations
ORDER BY city;

SELECT *
FROM hr.locations
ORDER BY postal_code;

SELECT 'Hello' || 'Dolly!';
SELECT SUBSTRING('Hello Dolly' FROM 1 FOR 5);
SELECT CHAR_LENGTH('Hello Dolly');
SELECT POSITION('11' in 'Hello Dolly!'); 

SELECT ROUND(453.141592, 2);

SELECT p.productid, p.description, s.saledate, s.amount
FROM sales s JOIN products p
ON (p.productid = s.productid);

SELECT e.employee_id,
        e.first_name,
        l.city, d.department_name
FROM employees e
Join departments d ON e.department_id = d.department_id
JOIN hr.locations l ON d.location_id = l.location_id;

SELECT first_name, department_name
FROM hr.employees e 
LEFT JOIN departments d 
ON e.department_id = d.department_id;

SELECT first_name, department_name
FROM hr.employees e 
RIGHT JOIN departments d 
ON e.department_id = d.department_id;

SELECT first_name, department_name
FROM hr.employees e 
JOIN departments d 
ON e.department_id = d.department_id;

SELECT first_name, department_name
FROM hr.employees e 
FULL OUTER JOIN departments d 
ON e.department_id = d.department_id;

