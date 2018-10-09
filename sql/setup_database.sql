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

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 6, '2018-10-01 06:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 6, '2018-10-01 06:30:00', 120, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 6, '2018-10-01 08:30:00', 90, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 6, '2018-10-01 10:00:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 6, '2018-10-01 10:45:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 6, '2018-10-01 11:00:00', 240, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 6, '2018-10-01 15:00:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 6, '2018-10-01 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 6, '2018-10-01 16:20:00', 30, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 6, '2018-10-02 07:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 6, '2018-10-02 07:20:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 6, '2018-10-02 07:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 6, '2018-10-02 08:40:00', 180, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 6, '2018-10-02 11:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 6, '2018-10-02 12:00:00', 300, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 6, '2018-10-02 17:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 6, '2018-10-02 17:40:00', 20, TRUE);