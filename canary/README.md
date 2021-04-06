### Info
Canary is a backend service, that should be run in the background. 

Service is scraping reddit data and inserts it into postgres db


### Postgres configuration

1. Create schema and table as from static/subreddits_dum.sql
2. Create file static/postgres.txt:
```
host=localhost
database={YOUR_POSTGRES_DB_NAME}
user={YOUR_USER_NAME}
password={YOUR_PASSWORD_FOR_CLUSTER}
```

### Add Reddit API secret

Create file static/secret.txt:
```
user_agent={AGENT}
client_id={CLIENT_ID}
client_secret={CLIENT_SECRET}
```

### Install dependencies

```
pip install -r requirements.txt
```

### Run service

```
python canary.py
```