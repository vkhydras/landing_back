const express = require('express');
const routes = require('./waitlist/route')
const cors = require('cors');
require('./waitlist/db'); // Connect to database



const app = express();
app.use(express.json());

app.use(cors());



app.use('/', routes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
