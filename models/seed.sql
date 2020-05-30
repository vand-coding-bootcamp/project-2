-- User dummy seeds
INSERT INTO Users (id, username, password, height_ft, height_in, weight, age, image, city, state, zip, createdAt, updatedAt) VALUES (1, "Joe Schmo", "password1", 6, 2, 200, 35, "https://i.ebayimg.com/images/g/4hsAAOSwFyhaGOje/s-l640.jpg", "Lebanon", "TN", "37087", "2020-05-19 00:00:00", "2020-05-19 00:00:00");
INSERT INTO Users (id, username, password, height_ft, height_in, weight, age, image, city, state, zip, createdAt, updatedAt) VALUES (2, "Jane Doe", "password2", 5, 4, 16, "https://static1.squarespace.com/static/5b77378650a54fa440e12f5e/5b9727eb21c67c537fc658cf/5c6180f3e5e5f0cc9017cd53/1549895010979/Columbia_County%2C_WI_Jane_Doe+%282%29.jpg?format=1500w", "Bartlett", "TN", "38135", "2020-05-19 00:00:00", "2020-05-19 00:00:00");
INSERT INTO Users (id, username, password, height_ft, height_in, weight, age, image, city, state, zip, createdAt, updatedAt) VALUES (3, "John Smith", "password3", 5, 10, 225, 99, "https://upload.wikimedia.org/wikipedia/commons/5/5a/John-Smith-Chippewa-Indian-c1900-1915.jpg", "Las Vegas", "NV", "66666", "2020-05-19 00:00:00", "2020-05-19 00:00:00");

-- Cardio dummy seeds
INSERT INTO Cardio (id, cardio_act, start, end, createdAt, updatedAt, userId)  VALUES (1, "running", "2020-05-15 12:00:00", "2020-05-15 13:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 1);
INSERT INTO Cardio (id, cardio_act, start, end, createdAt, updatedAt, userId)  VALUES (2, "swimming", "2020-05-16 08:00:00", "2020-05-16 09:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 2);
INSERT INTO Cardio (id, cardio_act, start, end, createdAt, updatedAt, userId)  VALUES (3, "zumba", "2020-05-18 15:00:00", "2020-05-18 16:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 3);

-- Mindful dummy seeds
INSERT INTO Mind (id, mind_act, start, end, createdAt, updatedAt, userId)  VALUES (1, "yoga", "2020-05-15 12:00:00", "2020-05-15 13:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 1);
INSERT INTO Mind (id, mind_act, start, end, createdAt, updatedAt, userId)  VALUES (2, "meditation", "2020-05-16 08:00:00", "2020-05-16 09:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 2);
INSERT INTO Mind (id, mind_act, start, end, createdAt, updatedAt, userId)  VALUES (3, "stretching", "2020-05-18 15:00:00", "2020-05-18 15:30:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 3);

-- Strength dummy seeds
INSERT INTO Strength (id, strength_act, start, end, createdAt, updatedAt, userId)  VALUES (1, "weight training", "2020-05-15 12:00:00", "2020-05-15 13:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 1);
INSERT INTO Strength (id, strength_act, start, end, createdAt, updatedAt, userId)  VALUES (2, "crossfit", "2020-05-16 08:00:00", "2020-05-16 09:00:00", "2020-05-15 12:00:00", "2020-05-15 13:00:00", 2);
INSERT INTO Strength (id, strength_act, start, end, createdAt, updatedAt, userId)  VALUES (3, "resistance bands", "2020-05-18 15:00:00", "2020-05-18 15:30:00", "2020-05-16 09:00:00", "2020-05-15 12:00:00", 3);


INSERT INTO Friends (id, friends, image, createdAt, updatedAt, userId) VALUES (6, "Stephanie", "https://upload.wikimedia.org/wikipedia/commons/5/5a/John-Smith-Chippewa-Indian-c1900-1915.jpg", "2020-05-19 00:00:00", "2020-05-19 00:00:00", 2);