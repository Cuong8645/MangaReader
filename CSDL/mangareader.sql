-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 31, 2019 lúc 02:12 AM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mangareader`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `userid` int(11) NOT NULL,
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`userid`, `username`, `password`) VALUES
(1, 'cuong', '123'),
(2, 'viet', '456'),
(3, 'phuong', '789'),
(4, 'thai', '963'),
(5, 'thai', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manga`
--

CREATE TABLE `manga` (
  `manga_id` int(11) NOT NULL,
  `manga_name` text COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `manga_des` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `manga`
--

INSERT INTO `manga` (`manga_id`, `manga_name`, `image`, `manga_des`) VALUES
(1, 'Bleach', 'https://i.imgur.com/8Co4TAS.jpg', 'Thanh nien than chet'),
(2, 'Conan', 'https://i.imgur.com/zaACxnk.jpg', 'Thanh nien tham tu'),
(3, 'Boruto', 'https://i.imgur.com/Z16iX9R.jpg', 'Thanh nien nhan gia'),
(4, 'Kusuriya no Hitorigoto\r\n', 'https://i.imgur.com/75C6rLw.jpg', 'Con nho no ti'),
(5, 'Nozomanu Fushi no Boukensha', 'https://i.imgur.com/yhV1g7J.jpg', 'Thanh nien xuong'),
(6, 'Kimetsu no Yaiba', 'https://i.imgur.com/5VXWV4P.jpg', 'Thanh nien diet quy'),
(7, 'Hataraku Maousama', 'https://i.imgur.com/zEus55f.jpg', 'Quy vuong lam them'),
(8, 'Bokutachi wa benkyou ga dekinai ', 'https://i.imgur.com/HmWfKvE.jpg', 'Thanh nien lam them'),
(9, 'The Duke of Death and his Black Maid', 'https://i.imgur.com/l2fcXTS.jpg', 'Thanh nien bi nguyen'),
(10, 'Tensei Shitara Slime Datta Ken\r\n', 'https://imgur.com/epsvVBP.jpg', 'Chuyen sinh thanh slime');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mangachapter`
--

CREATE TABLE `mangachapter` (
  `mangachapterid` int(11) NOT NULL,
  `mangaid` int(11) NOT NULL,
  `chapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `mangachapter`
--

INSERT INTO `mangachapter` (`mangachapterid`, `mangaid`, `chapter`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`userid`);

--
-- Chỉ mục cho bảng `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`manga_id`);

--
-- Chỉ mục cho bảng `mangachapter`
--
ALTER TABLE `mangachapter`
  ADD PRIMARY KEY (`mangachapterid`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `manga`
--
ALTER TABLE `manga`
  MODIFY `manga_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `mangachapter`
--
ALTER TABLE `mangachapter`
  MODIFY `mangachapterid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
