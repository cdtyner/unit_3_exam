DROP DATABASE IF EXISTS marine;
CREATE DATABASE marine;

\c marine;

CREATE TABLE researchers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  job_title VARCHAR NOT NULL
);

CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  is_mammal BOOLEAN
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  species_id INT REFERENCES species(id),
  nickname VARCHAR NOT NULL
);

CREATE TABLE habitats (
  id SERIAL PRIMARY KEY,
  category VARCHAR NOT NULL
);

CREATE TABLE taggings (
  id SERIAL PRIMARY KEY,
  animal_id INT REFERENCES animals(id) ON DELETE CASCADE,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL,
  species_id INT REFERENCES species(id) ON DELETE CASCADE,
  habitat_id INT REFERENCES habitats(id)
);

INSERT INTO researchers(id, name, job_title)
VALUES (1, 'Mariana Aleta', 'Project Lead'), (2, 'Javed Patrick', 'Senior Field Researcher'), (3, 'Carolina Itai', 'Field Researcher'),
 (4, 'Jazmyn Gottfried', 'Field Researcher'), (5, 'Ezra Flip', 'Research Intern');

INSERT INTO species(id, name, is_mammal)
VALUES (1, 'Dolphin', true), (2, 'Moray Eel', false), (3, 'Tiger Shark', false), (4, 'Orca Whale', true), (5, 'Moon Jelly', false);

INSERT INTO animals(id, nickname, species_id)
VALUES (1, 'Flip', 1), (2, 'Skip', 1), (3, 'Jenkins', 2), (4, 'Sally', 3), (5, 'Flapjack', 4), (6, 'Gibbous', 4), (7, 'Nox', 4);

INSERT INTO habitats(id, category)
VALUES(1, 'Shallows'), (2, 'Coral Reef'), (3, 'Tide Pools'), (4, 'Deeps');

INSERT INTO taggings(id, animal_id, researcher_id)
VALUES (1, 1, 5),(2, 2, 3),(3, 3, 1),(4, 4, 2),(5, 5, 4),(6, 6, 4),(7, 7, 2);

INSERT INTO sightings(id, species_id, researcher_id, habitat_id)
VALUES (1, 4, 4, 4),(2, 3, 1, 4),(3, 5, 3, 3),(4, 2, 5, 2),(5, 1, 2, 1),(6, 2, 5, 1);
