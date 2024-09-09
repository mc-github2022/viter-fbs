-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2024 at 08:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_single_page`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about`
--

CREATE TABLE `tbl_about` (
  `about_id` int(11) NOT NULL,
  `about_title` varchar(50) NOT NULL,
  `about_subtitle` varchar(50) NOT NULL,
  `about_text` varchar(1000) NOT NULL,
  `about_btn_text` varchar(50) NOT NULL,
  `about_btn_link` varchar(50) NOT NULL,
  `about_img` varchar(50) NOT NULL,
  `about_customfield_a` varchar(50) NOT NULL,
  `about_customfield_b` varchar(50) NOT NULL,
  `about_customfield_c` varchar(50) NOT NULL,
  `about_customfield_d` varchar(50) NOT NULL,
  `about_customfield_e` varchar(50) NOT NULL,
  `about_customfield_f` varchar(50) NOT NULL,
  `about_customfield_g` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`about_id`, `about_title`, `about_subtitle`, `about_text`, `about_btn_text`, `about_btn_link`, `about_img`, `about_customfield_a`, `about_customfield_b`, `about_customfield_c`, `about_customfield_d`, `about_customfield_e`, `about_customfield_f`, `about_customfield_g`) VALUES
(1, 'Who We Are?', 'What We Do?', 'Frontline Business Solutions, Inc. is an Information Technology and Accounting business solutions company that offers a variety of services to SMEs. Our commitment is to leverage business success for the good of people and the communities in which we exist. Our vision and mission is a successful business that maintains harmony between the three goals of excellent products and services, revenue generation, and positive social impact. By choosing Frontline Business Solutions, Inc. you are partnering with a company committed to caring about people and community development.', 'Watch Video', '#Watch Video', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity`
--

CREATE TABLE `tbl_activity` (
  `activity_id` int(11) NOT NULL,
  `activity_title` varchar(50) NOT NULL,
  `activity_text` varchar(500) NOT NULL,
  `activity_btn_text` varchar(50) NOT NULL,
  `activity_btn_link` varchar(50) NOT NULL,
  `activity_img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_activity`
--

INSERT INTO `tbl_activity` (`activity_id`, `activity_title`, `activity_text`, `activity_btn_text`, `activity_btn_link`, `activity_img`) VALUES
(1, 'Team Building 2024', 'From May 15 to 17, our team gathered at La Luz Beach Resort for our…', 'Read More', '#readmore', '453604724_910940454378541_6684968991518378625_n.jpg'),
(2, 'Annual Career Fest 2024 at STI College San Pablo', 'We are thrilled to share our recent participation in the Annual Career Fest 2024 at…', 'Read More', '#readmore', '453257538_910940217711898_3499163732690137684_n.jpg'),
(3, 'FBS 5th Anniversary', 'Our 5th-year celebration at Frontline Business Solutions is a special time to look back on…', 'Read More', '#readmore', '453484784_910940257711894_3648426308500912165_n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `contact_id` int(11) NOT NULL,
  `contact_tel_number` varchar(50) NOT NULL,
  `contact_phone_number` varchar(50) NOT NULL,
  `contact_office_hours` varchar(50) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_address` varchar(50) NOT NULL,
  `contact_fb_link` varchar(50) NOT NULL,
  `contact_twitter_link` varchar(50) NOT NULL,
  `contact_youtube_link` varchar(50) NOT NULL,
  `contact_tiktok_link` varchar(50) NOT NULL,
  `contact_linkedin_link` varchar(50) NOT NULL,
  `contact_privacy_link` varchar(50) NOT NULL,
  `contact_terms_link` varchar(50) NOT NULL,
  `contact_eula_link` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`contact_id`, `contact_tel_number`, `contact_phone_number`, `contact_office_hours`, `contact_email`, `contact_address`, `contact_fb_link`, `contact_twitter_link`, `contact_youtube_link`, `contact_tiktok_link`, `contact_linkedin_link`, `contact_privacy_link`, `contact_terms_link`, `contact_eula_link`) VALUES
