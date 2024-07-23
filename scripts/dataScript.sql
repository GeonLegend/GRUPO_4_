USE TechSmart;

-- TABLA USER-TYPE
INSERT INTO users_types (name, description) VALUES
('admin', 'Administrador'),
('seller', 'Vendedor'),
('user', 'Usuario');

-- TABLA USERS
INSERT INTO users (first_name, last_name, password, email, gender, country, avatar, id_user_type) VALUES
('supreme', 'admin', '$2a$10$1D1eYVK1EXtT5tT/2Tuzi..kt5PAbhkJDlzkdoe41YF0Z.Dt0KEui', 'admin@gmail.com', 'F', 'Finland', 'default.png', 1),
('default', 'seller', '$2a$10$X1h/k18VODFpEcFdfZ7DT.Zs3VV18TbduqYJ933sneQypvYEzh5k.', 'vendedor@gmail.com', 'M', 'Argentina', 'default.png', 2),
('Angela', 'Ovando', '$2a$10$zK4stzKEZ6SPIFmBBS.e.Ozc3D7UvuBfg0eOWMR12dRbYExc8AJsK', 'angelaovando@gmail.com', 'F', 'Argentina', 'default.png', 2),
('Sofia', 'Gutierrez', '$2a$10$rMfu.d9HeOFJnx/uYGzJPu9GIkufkOLIZMRwiyQ0hcDLS55FhueOu', 'sofiagutierrez@gmail.com', 'M', 'Argentina', 'default.png', 2),
('default', 'user', '$2a$10$srjVegEMxYCGG7zrjSt7zuVLvGMoFKxPJ6adhBwEMWwiWh0nOT4qi', 'user@gmail.com', 'M', 'Argentina', 'default.png', 3);

-- TABLA CATEGORY
INSERT INTO categories (name, description)
VALUES 
    ('Consolas de Videojuegos', 'Explora nuestra selección de las mejores consolas y disfruta de una experiencia de juego inigualable.'),
    ('Celulares', 'Descubre una amplia gama de teléfonos móviles con las últimas características y tecnologías.'),
    ('Componentes de pc', 'Encuentra todos los componentes necesarios para construir o mejorar tu computadora según tus necesidades y preferencias.'),
    ('Periféricos', 'Mejora tu experiencia de computación con nuestra colección de periféricos diseñados para brindar comodidad y rendimiento.'),
    ('Laptops', 'Descubre nuestra variedad de laptops de última generación para satisfacer tus necesidades de trabajo y entretenimiento sobre la marcha.'),
    ('Televisores', 'Sumérgete en una experiencia visual excepcional con nuestra selección de televisores de alta calidad.'),
    ('Setup Gamer', 'Haz que tu espacio de juego cobre vida con nuestra colección de productos decorativos diseñados para potenciar tu setup gamer y llevar tu experiencia de juego al siguiente nivel.');

/*-- TABLA SUBCATEGORY
INSERT INTO subcategories (id_category, name, description)
VALUES 
	(1, 'Consolas', 'Sección de consolas'),
    (2, 'Alta gama', 'Descubre la excelencia en tecnología con nuestros celulares de alta gama. Experimenta el lujo de un rendimiento excepcional, diseños elegantes y características innovadoras que te dejarán sin aliento.'),
    (2, 'Media y baja gama', 'Explora nuestra amplia selección de celulares, desde opciones asequibles hasta dispositivos con características avanzadas. Encuentra el equilibrio perfecto entre rendimiento confiable, funcionalidades imprescindibles y precios accesibles que se adaptan a cualquier presupuesto.'),
    (3, 'Procesadores', 'Experimenta un rendimiento superior con nuestra variedad de procesadores diseñados para potenciar tu PC.'),
    (3, 'Tarjetas gráficas', 'Sumérgete en gráficos impresionantes con nuestra selección de tarjetas gráficas que ofrecen un rendimiento excepcional en juegos y aplicaciones intensivas.'),
    (3, 'Memorias RAM', 'Optimiza la velocidad y la capacidad de respuesta de tu PC con nuestra amplia gama de opciones de memoria RAM.'),
    (3, 'Almacenamiento', 'Mantén tus archivos seguros y accede a ellos rápidamente con nuestras soluciones de almacenamiento de alta velocidad.'),
    (3, 'Placas madre', 'Construye tu PC desde cero o actualiza tu sistema con nuestras placas base de calidad que ofrecen fiabilidad y rendimiento.'),
    (3, 'Fuentes de alimentación', 'Asegúrate de que tu PC tenga la potencia necesaria para funcionar correctamente con nuestras fuentes de alimentación confiables y eficientes.'),
    (3, 'Refrigeración', 'Mantén tu PC funcionando fresca y silenciosamente con nuestros sistemas de refrigeración diseñados para un rendimiento óptimo y una vida útil prolongada.'),
    (4, 'Teclados', 'Experimenta la comodidad y la precisión al escribir con nuestra variedad de teclados diseñados para satisfacer las necesidades de los usuarios más exigentes.'),
    (4, 'Mouses', 'Mejora tu experiencia de juego y productividad con nuestros ratones ergonómicos y de alta precisión.'),
    (4, 'Auriculares', 'Sumérgete en un sonido envolvente y claro con nuestros auriculares diseñados para ofrecer una experiencia auditiva excepcional.'),
    (4, 'Monitores', 'Disfruta de imágenes nítidas y colores vibrantes con nuestra selección de monitores de alta resolución y velocidad de actualización.'),
    (4, 'Webcams', 'Mantén videollamadas claras y fluidas con nuestras webcams de alta calidad y funciones avanzadas.'),
    (4, 'Altavoces', 'Llena tu espacio con un sonido impresionante y de alta fidelidad con nuestros altavoces diseñados para entusiastas del audio.'),
    (4, 'Joysticks y gamepads', 'Domina tus juegos favoritos con nuestros joysticks y gamepads ergonómicos y altamente sensibles.'),
	(5, 'Laptops', 'Seccion de laptops'),
    (6, 'Televisores', 'Seccion de televisores'),
    (7, 'Iluminación ambiental', 'Crea una atmósfera inmersiva con nuestra variedad de sistemas de iluminación LED para tu setup gamer.'),
    (7, 'Soportes y organizadores', 'Mantén tu espacio de juego limpio y organizado con nuestros soportes y organizadores diseñados específicamente para tus dispositivos y accesorios de gaming.'),
    (7, 'Sillas gamer', 'Experimenta la comodidad y el estilo con nuestras sillas gamer ergonómicas diseñadas para sesiones de juego prolongadas.'),
    (7, 'Mesas y escritorios', 'Optimiza tu espacio de juego con nuestras mesas y escritorios diseñados para acomodar todos tus dispositivos y accesorios de gaming.'),
    (7, 'Decorativos', 'Añade un toque de estilo y personalidad a tu setup gamer con nuestra selección de decorativos diseñados para realzar la estética de tu espacio de juego.');
;*/

