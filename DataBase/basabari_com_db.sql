-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2018 at 08:38 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basabari.com_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `Id` int(11) NOT NULL,
  `PostUserName` varchar(30) NOT NULL,
  `BookUserName` varchar(30) NOT NULL,
  `BookDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `houseimage`
--

CREATE TABLE `houseimage` (
  `Id` int(11) NOT NULL,
  `HouseId` int(30) NOT NULL,
  `ImageTitle` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `houseinformation`
--

CREATE TABLE `houseinformation` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `HoldingNo` varchar(50) NOT NULL,
  `Rent` int(30) NOT NULL,
  `HouseType` varchar(50) NOT NULL,
  `BedRoom` int(10) NOT NULL,
  `BathRoom` int(10) NOT NULL,
  `Area` decimal(10,0) NOT NULL,
  `Balcony` int(10) NOT NULL,
  `Drawing` tinyint(1) NOT NULL,
  `Dining` tinyint(1) NOT NULL,
  `Parking` tinyint(1) NOT NULL,
  `Lift` tinyint(1) NOT NULL,
  `Gas` tinyint(1) NOT NULL,
  `Generator` tinyint(1) NOT NULL,
  `Internet` tinyint(1) NOT NULL,
  `Intercom` tinyint(1) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `SpecialNote` varchar(300) NOT NULL,
  `HouseName` varchar(50) NOT NULL,
  `PostDate` date NOT NULL,
  `Availability` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `signin`
--

CREATE TABLE `signin` (
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Type` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signin`
--

INSERT INTO `signin` (`UserName`, `Password`, `Type`) VALUES
('RT', 'rt', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserName` varchar(30) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `AccountName` varchar(30) NOT NULL,
  `AccountNo` varchar(30) NOT NULL,
  `JoiningDate` date NOT NULL,
  `Points` int(30) NOT NULL,
  `ImageName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `houseimage`
--
ALTER TABLE `houseimage`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `houseinformation`
--
ALTER TABLE `houseinformation`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `signin`
--
ALTER TABLE `signin`
  ADD PRIMARY KEY (`UserName`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `houseimage`
--
ALTER TABLE `houseimage`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `houseinformation`
--
ALTER TABLE `houseinformation`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
