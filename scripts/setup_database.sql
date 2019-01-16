SET client_encoding = 'UTF8';

DROP TABLE IF EXISTS friendship;
DROP TABLE IF EXISTS tracked_activity;
DROP TABLE IF EXISTS activity_invitation;
DROP TABLE IF EXISTS activity_blueprint;
DROP TABLE IF EXISTS app_user;
DROP TABLE IF EXISTS suggestion_settings;

CREATE TABLE app_user (
user_id varchar(64) primary key,
name varchar(64) NOT NULL,
device_token varchar(255) NULL
);

CREATE TABLE suggestion_settings (
id SERIAL PRIMARY KEY,
interval integer NOT NULL,
active boolean NULL
);

CREATE TABLE activity_blueprint (
activity_blueprint_id SERIAL primary key,
name varchar(32) NOT NULL UNIQUE
);

CREATE TABLE activity_invitation (
invitation_id SERIAL PRIMARY KEY,
activity_blueprint_id integer references activity_blueprint(activity_blueprint_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
inviter_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
invitee_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
accepted boolean DEFAULT false
);

CREATE TABLE tracked_activity (
tracked_activity_id SERIAL primary key,
activity_blueprint_id integer references activity_blueprint(activity_blueprint_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
time_start timestamp NOT NULL,
duration_minutes int8 CHECK (duration_minutes >= 0),
public_visibility boolean DEFAULT false
);

CREATE TABLE friendship (
friendship_id SERIAL primary key,
inviter_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
invitee_user_id varchar(64) references app_user(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
accepted boolean DEFAULT false
);

INSERT INTO app_user (user_id, name, device_token) VALUES ('lXjpqtpXb6aImbfxaP7wzNa8nsB3', 'Ann Vesnenok', null);
INSERT INTO app_user (user_id, name, device_token) VALUES ('JhuhxY6OwKd0Cw3ujvYuuejVzMG3', 'Mirela Goranova', null);
INSERT INTO app_user (user_id, name, device_token) VALUES ('YC3FEaY113ft4sLtiuqVtrhv8G43', 'Iana Florea', null);
INSERT INTO app_user (user_id, name, device_token) VALUES ('JuiR58vYTtWEnIoORLxv3OCxgF32', 'Veselin Slavchev',null);

INSERT INTO suggestion_settings (interval, active) VALUES (15, true);

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
INSERT INTO activity_blueprint (name) VALUES ('reading');-- Vesi's October activities
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 06:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 06:30:00', 120, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 08:30:00', 90, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 10:00:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 10:45:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 11:00:00', 240, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 15:00:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-01 16:20:00', 30, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 07:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 07:20:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 07:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 08:40:00', 180, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 11:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 12:00:00', 300, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 17:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'JuiR58vYTtWEnIoORLxv3OCxgF32', '2018-10-02 17:40:00', 20, TRUE);

-- Iana's January activities
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 06:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 06:30:00', 120, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 08:30:00', 90, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 10:00:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 10:45:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 11:00:00', 240, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 15:00:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 16:20:00', 30, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 07:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 07:20:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 07:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 08:40:00', 180, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 11:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 12:00:00', 300, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 17:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 17:40:00', 20, TRUE);

-- Iana's January activities
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 06:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 06:30:00', 120, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 08:30:00', 90, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 10:00:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 10:45:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 11:00:00', 240, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 15:00:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 16:20:00', 30, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 07:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 07:20:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 07:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 08:40:00', 180, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 11:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 12:00:00', 300, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 17:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 17:40:00', 20, TRUE);

-- Mirela's January activities

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-12 15:00:00', 10, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-12 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-12 16:20:00', 30, TRUE);

-- Anechka's January activities

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (1, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 15:00:00', 17, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 16:00:00', 22, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (4, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 16:20:00', 9, TRUE);
