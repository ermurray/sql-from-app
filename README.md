# sql-from-app
LightHouse labs Lecture notes Web flex week 12


## Topics
- [ ] Reading/writing data using SQL (review)
- [ ] async execution of queries (pg library)
- [ ] app architecture/structure (layers)
- [ ] sql injection and how to sanitize our inputs

## SQL Syntax Review
queryAll
```sql
SELECT * FROM <table>
```

READ
```sql
SELECT * FROM <table> WHERE id = <argument>;
```
```sql
SELECT <col1>, <col2>, <col3> FROM <table> LIMIT 10;
```
EDIT
```sql
UPDATE <table> SET <column> = <value> WHERE id = <arg>;
```
Add
```sql
INSERT INTO <table> (<col1>, <col2>) VALUES (<val1>, <val2>);
```
Delete
```sql
DELETE FROM <table> WHERE id = <arg>;
```

REMOVE table
```sql
DROP TABLE IF EXISTS <table> CASCADSE;
```

