const path = '/mock';

const login = require('./api/base/login');

module.exports = {
    [`${path}/personalCenter/login`]: login,
}
