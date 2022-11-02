DROP TABLE IF EXISTS person;

CREATE TABLE person (
    name VARCHAR NOT NULL,
    age INT NOT NULL,
    householdamount INT NOT NULL
);

DROP TABLE IF EXISTS house;

CREATE TABLE house (
    addressid VARCHAR NOT NULL,
    owner VARCHAR NOT NULL
);

DROP TABLE IF EXISTS homeaddress;

CREATE TABLE homeaddress(
    addressid VARCHAR NOT NULL,
    postcode VARCHAR NOT NULL,
    streetaddress VARCHAR NOT NULL
);
