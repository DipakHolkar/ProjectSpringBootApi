CREATE DATABASE  IF NOT EXISTS `projectdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projectdb`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_id` int NOT NULL,
  `course_name` varchar(25) DEFAULT NULL,
  `course_duration` int DEFAULT NULL,
  `course_details` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'PGDAC',6,'The course is targeted towards engineering graduates and MCA/MSc who wish to venture into the domain of advanced computing. '),(2,'PGDBDA',6,'PG-DBDA will educate the aspirants who want to make an impact in the corporate and academic world in the domain of big data analytics as data scientist and researcher'),(3,'PreCAT',2,'Admissions to all PG Diploma courses are done through C-DAC\'s Common Admission Test (C-CAT) that will be conducted in computerised mode physically at C-DAC’s test centres.');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_ins_map`
--

DROP TABLE IF EXISTS `course_ins_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_ins_map` (
  `cmap_id` int NOT NULL,
  `course_id` int DEFAULT NULL,
  `institute _id` int DEFAULT NULL,
  `course_fees` double DEFAULT NULL,
  `course_info` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cmap_id`),
  KEY `fk_course_idx` (`course_id`),
  KEY `fk_ins_idx` (`institute _id`),
  CONSTRAINT `fk_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  CONSTRAINT `fk_ins` FOREIGN KEY (`institute _id`) REFERENCES `institute` (`ins_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_ins_map`
--

LOCK TABLES `course_ins_map` WRITE;
/*!40000 ALTER TABLE `course_ins_map` DISABLE KEYS */;
INSERT INTO `course_ins_map` VALUES (1,1,1,90000,'PG-DAC is the most popular PG Diploma course of C-DAC.'),(2,2,1,120000,'Well established courses with excellent placement records.'),(3,1,2,100000,'PG Diploma Programmes At SunBeam · PG Diploma In Advanced Computing (PG-DAC) ·'),(4,2,2,135000,'PG Diploma in Big Data Analytics (PG-DBDA) · Linux Programming and Cloud Computing- 50');
/*!40000 ALTER TABLE `course_ins_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `feedback_id` int NOT NULL,
  `student_id` int DEFAULT NULL,
  `institute _id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `feedback` varchar(250) DEFAULT NULL,
  `feedback_date` date DEFAULT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `fk_student_idx` (`student_id`),
  KEY `fk_institute_idx` (`institute _id`),
  CONSTRAINT `fk_institute` FOREIGN KEY (`institute _id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,1,1,1,'Excellent teaching,supportive staff','2022-07-09');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institute`
--

DROP TABLE IF EXISTS `institute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `institute` (
  `ins_id` int NOT NULL,
  `institute_id` int DEFAULT NULL,
  `institute_name` varchar(45) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `emailid` varchar(25) DEFAULT NULL,
  `contact_num` varchar(20) DEFAULT NULL,
  `is_authorize` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ins_id`),
  KEY `user_id_idx` (`institute_id`),
  CONSTRAINT `my_fk` FOREIGN KEY (`institute_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institute`
--

LOCK TABLES `institute` WRITE;
/*!40000 ALTER TABLE `institute` DISABLE KEYS */;
INSERT INTO `institute` VALUES (1,1,'KNOWIT','Deccan,Pune','knowit@object.com','8989898787','authorized'),(2,2,'Sunbeam','karad','sunbeam@gmail.com','7878787878','authorized'),(3,3,'Acts','panchvati,pashan','acts@gmail.com','7867565656','authorized');
/*!40000 ALTER TABLE `institute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL,
  `student_id` int DEFAULT NULL,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `qualification` varchar(25) DEFAULT NULL,
  `emailid` varchar(25) DEFAULT NULL,
  `contactno` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`student_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,1,'ajay','kashid','PGDAC','ajay@gmail.com','9130909898'),(2,2,'dipak','holkar','B.E Mechanical','dipak@gmail.com','9097878787'),(3,3,'pranali','bhujbal','B.E','pb@gmail.com','8987878787'),(4,4,'monika','bachhav','B.E','monika@gmail.com','8987878756');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_crs_map`
--

DROP TABLE IF EXISTS `student_crs_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_crs_map` (
  `smap_id` int NOT NULL,
  `student_id` int DEFAULT NULL,
  `course_inst_mapping` int DEFAULT NULL,
  PRIMARY KEY (`smap_id`),
  KEY `fk_studid_idx` (`student_id`),
  KEY `fk_crsmap_idx` (`course_inst_mapping`),
  CONSTRAINT `fk_crsmap` FOREIGN KEY (`course_inst_mapping`) REFERENCES `course_ins_map` (`cmap_id`),
  CONSTRAINT `fk_studid` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_crs_map`
--

LOCK TABLES `student_crs_map` WRITE;
/*!40000 ALTER TABLE `student_crs_map` DISABLE KEYS */;
INSERT INTO `student_crs_map` VALUES (1,1,1),(2,2,1),(3,3,2),(4,4,2);
/*!40000 ALTER TABLE `student_crs_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `user_role` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'knowit@gmail.com','know@123','institute'),(2,'sunbeam@gmail.com','sunbeam@123','institute'),(3,'ajaykashid@gmail.com','ajay@123','student'),(4,'pranali@gmail.com','pranali@123','student'),(5,'dipak@gmail.com','dipak@123','student'),(6,'monika@gmail.com','monika@123','student'),(7,'acts@gmail.com','acts1020','institute'),(8,'admin','admin','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-08 16:46:25
