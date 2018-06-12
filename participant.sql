CREATE DATABASE ParticipantDB
use ParticipantDB
GO

CREATE TABLE Participant
(
	initials nvarchar(5) PRIMARY KEY,
    name nvarchar(30),
    address nvarchar(80),
    preferredLanguage nvarchar(20)
)
GO

INSERT INTO Participant VALUES 
    ('LGF', 'Liliana Gutiérrez', 'Lejos', 'Java'),
    ('AAH', 'Alejandro Arellano', 'Por allí', 'Java'),
    ('JLV', 'José Luis Vera', 'Cerca', 'C#')
;

INSERT INTO Participant VALUES 
    ('GLG', 'Gerardo López', 'Mty', 'C#');

SELECT * FROM Participant;

delete from Participant;


BULK
INSERT Participant
FROM 'C:\\Liliana.Gutierrez\\DATOS.csv' --location with filename
WITH
(
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n'
)
GO

