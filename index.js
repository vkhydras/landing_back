const express = require('express');
const routes = require('./waitlist/route')
require('./waitlist/db'); // Connect to database


const app = express();
app.use(express.json());


app.use('/', routes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
