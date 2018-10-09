DROP TABLE IF EXISTS friendship;
DROP TABLE IF EXISTS tracked_activity;
DROP TABLE IF EXISTS activity_blueprint;
DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
user_id int8 primary key,
name varchar(64) NOT NULL
);

CREATE TABLE activity_blueprint (
activity_blueprint_id SERIAL primary key,
name varchar(32) NOT NULL UNIQUE
);

CREATE TABLE tracked_activity (
tracked_activity_id SERIAL primary key,
activity_blueprint_id integer references activity_blueprint(activity_blueprint_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
user_id int8 references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
time_start timestamp NOT NULL,
duration_minutes int8 CHECK (duration_minutes >= 0),
public_visibility boolean DEFAULT false
);

CREATE TABLE friendship (
friendship_id int8 primary key,
inviter_user_id int8 references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
invitee_user_id int8 references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
accepted boolean DEFAULT false
);

INSERT INTO app_user (user_id, name) VALUES (1, 'Anechka');
INSERT INTO app_user (user_id, name) VALUES (2, 'Juraj Korbachka');
INSERT INTO app_user (user_id, name) VALUES (3, 'Mirela');
INSERT INTO app_user (user_id, name) VALUES (4, 'Iana');
INSERT INTO app_user (user_id, name) VALUES (5, 'Linh');
INSERT INTO app_user (user_id, name) VALUES (6, 'Veselin');

INSERT INTO activity_blueprint (name) VALUES ('swimming');
INSERT INTO activity_blueprint (name) VALUES ('cooking');
INSERT INTO activity_blueprint (name) VALUES ('gym');
INSERT INTO activity_blueprint (name) VALUES ('running');
INSERT INTO activity_blueprint (name) VALUES ('studying');
INSERT INTO activity_blueprint (name) VALUES ('cleaning');
INSERT INTO activity_blueprint (name) VALUES ('working');
INSERT INTO activity_blueprint (name) VALUES ('commuting');
INSERT INTO activity_blueprint (name) VALUES ('eating');
INSERT INTO activity_blueprint (name) VALUES ('music');
INSERT INTO activity_blueprint (name) VALUES ('bbq');
INSERT INTO activity_blueprint (name) VALUES ('reading');