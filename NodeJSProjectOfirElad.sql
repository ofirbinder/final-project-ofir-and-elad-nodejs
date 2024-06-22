-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 22, 2024 at 05:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NodeJSProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`firstName`, `lastName`, `Phone`, `email`, `password`) VALUES
('Avi', 'Dahan', '0528728577', 'avi2024@gmail.com', '123456'),
('Ben Refael', 'Hen', '0503620039', 'benrefaelhen@gmail.com', '123456'),
('Tjaron', 'Cherry', '1234', 'cherry@gmail.com', '123456'),
('Elad', 'Atias', '0542843103', 'eladatias@gmail.com', '123456'),
('John', 'Doe', '0501234567', 'john.doe@gmail.com', '123456'),
('Lior', 'Shoshan', '0503620022', 'liorshoshan@gmail.com', '123456'),
('Nofar', 'Binder', '123456666', 'nofar@gmail.com', '123456'),
('Ofir', 'Binder', '0528728577', 'ofirbinder@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `orderDate` date DEFAULT NULL,
  `orderHour` time DEFAULT NULL,
  `service` varchar(32) DEFAULT NULL,
  `emailCustomer` varchar(32) DEFAULT NULL,
  `Phone` varchar(32) DEFAULT NULL,
  `orderID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`orderDate`, `orderHour`, `service`, `emailCustomer`, `Phone`, `orderID`) VALUES
('2024-03-21', '23:00:00', 'Beard haircut', 'cherry@gmail.com', '1234', 6),
('2024-03-21', '23:00:00', 'Beard haircut', 'cherry@gmail.com', '1234', 7),
('2024-03-27', '07:00:00', 'Haircut', 'cherry@gmail.com', '1234', 34),
('2024-08-28', '12:00:00', 'Breadcut', 'cherry@gmail.com', '1234', 37),
('2024-03-14', '17:16:00', 'Haircut', 'cherry@gmail.com', '1234', 39),
('2024-03-22', '07:00:00', 'Haircut', 'cherry@gmail.com', '1234', 40),
('2024-03-22', '07:00:00', 'Full Treatment', 'cherry@gmail.com', '1234', 41),
('2024-03-22', '17:59:00', 'Haircut', 'cherry@gmail.com', '1234', 42),
('2024-03-22', '17:35:00', 'Haircut', 'eladatias@gmail.com', '0542843103', 43),
('2024-03-22', '17:37:00', 'Haircut', 'eladatias@gmail.com', '0542843103', 44),
('2024-03-22', '13:02:00', 'Breadcut', 'eladatias@gmail.com', '0542843103', 45),
('2024-03-23', '09:45:00', 'Haircut', 'eladatias@gmail.com', '0542843103', 46),
('2024-03-23', '10:45:00', 'Full Treatment', 'eladatias@gmail.com', '0542843103', 47);

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `serviceID` varchar(3) NOT NULL,
  `serviceTitle` varchar(32) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Services`
--

INSERT INTO `Services` (`serviceID`, `serviceTitle`, `price`) VALUES
('1', 'Haircut', 70.00),
('2', 'Breadcut', 60.00),
('3', 'Full Treatment', 110.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`serviceID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
