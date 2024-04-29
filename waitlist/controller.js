const { Users } = require('./model');

// controller.js
const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        console.error('Error fetching buildings:', err.message);
        res.status(500).json({ error: 'Failed to fetch buildings' });
    }
}

// module.exports = getUsers;


async function addUser(req, res) {
    const { email } = req.body;
    try {
        const newUser = new Users({ email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error adding user:', err.message);
        res.status(500).json({ error: 'Failed to add user' });
    }
}

module.exports = { getUsers, addUser };
