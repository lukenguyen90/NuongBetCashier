module.exports = {
    'secret': 'rutledge_team',
    'localhost': '127.0.0.1',
    'api_port': 9009,
    "db_conn": {
        "development": {
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'cashier',
            debug: false
        }
    }
};
