-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2018 at 01:31 PM
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
  `HouseId` int(30) NOT NULL,
  `PostUserName` varchar(30) NOT NULL,
  `BookUserName` varchar(30) NOT NULL,
  `BookDate` date NOT NULL,
  `BookStatus` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`Id`, `HouseId`, `PostUserName`, `BookUserName`, `BookDate`, `BookStatus`) VALUES
(11, 1, 'tanim', 'robi', '2018-07-20', 1),
(13, 5, 'Rezaul', 'tanim', '2018-07-11', 0);

-- --------------------------------------------------------

--
-- Table structure for table `houseimage`
--

CREATE TABLE `houseimage` (
  `Id` int(11) NOT NULL,
  `HouseId` int(30) NOT NULL,
  `ImageTitle` varchar(100) NOT NULL
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
  `TitleImage` varchar(100) NOT NULL,
  `TotalView` int(20) NOT NULL,
  `Availability` tinyint(1) NOT NULL,
  `Lat` double NOT NULL,
  `Lng` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `houseinformation`
--

INSERT INTO `houseinformation` (`Id`, `UserName`, `Location`, `HoldingNo`, `Rent`, `HouseType`, `BedRoom`, `BathRoom`, `Area`, `Balcony`, `Drawing`, `Dining`, `Parking`, `Lift`, `Gas`, `Generator`, `Internet`, `Intercom`, `Phone`, `SpecialNote`, `HouseName`, `PostDate`, `TitleImage`, `TotalView`, `Availability`, `Lat`, `Lng`) VALUES
(1, 'Robi', 'Kuril,Dhaka', 'ka/129', 22500, 'Building', 3, 2, '800', 2, 1, 0, 1, 0, 1, 0, 0, 0, '01679420786', 'Must be StudentasDadscscjscijdsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcdvfvfvfv fghbbhfhcgvjbknxfcv fcvb', 'Rajjak Vila', '2018-07-09', '1.jpg', 94, 1, 22, 90),
(4, 'tanim', 'Jatrabari,Dhaka', '34/A', 17000, 'Building', 4, 2, '900', 2, 1, 0, 1, 0, 0, 1, 1, 1, '0167345456', 'Only for Hindu', 'Sri House', '2018-07-03', '4.jpg', 6, 0, 23, 90),
(5, 'tanim', 'Khilgaon,Dhaka', '34/A', 7000, 'Tin Shade', 4, 2, '900', 2, 1, 0, 1, 0, 0, 1, 1, 1, '0167345456', 'Only for Hindu', 'Sri House', '2018-07-03', '5.jpg', 83, 1, 23, 90.5),
(6, 'tanim', 'asds', '', 0, '', 0, 0, '0', 0, 1, 0, 1, 1, 1, 1, 0, 1, '', '', '', '2018-07-11', '07_11_201815_33_58.png', 0, 1, 24, 90),
(7, 'tanim', 'asds', '', 0, '', 0, 0, '0', 0, 1, 0, 1, 1, 1, 1, 0, 1, '', '', '', '2018-07-11', '07_11_201815_33_58.png', 0, 1, 0, 0),
(8, 'tanim', '', '', 0, '', 0, 0, '0', 0, 1, 1, 1, 0, 0, 1, 1, 1, '', '', '', '2018-07-11', '07_11_201815_46_40.jpeg', 38, 1, 23.8103, 90.4125),
(9, 'Robi', 'comilla', '45', 45600, 'Dupplex', 6, 4, '1500', 7, 1, 1, 1, 1, 1, 1, 0, 0, '0167345678', '', 'Tanim Vila', '2018-07-04', '10.jpg', 0, 1, 22, 90),
(10, 'Robi', 'comilla', 'r44', 4600, 'Tin Shade', 6, 4, '1500', 7, 0, 1, 1, 0, 1, 1, 0, 0, '0167345678', '', 'Robi Vila', '2018-07-04', '10.jpg', 0, 1, 23, 90),
(11, 'Robi', 'Dhaka', '45/f', 25600, 'Dupplex', 4, 2, '1000', 2, 1, 1, 1, 1, 1, 1, 0, 0, '0167345678', '', 'Tanim Vila', '2018-07-04', '10.jpg', 0, 1, 25, 90);

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
('efti', 'e', 2),
('rajesh', 'r', 2),
('Robi', 'r', 2),
('Tanim', 't', 2);

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
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserName`, `Name`, `Email`, `Phone`, `Address`, `AccountName`, `AccountNo`, `JoiningDate`, `Points`, `ImageName`) VALUES
('efti', 'efti', 'efti@gmail.com', '0197546775', 'mirpur, dhaka', '76543', '65432', '2018-07-10', 443, 'efti.jpg'),
('rajesh', 'rajesh', 'rajesh@gmail.com', '0197546775', 'mirpur, dhaka', '76543', '65432', '2018-07-10', 443, 'rajesh.jpg'),
('Robi', 'robi', 'robiullah2244@gmail.com', '008801679420786', 'Uttara,Dhaka', '', '', '2018-07-04', 0, 'robi.jpg'),
('Tanim', 'tanim', 'tanim@gmail.com', '0177233678', 'Kuril,Dhaka', '', '', '2018-07-03', 0, 'tanim.jpg');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `houseimage`
--
ALTER TABLE `houseimage`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `houseinformation`
--
ALTER TABLE `houseinformation`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
