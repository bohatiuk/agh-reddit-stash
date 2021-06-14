create schema sp1;

create table sp1.subreddits (
	id serial primary key,
	reddit_id varchar(6) not null unique,
   	title text not null,
   	author text not null,
	subreddit text not null,
	body text not null,
	num_comments integer not null,
    score integer not null,
	created timestamp not null
);


create table sp1.labels (
    id serial primary key,
    reddit_id varchar(6) not null references sp1.subreddits(reddit_id),
    sentiment_label text not null,
    category_label text not null
);