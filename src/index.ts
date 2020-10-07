const express = require('express');
const apiRouter = require('./routes');

const con = require('./config/db');

const app = express();

// connecting route to database
app.use(function(req: any, res: any, next: any) {
  req.con = con;
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	
	app.get('*', (req: any, res: any) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port: number|string = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

process.setMaxListeners(0);