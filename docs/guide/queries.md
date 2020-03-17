# Query Files
Query files contain SQL queries to run at certain lifecycle events. 

## Files
### before_tests.sql
Will be executed before any tests are run. This is a good spot to create a database snapshot or prepare a database.

#### Example 1: Creating a database snapshot
[Reference](https://docs.microsoft.com/en-us/sql/relational-databases/databases/revert-a-database-to-a-database-snapshot?view=sql-server-ver15)
``` sql
DROP DATABASE IF EXISTS mydb_snapshot; 
CREATE DATABASE mydb_snapshot 
ON  (
    NAME = mydb, 
    FILENAME = 'C:\\mydb_snapshot.ss'
) 
AS SNAPSHOT OF mydb;
```

### after_tests.sql
Will be executed after all tests have finished. This is a good spot to rollback a database.

#### Example 1: Restoring from a database snapshot
[Reference](https://docs.microsoft.com/en-us/sql/relational-databases/databases/revert-a-database-to-a-database-snapshot?view=sql-server-ver15)
``` sql
ALTER DATABASE mydb SET SINGLE_USER WITH ROLLBACK IMMEDIATE; 
RESTORE DATABASE mydb FROM DATABASE_SNAPSHOT = 'mydb_snapshot'; 
DROP DATABASE mydb_snapshot;
```