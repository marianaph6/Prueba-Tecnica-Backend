-- CREACIÓN DE LA BASE DE DATOS--

create database prueba_tecnica;

-- CREACIÓN DE LAS TABLAS--

create table Rol(id_rol serial primary key, nombre varchar(20) not null);

create table Tipo_Id(id_tipo_id serial primary key, nombre varchar(30) not null);

create table Usuario(id_tipo_id int not null,id_usuario text primary key, nombres text not null, 
apellidos text not null, correo text unique,id_rol int not null, celular varchar(20), contrasenia text not null,
foreign key (id_rol) references Rol(id_rol) on delete restrict on update cascade,
foreign key (id_tipo_id) references Tipo_Id(id_tipo_id) on delete restrict on update cascade);