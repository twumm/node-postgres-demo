var express = require('express');
var router = express.Router();

// pg config
var pg = require('pg');
var pool = new pg.Pool();
var conString = 'postgres://postgres:postgres@localhost/pg_demo_db';

// Users
// get all users
router.get('/users', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('SELECT * FROM users', function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// post user
router.post('/users', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('INSERT INTO users(username, password) VALUES($1, $2) returning id', [req.body.username, req.body.password], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// get one user
router.get('/users/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('SELECT * FROM users WHERE id = $1', [req.params.id], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// update user
router.put('/users/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('UPDATE users SET username = $2, password = $3 WHERE id = $1', [req.params.id, req.body.username, req.body.password], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// delete one user
router.delete('/users/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        console.log(conString);
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('DELETE FROM users WHERE id = $1', [req.params.id], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// Post
// get all posts
router.get('/posts', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('SELECT * FROM posts', function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// post one post
router.post('/posts', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('INSERT INTO posts(user_id, content) VALUES($1, $2) returning id', [req.body.username, req.body.password], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// get one post
router.get('/posts/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('SELECT * FROM posts WHERE id = $1', [req.params.id], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// update one user
router.put('/posts/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('UPDATE posts SET user_id = $2, password = $3 WHERE id = $1', [req.params.id, req.body.user_id, req.body.content], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

// delete one user
router.delete('/posts/:id', function(req, res, next) {
    pool.connect(conString, function(err, client, done) {
        console.log(conString);
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query('DELETE FROM posts WHERE id = $1', [req.params.id], function(err, result) {
            done();
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result);
        });
    });
    pool.end()
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;