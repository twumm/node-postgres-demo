INSERT INTO
    users
VALUES
    (default, 'Richard Smith', 'bananas'),
    (default, 'Joyce Smith', 'avocados'),
    (default, 'James Smith', 'sevengates'),
    (default, 'Jane Smith', 'valentine');

INSERT INTO
    posts
VALUES
    (default, (SELECT id FROM users WHERE id = 1), 'When hippos are upset, their sweat turns red.'),
    (default, (SELECT id FROM users WHERE id = 2), 'If you lift a kangaroo’s tail off the ground it can’t hop.'),
    (default, (SELECT id FROM users WHERE id = 3), 'If you consistently fart for 6 years & 9 months, enough gas is produced to create the energy of an atomic bomb!'),
    (default, (SELECT id FROM users WHERE id = 4), 'The average woman uses her height in lipstick every 5 years.');