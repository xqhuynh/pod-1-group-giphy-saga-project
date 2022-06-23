CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Display record
SELECT * FROM category;


--favorite gif table
CREATE TABLE "favorite_gif"(
"id" SERIAL PRIMARY KEY,
"giphyId" VARCHAR,
"categoryId" INT REFERENCES category
);

--values to insert
INSERT INTO favorite_gif ("giphyId","categoryId")
VALUES ('xTiTnf9SCIVk8HIvE4',1),('3o7527pa7qs9kCG78A',1),('4Zo41lhzKt6iZ8xff9',3)