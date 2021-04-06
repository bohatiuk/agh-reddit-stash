create schema sp1;

create table sp1.subreddits (
	id serial primary key,
	reddit_id varchar(6) not null,
   	title text not null,
	subreddit text not null,
	body text not null,
	num_comments integer not null,
    score integer not null,
	created timestamp not null
);