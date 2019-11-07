-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 07, 2019 lúc 01:50 AM
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
  `id` int(11) NOT NULL,
  `username` varchar(11) COLLATE utf8_bin NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `username`, `password`) VALUES
(1, 'vietle', 123);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chapter`
--

CREATE TABLE `chapter` (
  `id` int(11) NOT NULL,
  `id_Manga` int(11) NOT NULL,
  `ngayXuatBan` date NOT NULL,
  `soChapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Đang đổ dữ liệu cho bảng `chapter`
--

INSERT INTO `chapter` (`id`, `id_Manga`, `ngayXuatBan`, `soChapter`) VALUES
(1, 1, '2019-11-21', 4),
(2, 1, '2019-11-19', 3),
(3, 1, '2019-11-19', 2),
(4, 2, '2019-11-27', 1),
(5, 1, '2019-11-21', 1),
(6, 3, '2019-11-07', 1),
(7, 4, '2019-11-07', 1),
(8, 5, '2019-11-07', 1),
(9, 6, '2019-11-07', 1),
(10, 7, '2019-11-07', 1),
(11, 8, '2019-11-07', 1),
(12, 9, '2019-11-07', 1),
(13, 10, '2019-11-07', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imagemanga`
--

CREATE TABLE `imagemanga` (
  `id` int(11) NOT NULL,
  `trang` int(11) NOT NULL,
  `image` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_ChapTer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Đang đổ dữ liệu cho bảng `imagemanga`
--

INSERT INTO `imagemanga` (`id`, `trang`, `image`, `id_ChapTer`) VALUES
(1, 1, 'http://imageinstant.com/data/images/24423/491545/010.jpg', 1),
(2, 2, 'http://imageinstant.com/data/images/24423/491545/010.jpg', 1),
(3, 1, 'http://imageinstant.com/data/images/24423/491545/012.jpg', 3),
(4, 2, 'http://imageinstant.com/data/images/24423/491545/013.jpg', 3),
(5, 3, 'http://imageinstant.com/data/images/24423/491545/014.jpg', 3),
(6, 4, 'http://imageinstant.com/data/images/24423/491545/015.jpg', 3),
(7, 5, 'http://imageinstant.com/data/images/24423/491545/015.jpg', 3),
(8, 6, 'http://imageinstant.com/data/images/24423/491545/016.jpg', 3),
(9, 7, 'http://imageinstant.com/data/images/24423/491545/017.jpg', 3),
(10, 8, 'http://imageinstant.com/data/images/24423/491545/018.jpg', 3),
(11, 9, 'http://imageinstant.com/data/images/24423/491545/019.jpg', 3),
(12, 1, 'http://cdnqq.xyz/141/1/0.jpg?truyen=m616213213', 2),
(13, 2, 'http://cdnqq.xyz/141/1/1.jpg?truyen=m616213213', 2),
(14, 3, 'http://cdnqq.xyz/141/1/2.jpg?truyen=m616213213', 2),
(15, 4, 'http://cdnqq.xyz/141/1/3.jpg?truyen=m616213213', 2),
(16, 5, 'http://cdnqq.xyz/141/1/4.jpg?truyen=m616213213', 2),
(17, 6, 'http://cdnqq.xyz/141/1/5.jpg?truyen=m616213213', 2),
(18, 7, 'http://cdnqq.xyz/141/1/6.jpg?truyen=m616213213', 2),
(19, 8, 'http://cdnqq.xyz/141/1/7.jpg?truyen=m616213213', 2),
(20, 9, 'http://cdnqq.xyz/141/1/8.jpg?truyen=m616213213', 2),
(21, 10, 'http://cdnqq.xyz/141/1/9.jpg?truyen=m616213213', 2),
(22, 1, 'http://cdnqq.xyz/141/2/1.jpg?truyen=m616213213', 4),
(23, 2, 'http://cdnqq.xyz/141/2/2.jpg?truyen=m616213213', 4),
(24, 3, 'http://cdnqq.xyz/141/2/3.jpg?truyen=m616213213', 4),
(25, 4, 'http://cdnqq.xyz/141/2/4.jpg?truyen=m616213213', 4),
(26, 5, 'http://cdnqq.xyz/141/2/5.jpg?truyen=m616213213', 4),
(27, 6, 'http://cdnqq.xyz/141/2/6.jpg?truyen=m616213213', 4),
(28, 7, 'http://cdnqq.xyz/141/2/7.jpg?truyen=m616213213', 4),
(29, 8, 'http://cdnqq.xyz/141/2/9.jpg?truyen=m616213213', 4),
(30, 9, 'http://cdnqq.xyz/141/2/10.jpg?truyen=m616213213', 4),
(31, 10, 'http://cdnqq.xyz/141/2/11.jpg?truyen=m616213213', 4),
(32, 1, 'http://cdnqq.xyz/141/3/1.jpg?truyen=m616213213', 5),
(33, 2, 'http://cdnqq.xyz/141/3/2.jpg?truyen=m616213213', 5),
(34, 3, 'http://cdnqq.xyz/141/3/3.jpg?truyen=m616213213', 5),
(35, 4, 'http://cdnqq.xyz/141/3/4.jpg?truyen=m616213213', 5),
(36, 5, 'http://cdnqq.xyz/141/3/5.jpg?truyen=m616213213', 5),
(37, 6, 'http://cdnqq.xyz/141/3/6.jpg?truyen=m616213213', 5),
(38, 7, 'http://cdnqq.xyz/141/3/7.jpg?truyen=m616213213', 5),
(39, 8, 'http://cdnqq.xyz/141/3/8.jpg?truyen=m616213213', 5),
(40, 9, 'http://cdnqq.xyz/141/3/9.jpg?truyen=m616213213', 5),
(41, 10, 'http://cdnqq.xyz/141/3/10.jpg?truyen=m616213213', 5),
(42, 1, 'http://cdnqq.xyz/141/4/1.png?truyen=m616213213', 6),
(43, 2, 'http://cdnqq.xyz/141/4/2.png?truyen=m616213213', 6),
(44, 3, 'http://cdnqq.xyz/141/4/3.png?truyen=m616213213', 6),
(45, 4, 'http://cdnqq.xyz/141/4/4.png?truyen=m616213213', 6),
(46, 5, 'http://cdnqq.xyz/141/4/5.png?truyen=m616213213', 6),
(47, 6, 'http://cdnqq.xyz/141/4/6.png?truyen=m616213213', 6),
(48, 7, 'http://cdnqq.xyz/141/4/7.png?truyen=m616213213', 6),
(49, 8, 'http://cdnqq.xyz/141/4/8.png?truyen=m616213213', 6),
(50, 9, 'http://cdnqq.xyz/141/4/9.png?truyen=m616213213', 6),
(51, 10, 'http://cdnqq.xyz/141/4/10.png?truyen=m616213213', 6),
(52, 1, 'http://cdnqq.xyz/141/5/1.jpg?truyen=m616213213', 7),
(53, 2, 'http://cdnqq.xyz/141/5/2.jpg?truyen=m616213213', 7),
(54, 3, 'http://cdnqq.xyz/141/5/3.jpg?truyen=m616213213', 7),
(55, 4, 'http://cdnqq.xyz/141/5/4.jpg?truyen=m616213213', 7),
(56, 5, 'http://cdnqq.xyz/141/5/5.jpg?truyen=m616213213', 7),
(57, 6, 'http://cdnqq.xyz/141/5/6.jpg?truyen=m616213213', 7),
(58, 7, 'http://cdnqq.xyz/141/5/7.jpg?truyen=m616213213', 7),
(59, 8, 'http://cdnqq.xyz/141/5/8.jpg?truyen=m616213213', 7),
(60, 9, 'http://cdnqq.xyz/141/5/9.jpg?truyen=m616213213', 7),
(61, 10, 'http://cdnqq.xyz/141/5/10.jpg?truyen=m616213213', 7),
(62, 1, 'http://cdnqq.xyz/141/6/1.jpg?truyen=m616213213', 8),
(63, 2, 'http://cdnqq.xyz/141/6/2.jpg?truyen=m616213213', 8),
(64, 3, 'http://cdnqq.xyz/141/6/3.jpg?truyen=m616213213', 8),
(65, 4, 'http://cdnqq.xyz/141/6/4.jpg?truyen=m616213213', 8),
(66, 5, 'http://cdnqq.xyz/141/6/5.jpg?truyen=m616213213', 8),
(67, 6, 'http://cdnqq.xyz/141/6/6.jpg?truyen=m616213213', 8),
(68, 7, 'http://cdnqq.xyz/141/6/7.jpg?truyen=m616213213', 8),
(69, 8, 'http://cdnqq.xyz/141/6/8.jpg?truyen=m616213213', 8),
(70, 9, 'http://cdnqq.xyz/141/6/9.jpg?truyen=m616213213', 8),
(71, 10, 'http://cdnqq.xyz/141/6/10.jpg?truyen=m616213213', 8),
(72, 1, 'http://cdnqq.xyz/141/7/1.jpg?truyen=m616213213', 9),
(73, 2, 'http://cdnqq.xyz/141/7/2.jpg?truyen=m616213213', 9),
(74, 3, 'http://cdnqq.xyz/141/7/3.jpg?truyen=m616213213', 9),
(75, 4, 'http://cdnqq.xyz/141/7/4.jpg?truyen=m616213213', 9),
(76, 5, 'http://cdnqq.xyz/141/7/5.jpg?truyen=m616213213', 9),
(77, 6, 'http://cdnqq.xyz/141/7/6.jpg?truyen=m616213213', 9),
(78, 7, 'http://cdnqq.xyz/141/7/7.jpg?truyen=m616213213', 9),
(79, 8, 'http://cdnqq.xyz/141/7/8.jpg?truyen=m616213213', 9),
(80, 9, 'http://cdnqq.xyz/141/7/9.jpg?truyen=m616213213', 9),
(81, 10, 'http://cdnqq.xyz/141/7/10.jpg?truyen=m616213213', 9),
(82, 1, 'http://cdnqq.xyz/141/8/1.jpg?truyen=m616213213', 10),
(83, 2, 'http://cdnqq.xyz/141/8/2.jpg?truyen=m616213213', 10),
(84, 3, 'http://cdnqq.xyz/141/8/3.jpg?truyen=m616213213', 10),
(85, 4, 'http://cdnqq.xyz/141/8/4.jpg?truyen=m616213213', 10),
(86, 5, 'http://cdnqq.xyz/141/8/5.jpg?truyen=m616213213', 10),
(87, 6, 'http://cdnqq.xyz/141/8/6.jpg?truyen=m616213213', 10),
(88, 7, 'http://cdnqq.xyz/141/8/7.jpg?truyen=m616213213', 10),
(89, 8, 'http://cdnqq.xyz/141/8/8.jpg?truyen=m616213213', 10),
(90, 9, 'http://cdnqq.xyz/141/8/9.jpg?truyen=m616213213', 10),
(91, 10, 'http://cdnqq.xyz/141/8/10.jpg?truyen=m616213213', 10),
(92, 1, 'http://cdnqq.xyz/141/9/1.jpg?truyen=m616213213', 11),
(93, 2, 'http://cdnqq.xyz/141/9/2.jpg?truyen=m616213213', 11),
(94, 3, 'http://cdnqq.xyz/141/9/3.jpg?truyen=m616213213', 11),
(95, 4, 'http://cdnqq.xyz/141/9/4.jpg?truyen=m616213213', 11),
(96, 5, 'http://cdnqq.xyz/141/9/5.jpg?truyen=m616213213', 11),
(97, 6, 'http://cdnqq.xyz/141/9/6.jpg?truyen=m616213213', 11),
(98, 7, 'http://cdnqq.xyz/141/9/7.jpg?truyen=m616213213', 11),
(99, 8, 'http://cdnqq.xyz/141/9/8.jpg?truyen=m616213213', 11),
(100, 9, 'http://cdnqq.xyz/141/9/9.jpg?truyen=m616213213', 11),
(101, 10, 'http://cdnqq.xyz/141/9/10.jpg?truyen=m616213213', 11),
(102, 1, 'http://cdnqq.xyz/141/10/1.jpg?truyen=m616213213', 12),
(103, 2, 'http://cdnqq.xyz/141/10/2.jpg?truyen=m616213213', 12),
(104, 3, 'http://cdnqq.xyz/141/10/3.jpg?truyen=m616213213', 12),
(105, 4, 'http://cdnqq.xyz/141/10/4.jpg?truyen=m616213213', 12),
(106, 5, 'http://cdnqq.xyz/141/10/5.jpg?truyen=m616213213', 12),
(107, 6, 'http://cdnqq.xyz/141/10/6.jpg?truyen=m616213213', 12),
(108, 7, 'http://cdnqq.xyz/141/10/7.jpg?truyen=m616213213', 12),
(109, 8, 'http://cdnqq.xyz/141/10/8.jpg?truyen=m616213213', 12),
(110, 9, 'http://cdnqq.xyz/141/10/9.jpg?truyen=m616213213', 12),
(111, 10, 'http://cdnqq.xyz/141/10/10.jpg?truyen=m616213213', 13),
(112, 1, 'http://cdnqq.xyz/141/11/1.jpg?truyen=m616213213', 13),
(113, 2, 'http://cdnqq.xyz/141/11/2.jpg?truyen=m616213213', 13),
(114, 3, 'http://cdnqq.xyz/141/11/3.jpg?truyen=m616213213', 13),
(115, 4, 'http://cdnqq.xyz/141/11/4.jpg?truyen=m616213213', 13),
(116, 5, 'http://cdnqq.xyz/141/11/5.jpg?truyen=m616213213', 13),
(117, 6, 'http://cdnqq.xyz/141/11/6.jpg?truyen=m616213213', 13),
(118, 7, 'http://cdnqq.xyz/141/11/7.jpg?truyen=m616213213', 13),
(119, 8, 'http://cdnqq.xyz/141/11/8.jpg?truyen=m616213213', 13),
(120, 9, 'http://cdnqq.xyz/141/11/9.jpg?truyen=m616213213', 13),
(121, 10, 'http://cdnqq.xyz/141/11/10.jpg?truyen=m616213213', 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manga`
--

CREATE TABLE `manga` (
  `manga_id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `manga_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `manga_des` text COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL,
  `theloai` varchar(20) COLLATE utf8_bin NOT NULL,
  `tacgia` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Đang đổ dữ liệu cho bảng `manga`
--

INSERT INTO `manga` (`manga_id`, `manga_name`, `manga_des`, `image`, `theloai`, `tacgia`) VALUES
(00000000001, 'mangaName1', 'manga description', 'http://st.nettruyen.com/data/comics/138/tai-sinh-thanh-nhen.jpg', 'fgfgfgf', 'adahahahhjerj'),
(00000000002, 'ehzerhzedrhzdr', 'xrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtjxrhzdrjzdrjzxzrtj', 'http://st.nettruyen.com/data/comics/83/genocide-online-playtime-diary-of-an-evi-7215.jpg', 'dmrtztrm', 'tmsrtmsrtm'),
(00000000003, 'Bleach', 'Thanh nien than chet', 'https://i.imgur.com/8Co4TAS.jpg', 'isekai', 'noname'),
(00000000004, 'Conan', 'Thanh nien tham tu', 'https://i.imgur.com/zaACxnk.jpg', 'isekai', 'noname'),
(00000000005, 'Boruto', 'Thanh nien nhan gia', 'https://i.imgur.com/Z16iX9R.jpg', 'isekai', 'noname'),
(00000000006, 'Kusuriya no Hitorigoto\r\n', 'Con nho no ti', 'https://i.imgur.com/75C6rLw.jpg', 'isekai', 'noname'),
(00000000007, 'Nozomanu Fushi no Boukensha', 'Thanh nien xuong', 'https://i.imgur.com/yhV1g7J.jpg', 'isekai', 'noname'),
(00000000008, 'Kimetsu no Yaiba', 'Thanh nien diet quy', 'https://i.imgur.com/5VXWV4P.jpg', 'isekai', 'noname'),
(00000000009, 'Hataraku Maousama', 'Quy vuong lam them', 'https://i.imgur.com/zEus55f.jpg', 'isekai', 'noname'),
(00000000010, 'Bokutachi wa benkyou ga dekinai ', 'Thanh nien lam them', 'https://i.imgur.com/HmWfKvE.jpg', 'isekai', 'noname'),
(00000000011, 'The Duke of Death and his Black Maid', 'Thanh nien bi nguyen', 'https://i.imgur.com/l2fcXTS.jpg', 'isekai', 'noname'),
(00000000012, 'Tensei Shitara Slime Datta Ken\r\n', 'Chuyen sinh thanh slime', 'https://imgur.com/epsvVBP.jpg', 'isekai', 'noname');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `imagemanga`
--
ALTER TABLE `imagemanga`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`manga_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `imagemanga`
--
ALTER TABLE `imagemanga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT cho bảng `manga`
--
ALTER TABLE `manga`
  MODIFY `manga_id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
