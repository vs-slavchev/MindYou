name := """play-service"""
organization := "com.fontys"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += javaJdbc
libraryDependencies += "org.mockito" % "mockito-core" % "2.22.0" % "test"

libraryDependencies ++= Seq(
  ws
)

javaOptions in Universal += "--Dpidfile.path=/dev/null"

libraryDependencies += ehcache
