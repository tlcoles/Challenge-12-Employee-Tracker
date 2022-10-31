USE employees_db;

INSERT INTO department(id,name) VALUES
 (100,'IT Systems'),
 (200,'Sales'),
 (300,'Finance'),
 (400,'Marketing'),
 (500,'Human Resources'),
 (600,'Legal'),
 (700,'Facilities Management');

INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES
 (1743027928,'Anthea','Aspenlon',101,NULL),
 (1709820838,'Jasun','Longmaid',102,1743027928),
 (1633232607,'Kinny','Gaitung',104,1743027928),
 (1927411713,'Marguerite','Goscar',103,1743027928),
 (1094804313,'Gordy','McGready',201,NULL),
 (1790875556,'Glyn','Tobias',202,1094804313),
 (1779529596,'Andres','Templeman',203,1094804313),
 (1839369859,'Dory','Levison',204,1094804313),
 (1164558857,'Rowena','Lahive',203,1094804313),
 (1884567871,'Josee','Linke',301,NULL),
 (1958821876,'Britta','Churn',303,1884567871),
 (1862524137,'Earle','Suston',302,1884567871),
 (1864809856,'Brigham','Aynold',501,NULL),
 (1722559449,'Ardelle','Crusham',401,NULL),
 (1590688182,'Jada','Tamblyn',402,1722559449),
 (1448849119,'Garreth','Comar',404,1722559449),
 (1094556471,'Kristian','Buss',701,NULL),
 (1764778083,'Arlen','Dunsire',702,1094556471),
 (1536240342,'Barbette','Dabes',702,1094556471),
 (1092255609,'Idelle','Proschek',602,1045888355),
 (1045888355,'Niala','Louis',601,NULL),
 (1526401553,'Marquita','Jedrzejczak',602,1045888355),
 (1945365897,'Latitia','Sloley',302,1884567871),
 (1593896004,'Xymenes','Sparwell',102,1743027928),
 (1649678661,'Felicdad','Boulter',502,1864809856);