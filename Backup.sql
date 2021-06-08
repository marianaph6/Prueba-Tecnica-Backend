-- CREACIÓN DE LA BASE DE DATOS--

create database prueba_tecnica;

-- CREACIÓN DE LAS TABLAS--

create table Rol(id_rol serial primary key, nombre varchar(20) not null);

create table Tipo_Id(id_tipo_id serial primary key, nombre varchar(50) not null);

create table Usuario(id_tipo_id int not null,id_usuario text primary key, nombres text not null, 
apellidos text not null, correo text unique,id_rol int not null, celular varchar(20) not null, contrasenia text not null,
foreign key (id_rol) references Rol(id_rol) on delete restrict on update cascade,
foreign key (id_tipo_id) references Tipo_Id(id_tipo_id) on delete restrict on update cascade);

INSERT INTO public.rol (id_rol, nombre) VALUES(1, 'Usuario');
INSERT INTO public.rol (id_rol, nombre) VALUES(2, 'Coordinador');
INSERT INTO public.rol (id_rol, nombre) VALUES(3, 'Administrador');

INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(1, 'Cédula de ciudadania (CC)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(2, 'Tarjeta de identidad (TI)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(3, 'Registro civil (RC)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(4, 'Certificado de nacido vivo (CN)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(5, 'Cédula de extranjerÍa (CE)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(6, 'Pasaporte (PA)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(7, 'Carné diplomático (CD)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(8, 'Salvoconducto (SC)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(9, 'Permiso especial de permanencia (PE)');
INSERT INTO public.tipo_id (id_tipo_id, nombre) VALUES(10, 'Documento extranjero (DE)');


INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '11', 'k', 'm', 'marwsdijllllllllldcse@g.com', 2, 'k', '4196411f3fa9af63c2af0f7cacfa6fc9');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '000', 'kk', 'kkk', 'mjj@g.com', 2, '653', 'b4b147bc522828731f1a016bfa72c073');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '26', 'jkm', 'iokujh', 'mmdjg@k.com', 1, '55', '4e732ced3463d06de0ca9a15b6153677');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '28', 'uhnj', 'uhnj', 'marwsdijllllllllldcse@g.comdad', 1, '5', '8e296a067a37563370ded05f5a3bf3ec');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '222', 'angie', 'rivera', 'angie@gmail.com', 2, '77777777777777777', 'be8fe4c12c4e43217c06098a2595a950');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '1', 'k', 'k', 'k@g.com', 2, '555555555', '28c8edde3d61a0411511d3b1866f0636');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '388', 'khujb', 'gjbhjn', 'mijkn@g.com', 3, '56', 'd9fc5b73a8d78fad3d6dffe419384e70');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '1010', 'ojilkhuj', 'rythgjh', 'hgjbnkm@j. pm', 1, 'tghfjbnj', '310dcbbf4cce62f762a2aaa148d556bd');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(2, '25', 'iuhkj', 'iuj', 'mss@gsdd.com', 1, '566666666666', '2b272cbcd91c2d762fcb8261307d295e');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '333', 'ana', 'hinestroza', 'ana@gmail.com', 3, '123', '310dcbbf4cce62f762a2aaa148d556bd');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '444', 'k', 'k', 'm@g.com', 1, 'k', '550a141f12de6341fba65b0ad0433500');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(3, '555', 'k', 'gjh', 'g@l.com', 2, 'k', '15de21c670ae7c3f6f3f1f37029303c9');
INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia) VALUES(1, '111', 'mariana', 'hinestroza', 'mari6@gmail.com', 1, '123', '698d51a19d8a121ce581499d7b701668');

