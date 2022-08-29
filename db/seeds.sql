USE employees_db;

INSERT INTO department(id,name) VALUES
 (100,'IT Systems'),
 (200,'Sales'),
 (300,'Finance'),
 (400,'Marketing'),
 (500,'Human Resources'),
 (600,'Legal'),
 (700,'Facilities Management');

INSERT INTO department(id, title, salary, department_id) VALUES
(101,'Systems Administrator I',166382.00,100),
(102,'IT Specialist',76841.00,100),
(103,'Systems Manager',62584.00,100),
(104,'Developer',66150.00,100),
(201,'Sales Lead, Europe',96636.00,200),
(202,'Account Manager',55000.00,200),
(203,'Sales Associate',40000.00,200),
(204,'Business Systems Analyst',65000.00,200),
(301,'Chief Financial Officer',95000.00,300),
(302,'Financial Accounts Specialist',48650.00,300),
(303,'Payment Adjustment Coordinator',39115.00,300),
(401,'Chief Marketing Officer',62000.00,400),
(402,'Social Media Specialist',35000.00,400),
(403,'Communications Associate',18000.00,400),
 (501,'Human Resources Manager',86000.00,500),
 (502,'Human Resources Assistant',32000.00,500),
 (601,'Lawyer',110000.00,600),
 (602,'Legal Assistant',93400.00,600),
 (701,'Facilities Manager',70000.00,700),
 (702,'External Events Associate',45000.00,700);

INSERT INTO department(id,first_name,last_name,role_id,manager_id) VALUES
 (6743027928,'Anthea','Aspenlon',101,NULL),
 (37666,'Bernette','Lerego',104,6743027928),
 (6743027928,'Anthea','Aspenlon',101,NULL),
 (2709820838,'Jasun','Longmaid',102,6743027928),
 (5633232607,'Kinny','Gaitung',104,6743027928),
 (7927411713,'Marguerite','Goscar',103,6743027928),
 (2094804313,'Gordy','McGready',201,NULL);

INSERT INTO department(id,first_name,last_name,role_id,manager_id) VALUES
 (5790875556,'Glyn','Tobias',202,2094804313),
 (0779529596,'Andres','Templeman',203,2094804313),
 (0839369859,'Dory','Levison',204,2094804313),
 (4164558857,'Rowena','Lahive',203,2094804313),
 (5884567871,'Josee','Linke',301,NULL),
 (8958821876,'Britta','Churn',303,5884567871),
 (8862524137,'Earle','Suston',302,5884567871);
 
INSERT INTO department(id,first_name,last_name,role_id,manager_id) VALUES
 (8864809856,'Brigham','Aynold',501,NULL),
 (4722559449,'Ardelle','Crusham',401,NULL),
 (4590688182,'Jada','Tamblyn',402,4722559449),
 (0448849119,'Garreth','Comar',404,4722559449),
 (8094556471,'Kristian','Buss',701,NULL),
 (3764778083,'Arlen','Dunsire',702,8094556471),
 (8536240342,'Barbette','Dabes',702,8094556471);

INSERT INTO department(id,first_name,last_name,role_id,manager_id) VALUES
 (5092255609,'Idelle','Proschek',602,2045888355),
 (2045888355,'Niala','Louis',601,NULL),
 (5526401553,'Marquita','Jedrzejczak',602,2045888355),
 (1945365897,'Latitia','Sloley',302,5884567871),
 (6593896004,'Xymenes','Sparwell',102,6743027928),
(8649678661,'Felicdad','Boulter',502,8864809856);