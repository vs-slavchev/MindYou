name := """play-service"""
organization := "com.fontys"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += javaJdbc
// https://mvnrepository.com/artifact/org.postgresql/postgresql
libraryDependencies += "org.postgresql" % "postgresql" % "42.2.5"

libraryDependencies += "org.mockito" % "mockito-core" % "2.22.0" % "test"

libraryDependencies ++= Seq(
  javaJpa,
  "org.hibernate" % "hibernate-entitymanager" % "5.3.6.Final"
)

libraryDependencies ++= Seq(
  ws
)

javaOptions in Universal += "--Dpidfile.path=/dev/null"

libraryDependencies += ehcache
