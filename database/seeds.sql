INSERT INTO role (title, salary, department_id)
VALUES ( "Manager", 70000, 1),
       ( "Juinor Developer", 60000, 1),
       ( "Janitor", 35000, 2),
       ( "Senior Developer", 85000, 1)
       ( "CEO", 150000, 3);

INSERT INTO department (name)
VALUES ( "Developers" ),
       ( "Custodial" ),
       ( "Managerial"),
       ( "Marketing"),
       ( "Human Resources");

INSERT INTO employee (firstName, lastName,role_id) VALUES ("Noel", "Stafford", 1);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Mateo", "Wallace", 4);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Mark", "Elliot", 2);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Seth", "Wooten",2);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("JW", "Dinsmore", 3);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Andrew", "Gibbs", 1);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Ross", "Mcvey", 4);
INSERT INTO employee (firstName, lastName,role_id) VALUES ("Jordan", "Colubiale", 3)