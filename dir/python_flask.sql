-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: python18120329
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('97f7d12aea65');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `price` varchar(128) DEFAULT NULL,
  `img` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'简约百搭净色衬衫','200','/static/images2/2-1.jpg'),(2,'简约百搭净色衬衫','300','/static/images2/2-2.jpg'),(3,'简约百搭净色衬衫','343','/static/images2/2-3.jpg'),(4,'简约百搭净色衬衫','234','/static/images2/2-4.jpg'),(5,'简约百搭净色衬衫','234','/static/images2/2-5.jpg'),(6,'简约百搭净色衬衫','453','/static/images2/2-6.jpg'),(7,'简约百搭净色衬衫','655','/static/images2/2-7.jpg'),(8,'简约百搭净色衬衫','234','/static/images2/2-8.jpg'),(9,'简约百搭净色衬衫','453','/static/images2/2-9.jpg');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tel` varchar(128) DEFAULT NULL,
  `passrod` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `tel` (`tel`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'12345678912','123','111@qq.com'),(8,'13979970490','123','123@qq.com'),(9,'12345678945','123','1234@qq.com'),(10,'13979970491','123','12345@qq.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wheel`
--

DROP TABLE IF EXISTS `wheel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wheel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wheel`
--

LOCK TABLES `wheel` WRITE;
/*!40000 ALTER TABLE `wheel` DISABLE KEYS */;
INSERT INTO `wheel` VALUES (1,'/static/images/M9_14_155509_01.jpg'),(2,'/static/images/M9_14_155509_02.jpg'),(3,'/static/images/M9_14_155509_03.jpg'),(4,'/static/images/M9_14_155509_04.jpg');
/*!40000 ALTER TABLE `wheel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wheel_re`
--

DROP TABLE IF EXISTS `wheel_re`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wheel_re` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img1` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `img3` varchar(128) DEFAULT NULL,
  `img4` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wheel_re`
--

LOCK TABLES `wheel_re` WRITE;
/*!40000 ALTER TABLE `wheel_re` DISABLE KEYS */;
INSERT INTO `wheel_re` VALUES (1,'/static/images/M9_14_155509_01.jpg','/static/images/M9_14_155509_02.jpg','/static/images/M9_14_155509_03.jpg','/static/images/M9_14_155509_04.jpg'),(2,'/static/images/M9_15_221912_01.jpg','/static/images/M9_15_221912_02.jpg','/static/images/M9_15_221912_03.jpg','/static/images/M9_15_221912_04.jpg'),(3,'/static/images/M9_27_50148_01.jpg','/static/images/M9_27_50148_02.jpg','/static/images/M9_27_50148_03.jpg','/static/images/M9_27_50148_04.jpg'),(4,'/static/images/M9_27_142605_01.jpg','/static/images/M9_27_142605_02.jpg','/static/images/M9_27_142605_03.jpg','/static/images/M9_27_142605_04.jpg');
/*!40000 ALTER TABLE `wheel_re` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-29  1:43:01