-- TABLA PRODUCT_FEATURES
INSERT INTO products_features (brand, stock, description, warranty, rating) VALUES
('Sony', 33, 'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos. Calidad de otro nivel Se considera que esta consola es de las mejores dentro del mercado, dado que presenta una resolución de hasta 4K. Además, el control DualSense para PS5 combina estilo y tecnología para que jugar sea más cómodo e interactivo para todos sus jugadores. Adaptada a tus necesidades Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás. Vas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.', 12, 4.8),
('Microsoft', 20, 'Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo. Adaptada a tus necesidades Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 512 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás. Vas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.', 6, 4.3),
('Xiaomi', 18, 'Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Experiencia visual increíble Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.43\. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos. Mayor rendimiento Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo facial y dactilar Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. Batería de duración superior ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.', 12, 4.1),
('Ryzen 5 5600g', 41, 'Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G, diseñado para brindarte un rendimiento excepcional en tus juegos favoritos. Con sus 6 núcleos y 12 hilos, este procesador te permitirá disfrutar de una multitarea fluida y eficiente. Gracias a su arquitectura x86-64 y litografía de 7 nm, obtendrás un rendimiento óptimo con un menor consumo de energía. La frecuencia de reloj de 3.9 GHz a 4.4 GHz garantiza una velocidad de procesamiento rápida, mientras que la memoria caché de 16 MB te ayudará a acceder rápidamente a tus datos más utilizados. Además, este procesador es compatible con memoria RAM DDR4, lo que te permitirá aprovechar al máximo la velocidad y capacidad de tu sistema. El procesador gráfico Radeon Graphics integrado te brinda una calidad de imagen excepcional, permitiéndote disfrutar de tus juegos sin necesidad de una tarjeta gráfica adicional. Además, el procesador está desbloqueado, lo que te da la libertad de realizar overclocking y personalizar tu experiencia de juego según tus preferencias. Con una potencia de diseño térmico de 65 W, este procesador garantiza un funcionamiento eficiente y una menor generación de calor. Compatible con zócalos AM4, podrás instalarlo fácilmente en tu placa madre y comenzar a disfrutar de una experiencia de juego inigualable. No esperes más para llevar tu PC al siguiente nivel con el AMD Ryzen 5 5600G.',24, 4.5),
('Intel Core i7-13700K', 52, 'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. Núcleos: el corazón del procesador En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!', 48, 4.2);

-- TABLA PRODUCTS
INSERT INTO products (id_category, id_product_features, name, price, discount, image) VALUES
(1, 1, 'Sony PlayStation 5', 620000, 21, 'playstation5.jpg'),
(1, 2, 'Microsoft Xbox Series S', 509676, 0, 'product2.jpg'),
(2, 3, 'Xiaomi Redmi Note 11', 143169, 31, 'product3.jpg'),
(3, 4, 'Ryzen 5 5600g', 239580, 38, 'product4.jpg'),
(3, 5, 'Intel Core i7-13700K', 102201, 40, 'product5.jpg');

-- TABLA USER_PRODUCT
 /*
INSERT INTO user_product (id_user, id_product, date) VALUES
(1, 1, '2023-01-01'),
(2, 2, '2023-02-15'),
(3, 3, '2023-03-22'),
(4, 4, '2023-04-05'),
(5, 5, '2023-04-10');

*/

