const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
