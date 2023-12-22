USE TechSmart;

-- TABLA USER-TYPE
INSERT INTO user_type (name, description) VALUES
('admin', 'Administrador'),
('user', 'Usuario');

-- TABLA USERS
INSERT INTO users (first_name, last_name, password, email, gender, country, date_of_birth, avatar, id_user_type) VALUES
('Leshia', 'Pinniger', 'cH9404){|xq', 'leshiapinniger@gmail.com', 'F', 'Finland', '1990-01-01', 'https://robohash.org/omnisquiipsa.png?size=100x100&set=set1', 1),
('Madelene', 'Lanston', 'wD5255,){+', 'madelenelanston@gmail.com', 'F', 'Greek', '1992-05-15', 'https://robohash.org/illoquamsunt.png?size=100x100&set=set1', 1),
('Melinda', 'Meharry', 'pT9371|`f$s#OKaA', 'melindameharry@gmail.com', 'F', 'Argentina', '1985-11-22', 'https://robohash.org/ipsavoluptatesuscipit.png?size=100x100&set=set1', 1),
('Pauly', 'Robken', 'lP2601~?E', 'paulyrobken@gmail.com', 'M', 'Peru', '1988-07-10', 'https://robohash.org/suntvoluptatemamet.png?size=100x100&set=set1', 1),
('Gay', 'Graeme', 'eY0732\'@', 'gaygraeme@gmail.com', 'M', 'Botswana', '1995-03-18', 'https://robohash.org/officiaaccusamuseius.png?size=100x100&set=set1', 1);

-- TABLA CATEGORY
INSERT INTO category (name, description) VALUES
('Consola de videojuegos', 'Sumérgete en la emoción del juego con nuestras consolas de videojuegos. Descubre la última generación de entretenimiento con gráficos impresionantes y experiencias inmersivas. Desde consolas portátiles hasta potentes sistemas de juego en casa, ofrecemos la mejor selección. ¡Elige tu plataforma y lleva la diversión a un nuevo nivel!'),
('Celulares', 'Descubre lo último en tecnología móvil con nuestra amplia selección de smartphones. Desde elegantes diseños hasta potentes funciones, encuentra el celular perfecto para ti. Navega, captura momentos con cámaras de alta resolución y disfruta de un rendimiento excepcional. ¡Explora ahora y lleva la conectividad a un nuevo nivel con nuestros increíbles teléfonos!'),
('Componentes', 'Potencia tu computadora con los mejores componentes. Descubre una amplia gama de procesadores, tarjetas gráficas, memoria RAM y almacenamiento para mejorar el rendimiento de tu PC. Ya sea para juegos, diseño o trabajo, encuentra los componentes ideales para potenciar tu experiencia informática. ¡Optimiza tu sistema y hazlo más eficiente hoy mismo!');

-- TABLA PRODUCT_FEATURES
INSERT INTO product_features (brand, stock, description, warranty, rating) VALUES
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
INSERT INTO user_product (id_user, id_product, date) VALUES
(1, 1, '2023-01-01'),
(2, 2, '2023-02-15'),
(3, 3, '2023-03-22'),
(4, 4, '2023-04-05'),
(5, 5, '2023-04-10');

-- TABLA ORDERS
INSERT INTO orders (id_product, stock, total_price, method_of_pay, status, date, address) VALUES
(1, 2, 1240000, 'Credit Card', 'Pending', '2023-01-05', 'B° San Martin N° 435'),
(2, 1, 509676, 'PayPal', 'Shipped', '2023-02-20', 'B° Los Andres N° 546'),
(3, 3, '429507', 'Cash', 'Delivered', '2023-03-28', 'B° Doncellas N° 25');

-- TABLA CART
INSERT INTO cart (id_user, id_order) VALUES
(1, 1),
(2, 2),
(3, 3);

-- TABLA SALES
INSERT INTO sales (id_cart, date) VALUES
(1, '2023-01-05'),
(2, '2023-02-20'),
(3, '2023-03-28');
