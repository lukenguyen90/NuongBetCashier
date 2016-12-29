var mysql = require('mysql');

exports.getDesks = function(connection, done) {
    var query = "select * from ??";
    var table = ["desk"];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getDeskPos = function(connection, done) {
    var query = "select *, d.sorted as dsorted from ?? as c join ?? as d  where c.categoryId=d.categoryId and c.shopId= 1 and d.isActive=1 and c.isactive=1 order by categoryname asc";
    var table = ["category", "desk"];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getListDeskActive = function(connection, done) {
    var query = "select c.categoryname, c.categoryId, d.name, d.deskId \
                                        from ?? as c \
                                        join ?? as d \
                                        where c.categoryId=d.categoryId \
                                        and d.status=0 \
                                        and d.isactive=1 \
                                        and c.isactive=1 \
                                        and d.shopId= 1 \
                                        order by c.sorted asc";
    var table = ["category", "desk"];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getListDeskInActive = function(connection, done) {
    var query = "select c.categoryname, c.categoryId, d.name, d.deskId \
                                        from ?? as c \
                                        join ?? as d \
                                        where c.categoryId=d.categoryId \
                                        and d.status=1 \
                                        and d.isactive=1 \
                                        and c.isactive=1 \
                                        and d.shopId= 1 \
                                        order by c.sorted asc";
    var table = ["category", "desk"];
    query = mysql.format(query, table);
    connection.query(query, done);
}
