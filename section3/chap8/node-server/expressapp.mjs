import express from 'express';
const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log('First middle ware');

  next();
});

app.use((req, res, next) => {
  //res.send('Hello world, I am a custom middle ware');
  next();
});

app.use(router);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log('Express Node server has loaded');
});

// these are routes
router.get('/a', (req, res, next) => {
  res.send('Hello this is route a');
});

router.get('/api/v1/users', (req, res, next) => {
  const users = [
    {
      id: 1,
      username: 'tom',
    },
    {
      id: 2,
      username: 'dom',
    },
    {
      id: 3,
      username: 'som',
    },
  ];
  console.log(req.query.userid);
  const user = users.find((usr) => usr.id === Number(req.query.userid));
  res.send(`User ${user?.username}`);
});
router.post('/b', (req, res, next) => {
  res.send(`this is route b. Message is ${req.body.message}`);
});
router.post('/api/v1/groups', (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: 'Admins',
    },
    {
      id: 2,
      groupname: 'Users',
    },
    {
      id: 3,
      groupname: 'Employees',
    },
  ];

  const group = groups.find((grp) => grp.id === Number(req.body.groupid));
  res.send(`Group ${group.groupname}`);
});
