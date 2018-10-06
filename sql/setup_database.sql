CREATE TABLE app_user (
user_id varchar(64) primary key,
name varchar(64) NOT NULL
);

CREATE TABLE activity_blueprint (
activity_blueprint_id int8 primary key,
name varchar(32) NOT NULL UNIQUE
);

CREATE TABLE tracked_activity (
tracked_activity_id int8 primary key,
activity_blueprint_id int8 references activity_blueprint(activity_blueprint_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
time_start timestamp NOT NULL,
duration_minutes int4 CHECK (duration_minutes >= 0),
public_visibility boolean DEFAULT false
);

CREATE TABLE friendship (
friendship_id int8 primary key,
inviter_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
invitee_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
accepted boolean DEFAULT false
);