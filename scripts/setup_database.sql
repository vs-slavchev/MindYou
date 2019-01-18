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

INSERT INTO app_user (user_id, name, device_token) VALUES ('lXjpqtpXb6aImbfxaP7wzNa8nsB3', 'Ann Vesnenok', 'evFz66C6Eto:APA91bEFlYGA8ZJCgWr2uH0innPYo-o5mqIR1SA8mG_pt6V3vxfhsWKzGqK5FrBd8vP6k1L3bDIAlLqlKqUtVw5FMKSZ4gRsK6NKZddIwJZbXo-Fg_k-AiwqwMeyNrCumdP6HJVr0HbP');
INSERT INTO app_user (user_id, name, device_token) VALUES ('JhuhxY6OwKd0Cw3ujvYuuejVzMG3', 'Mirela Goranova', 'dR1pIc6a1cM:APA91bGiEdPpNv0vOpe_Gaj8EChRvWleZnEASu9wYj_Dw28ZvrFYn1GKiauEyjS_to4EmksJ0JGXvU03_zstAlcFx1E4F8cvpt4yeowfa3fIihE8lmhz41b9IH9Id1tTbiIMetumP56I');
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
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 10:45:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 11:00:00', 240, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (12, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 15:00:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 16:20:00', 30, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 07:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 07:20:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-04 07:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-05 08:40:00', 60, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (9, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-07 11:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-08 12:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 17:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (4, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 12:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-14 13:30:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (4, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-15 15:40:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-18 12:40:00', 50, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-19 17:20:00', 65, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-20 13:50:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-21 17:30:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-22 12:30:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-23 12:20:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-24 13:50:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-25 14:30:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-26 15:40:00', 25, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-27 18:30:00', 75, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-28 20:20:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-29 21:30:00', 50, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-30 01:30:00', 35, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2018-12-31 07:40:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 10:40:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-02 20:20:00', 25, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-03 17:30:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-04 12:40:00', 35, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-05 17:20:00', 25, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-06 17:30:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-07 17:20:00', 25, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-08 17:30:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-09 12:40:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-10 17:20:00', 55, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-11 17:30:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-12 13:50:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-13 12:40:00', 25, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-14 13:30:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-15 15:40:00', 45, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-16 12:40:00', 35, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-17 17:20:00', 15, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (10, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-18 17:30:00', 10, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-18 12:45:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-18 21:20:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-18 16:45:00', 45, TRUE);

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 06:00:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 06:30:00', 120, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (5, 'YC3FEaY113ft4sLtiuqVtrhv8G43', '2019-01-01 08:30:00', 90, TRUE);
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
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-13 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (2, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-14 16:20:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (1, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-02 15:00:00', 10, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (4, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-03 16:00:00', 20, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2019-01-04 15:15:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2018-12-19 15:00:00', 10, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (11, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2018-12-23 16:20:00', 30, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (6, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2018-12-27 15:00:00', 10, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (7, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2018-12-28 16:00:00', 40, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (8, 'JhuhxY6OwKd0Cw3ujvYuuejVzMG3', '2018-12-30 16:20:00', 35, TRUE);


-- Anechka's January activities

INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (1, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 15:00:00', 17, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (3, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 16:00:00', 22, TRUE);
INSERT INTO tracked_activity (activity_blueprint_id, user_id, time_start, duration_minutes, public_visibility) VALUES (4, 'lXjpqtpXb6aImbfxaP7wzNa8nsB3', '2019-01-12 16:20:00', 9, TRUE);
