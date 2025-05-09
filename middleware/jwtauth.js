const jwt = require('jsonwebtoken');

function authenticateRole(role) {
    return (req, res, next) => {

        const token = req.header.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authorization token is required' });
        }

        try {

            const decoded = jwt.verify(token,process.env.SECRET_KEY);
            const userRole = decoded.role;


            if (userRole !== role) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
}



function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
        role: user.role 
    };

    const options = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, "12345", options);
    return token;
}

module.exports = { generateToken , authenticateRole};