(1, ' 049 501 3592', ' 0927 168 6810', 'Monday - Friday | 7:00am - 4:30pm', ' info@frontlinebusiness.com.ph', 'Baloc road, Brgy. San Ignacio, San Pablo City, Lag', 'https://www.facebook.com/frontline.business/', 'https://twitter.com/frontlinebus', 'https://www.youtube.com/channel/UClQaH07ouCd0sgYmX', 'https://www.tiktok.com/@frontlinebusinessinc', 'https://www.linkedin.com/company/frontline-busines', 'https://frontlinebusiness.com.ph/privacy-policy/', 'https://frontlinebusiness.com.ph/terms-of-service/', 'https://frontlinebusiness.com.ph/eula/');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_header`
--

CREATE TABLE `tbl_header` (
  `header_id` int(11) NOT NULL,
  `header_banner_title` varchar(50) NOT NULL,
  `header_banner_text` varchar(1000) NOT NULL,
  `header_banner_btn_text` varchar(50) NOT NULL,
  `header_banner_btn_link` varchar(50) NOT NULL,
  `header_logo` varchar(500) NOT NULL,
  `header_banner_img` varchar(500) NOT NULL,
  `header_banner_customfield_a` varchar(50) NOT NULL,
  `header_banner_customfield_b` varchar(50) NOT NULL,
  `header_banner_customfield_c` varchar(50) NOT NULL,
  `header_banner_customfield_d` varchar(50) NOT NULL,
  `header_banner_customfield_e` varchar(50) NOT NULL,
  `header_banner_customfield_f` varchar(50) NOT NULL,
  `header_banner_customfield_g` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_header`
--

INSERT INTO `tbl_header` (`header_id`, `header_banner_title`, `header_banner_text`, `header_banner_btn_text`, `header_banner_btn_link`, `header_logo`, `header_banner_img`, `header_banner_customfield_a`, `header_banner_customfield_b`, `header_banner_customfield_c`, `header_banner_customfield_d`, `header_banner_customfield_e`, `header_banner_customfield_f`, `header_banner_customfield_g`) VALUES
(1, 'Excellence in Managed Services and Web Solution', 'Along with our website design & development solutions (Including website hosting, graphic design, and basic SEO services), FBS meets the needs of clients through recruiting and managing professionals who serve in a wide array of areas like bookkeeping and accounting, virtual assistant and data entry personnel. If you want excellent customer service and a dedicated professional working at a competitive price, we can meet your needs.', 'Our Service', '#services', '', 'fbs-banner-bg.png', 'asd', 'asdas', 'das', 'asd', 'asda', 'sda', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `service_id` int(11) NOT NULL,
  `service_title` varchar(50) NOT NULL,
  `service_includes_a` varchar(50) DEFAULT NULL,
  `service_includes_b` varchar(50) DEFAULT NULL,
  `service_includes_c` varchar(50) DEFAULT NULL,
  `service_includes_d` varchar(50) DEFAULT NULL,
  `service_includes_e` varchar(50) DEFAULT NULL,
  `service_includes_f` varchar(50) DEFAULT NULL,
  `service_includes_g` varchar(50) DEFAULT NULL,
  `service_includes_h` varchar(50) DEFAULT NULL,
  `service_img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_service`
--

INSERT INTO `tbl_service` (`service_id`, `service_title`, `service_includes_a`, `service_includes_b`, `service_includes_c`, `service_includes_d`, `service_includes_e`, `service_includes_f`, `service_includes_g`, `service_includes_h`, `service_img`) VALUES
(1, 'Web Solutions', 'Website Design and Development', 'WordPress Development', 'Website Redesign', 'Web Hosting & Domain', 'Website Maintenance', 'Online Payment Integration', 'Web-Based Applications', '', 'code-solid.png'),
(2, 'Virtual Assistant Solutions', 'Lead Generation', 'Database Management', 'Social Media Management', 'Digital Marketing', 'Multimedia', 'Transcription', 'Email Campaign/Newsletters', 'Website Management', 'headset-solid.png'),
(3, 'Accounting Solutions', 'Dedicated Accounting Staff', 'Compliance', 'Bookkeeping', '', '', '', '', '', 'calculator-solid.png'),
(4, 'Learning Center Solutions', 'High School Work Immersion', 'College On-the-Job Traning', '', '', '', '', '', '', 'chalkboard-user-solid.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_about`
--
ALTER TABLE `tbl_about`
  ADD PRIMARY KEY (`about_id`);

--
-- Indexes for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `tbl_header`
--
ALTER TABLE `tbl_header`
  ADD PRIMARY KEY (`header_id`);

--
-- Indexes for table `tbl_service`
--
ALTER TABLE `tbl_service`
  ADD PRIMARY KEY (`service_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_about`
--
ALTER TABLE `tbl_about`
  MODIFY `about_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  MODIFY `activity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_header`
--
ALTER TABLE `tbl_header`
  MODIFY `header_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
