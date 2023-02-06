CREATE TABLE actors (
    id SERIAL primary key,
    Name VARCHAR(255) NOT NULL,
    Age INT,
    Oscars INT
);

INSERT INTO actors (Name, Age, Oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, Age, Oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, Age, Oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, Age, Oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, Age, Oscars) VALUES ('John Cho', 43, 0);