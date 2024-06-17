import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'MyData.db', location: 'default' });

const createTables = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS infoData (id INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT, userMail TEXT, userPassword TEXT)',
            [],
            (_, results) => {
                console.log('Table Created Sucess', results);
            },
            (_, error) => {
                console.log('Error Table Created ', error);
            }
        );
    });
};


const insertUser = (userName, userMail, userPassword, onSuccess, onError) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO infoData (userName, userMail, userPassword) VALUES(?,?,?)',
            [userName, userMail, userPassword],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


const getUser = (userName, userPassword, onSuccess, onError) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * From infoData WHERE userName = ? AND userPassword = ?',
            [userName, userPassword],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


export { createTables, insertUser, getUser };