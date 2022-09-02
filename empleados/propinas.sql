-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2022 a las 00:54:47
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `propinas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `fecha_asistencia` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `cargo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id`, `cargo`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'SUB ADMINISTRADOR'),
(3, 'CHEF'),
(4, 'JEFE DE SALA'),
(5, 'ANFITRIONA'),
(6, 'JEFE DE BARRA'),
(7, 'MESERO'),
(8, 'COCINERO'),
(9, 'AUXILIAR'),
(10, 'JEFE DE SEGURIDAD'),
(11, 'SEGURIDAD'),
(12, 'ASCENSORISTA'),
(13, 'OFICIOS VARIOS'),
(14, 'EXTRAS'),
(15, 'PATINADOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `identificacion` int(11) DEFAULT NULL,
  `id_cargo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `id` int(11) NOT NULL,
  `falta` int(11) NOT NULL,
  `id_empleados` int(11) NOT NULL,
  `puntos_incidencia` int(11) NOT NULL,
  `fecha_incidencia` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos_propina`
--

CREATE TABLE `puntos_propina` (
  `id_puntos` int(11) NOT NULL,
  `puntos` int(11) NOT NULL,
  `id_empleados` int(11) NOT NULL,
  `estimulo` varchar(100) NOT NULL,
  `fecha_reg_puntos` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntos_propina`
--

INSERT INTO `puntos_propina` (`id_puntos`, `puntos`, `id_empleados`, `estimulo`, `fecha_reg_puntos`) VALUES
(3, 6, 1048246581, '', '2022-08-24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `puntos_propina`
--
ALTER TABLE `puntos_propina`
  ADD PRIMARY KEY (`id_puntos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `puntos_propina`
--
ALTER TABLE `puntos_propina`
  MODIFY `id_puntos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
