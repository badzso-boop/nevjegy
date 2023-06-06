-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Jún 06. 23:07
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `ujjweb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `long_description` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `links` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `projects`
--

INSERT INTO `projects` (`id`, `title`, `short_description`, `long_description`, `links`, `folder`) VALUES
(1, 'Vote', 'Example description for Vote', 'Example description for Vote', 'github.com', 'idk'),
(2, 'Licit', 'Example description for Licit', 'Example description for Licit', 'github.com', 'idk'),
(3, 'Licit', 'Example description for Licit', 'Example description for Licit', 'github.com', 'idk'),
(4, 'Licit', 'Example description for Licit', 'Example description for Licit', 'github.com', 'idk'),
(5, 'Licit', 'Example description for Licit', 'Example description for Licit', 'github.com', 'idk');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `upcoming_projects`
--

CREATE TABLE `upcoming_projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `long_description` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `links` text COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `upcoming_projects`
--

INSERT INTO `upcoming_projects` (`id`, `title`, `short_description`, `long_description`, `links`, `folder`) VALUES
(1, 'Vote', 'Example description for Vote', 'Example description for Vote', 'github.com', 'idk'),
(2, 'Licit', 'Example description for Licit', 'Example description for Licit', 'github.com', 'idk');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `upcoming_projects`
--
ALTER TABLE `upcoming_projects`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `upcoming_projects`
--
ALTER TABLE `upcoming_projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
