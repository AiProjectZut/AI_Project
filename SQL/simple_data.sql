-- Dodawanie przykładowych danych do tabeli Uzytkownik
INSERT INTO Uzytkownik (Email, Login, Imie, Nazwisko, Rola)
VALUES
    ('jan.kowalski@example.com', 'jan123', 'Jan', 'Kowalski', 'Użytkownik'),
    ('anna.nowak@example.com', 'anna456', 'Anna', 'Nowak', 'Użytkownik'),
    ('piotr.wisniewski@example.com', 'piotr789', 'Piotr', 'Wiśniewski', 'Użytkownik');

-- Dodawanie przykładowych danych do tabeli Poziom
INSERT INTO Poziom (UserID, Data_osiagniecia_Poziomu)
VALUES
    (1, '2024-01-20'),
    (2, '2024-01-21'),
    (3, '2024-01-22');

-- Dodawanie przykładowych danych do tabeli Raport
INSERT INTO Raport (UserID, Poziom, Skutecznosc, Predkosc, Dokladnosc)
VALUES
    (1, 1, 'Dobra', 45, 90),
    (2, 2, 'Bardzo dobra', 50, 95),
    (3, 3, 'Świetna', 60, 98);

-- Dodawanie przykładowych danych do tabeli Tekst
INSERT INTO Tekst (UserID, Tekst_przekazany_uzytkownika, Dlugosc, Zlozonosc, Jezyk)
VALUES
    (1, 'To jest pierwszy tekst użytkownika.', 100, 'Łatwy', 'Polski'),
    (2, 'This is the second user-provided text.', 120, 'Średni', 'Angielski'),
    (3, 'Hier ist der dritte vom Benutzer bereitgestellte Text.', 150, 'Trudny', 'Niemiecki');
