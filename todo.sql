--Write the CREATE TABLE statement to make this table.
createdb week6day2
psql week6day2

week6day2=# CREATE TABLE todo(
week6day2(# id SERIAL PRIMARY KEY,
week6day2(# title VARCHAR(255) NOT NULL,
week6day2(# details VARCHAR,
week6day2(# priority INTEGER NOT NULL DEFAULT 1,
week6day2(# create_at TIMESTAMP,
week6day2(# complete_at TIMESTAMP);



-- Write INSERT statements to insert five todos into this table, with one of them completed.

INSERT INTO todo (title, details, priority, create_at, complete_at) VALUES ('Do Laundry', 'Make sure not to overfill the washer', 2, current_timestamp, null);
INSERT INTO todo (title, details, priority, create_at, complete_at) VALUES ('Do dishes', 'Rinse off really dirty dishes', 3, current_timestamp, null);
INSERT INTO todo (title, details, priority, create_at, complete_at) VALUES ('Buy a car', 'Dont do it', 1, current_timestamp, null);
INSERT INTO todo (title, details, priority, create_at, complete_at) VALUES ('Punch a Baby just kidding', 'Do I really need to give details', 1, current_timestamp, null);
INSERT INTO todo (title, details, priority, create_at, complete_at) VALUES ('Wash car', 'use wax', 1, current_timestamp, null);

-- Write a SELECT statement to find all incomplete todos.
SELECT title FROM todo WHERE complete_at IS NULL;

--Write a SELECT statement to find all todos with a priority above 1.
SELECT title FROM todo WHERE priority >1;

-- Write an UPDATE statement to complete one todo by its id. Your ids may differ, so you will choose the id to up.
UPDATE todo SET complete_at = current_timestamp WHERE id = 2;

-- Write a DELETE statement to delete all completed todos.
DELETE FROM todo WHERE complete_at IS NOT NULL;
