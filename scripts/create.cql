CREATE TABLE universities (
	code VARCHAR,
	name VARCHAR,
	website VARCHAR,
	PRIMARY KEY (code)
);

CREATE TABLE careers (
	id UUID,
	name VARCHAR,
	description VARCHAR,
	universityCode VARCHAR,
	PRIMARY KEY (id)
);

CREATE TABLE courses (
	id UUID,
	name VARCHAR,
	credits INT,
	cost DOUBLE,
	careerId UUID,
	PRIMARY KEY (id)
);