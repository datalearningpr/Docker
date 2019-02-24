CREATE TABLE IF NOT EXISTS `todo` (
  `name` varchar(100) NULL,
  `description` varchar(5000) NULL,
  KEY `INDEX_NAME` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `todo` VALUES ('aaa', 'bbb');