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

// https://mvnrepository.com/artifact/com.google.firebase/firebase-admin
libraryDependencies += "com.google.firebase" % "firebase-admin" % "6.5.0"

// https://mvnrepository.com/artifact/com.google.gms/google-services
libraryDependencies += "com.google.gms" % "google-services" % "3.1.1" % "runtime"


libraryDependencies ++= Seq(
  ws
)

libraryDependencies += ehcache


PlayKeys.externalizeResources := false
