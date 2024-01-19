PRAGMA foreign_keys=off;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS `Tekst`;
DROP TABLE IF EXISTS `Raport`;
DROP TABLE IF EXISTS `Poziom`;
DROP TABLE IF EXISTS `Uzytkownik`;

-- Create Uzytkownik table
CREATE TABLE IF NOT EXISTS `Uzytkownik` (
                                            `UserID` INTEGER PRIMARY KEY,
                                            `Email` varchar(255) DEFAULT NULL,
                                            `Login` varchar(255) DEFAULT NULL,
                                            `Imie` varchar(255) DEFAULT NULL,
                                            `Nazwisko` varchar(255) DEFAULT NULL,
                                            `Rola` varchar(255) DEFAULT NULL
);

-- Create Poziom table
CREATE TABLE IF NOT EXISTS `Poziom` (
                                        `Poziom_PK` INTEGER PRIMARY KEY,
                                        `UserID` INTEGER,
                                        `Data_osiagniecia_Poziomu` date DEFAULT NULL,
                                        FOREIGN KEY (`UserID`) REFERENCES `Uzytkownik` (`UserID`)
);

-- Create Raport table
CREATE TABLE IF NOT EXISTS `Raport` (
                                        `UserID` INTEGER,
                                        `Poziom` INTEGER,
                                        `Projekt` varchar(255) DEFAULT NULL,
                                        `Skutecznosc` varchar(255) DEFAULT NULL,
                                        FOREIGN KEY (`UserID`) REFERENCES `Uzytkownik` (`UserID`),
                                        FOREIGN KEY (`Poziom`) REFERENCES `Poziom` (`Poziom_PK`)
);

-- Create Tekst table
CREATE TABLE IF NOT EXISTS `Tekst` (
                                       `UserID` INTEGER,
                                       `Tekst_przekazany_uzytkownika` text DEFAULT NULL,
                                       `Dluzsosc` INTEGER DEFAULT NULL,
                                       `Jezyk` varchar(255) DEFAULT NULL,
                                       FOREIGN KEY (`UserID`) REFERENCES `Uzytkownik` (`UserID`)
);

-- Turn on foreign key support
PRAGMA foreign_keys=on;
