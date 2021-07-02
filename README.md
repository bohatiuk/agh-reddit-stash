## *reddit-stash* is a project for AGH UST with a goal to scrape data from Reddit using PRAW and performing machine learning analysis on the fetched posts

### Front-end - 'Falcon'

### API Server with scrapper daemon - 'Canary'

### ML analysis service - category prediction

### ML analysis service - sentiment analysis

# Architecture

![Archi](./docs/archi.png?raw=true)

### How to run

1. `git clone https://github.com/bohatiuk/reddit-stash`
2. `cd reddit-stash`
3. `touch ./canary/static/secret.txt`
4. Insert credentials for your Reddit API user into newly created file:
```
user_agent=$A
client_id=$ID
client_secret=$SEC
```
5. `docker-compose up --build`
6. As per configuration containers forward ports, so one can access locally any container, for example for UI:
`localhost:5000`

PS: play with the code and tune params for your needs :)
