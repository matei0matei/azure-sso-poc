### DB Setup
```mysql
create database ssopoc;

use ssopoc;

create login sso_user with password = 'ssous3r@d';

create User sso_user for login sso_user;

alter role db_owner add member sso_user;

exec sp_addrolemember 'db_owner', 'sso_user';
```