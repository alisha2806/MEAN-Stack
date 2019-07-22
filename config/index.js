var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {

        return 'mongodb+srv://test:' + configValues.pwd + '@alisha-wzvoi.mongodb.net/test?retryWrites=true&w=majority';
    }

}