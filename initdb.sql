create schema sp1;

create table sp1.subreddits (
	id serial primary key,
	reddit_id varchar(6) not null,
   	title text not null,
   	author text not null,
	subreddit text not null,
	body text not null,
	num_comments integer not null,
    score integer not null,
	created timestamp not null
);

create table sp1.category_prediction (
    id serial primary key,
    reddit_id varchar(6) not null,
    category text not null
);

create table sp1.classified (
    id serial primary key,
    title text not null,
    body text not null,
    category text not null
);