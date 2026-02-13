📝 Gestor de Notas – DAW (Desarrollo en Entorno Cliente)

Aplicación web desarrollada como práctica para la asignatura Desarrollo en Entorno Cliente (DAW).
Permite crear, organizar y gestionar notas mediante una interfaz moderna construida con React + TypeScript utilizando Vite como entorno de desarrollo.

🚀 Tecnologías Utilizadas

⚡ Vite – Herramienta de construcción rápida para proyectos frontend.

⚛️ React – Librería para la creación de interfaces de usuario.

🔷 TypeScript – Tipado estático para mejorar la escalabilidad y mantenibilidad del código.

🧭 React Router – Gestión de rutas y navegación entre vistas.

🧩 Props Tipadas – Comunicación entre componentes asegurando integridad de datos.

📌 Funcionalidades

La aplicación sigue un flujo sencillo e intuitivo:

✍️ 1. Creación de Notas

El usuario introduce una nueva nota mediante un formulario donde puede definir su contenido y fecha.

📊 2. Dashboard de Gestión

Las notas creadas se muestran en un panel principal donde se organizan automáticamente según su estado:

✅ Completadas

⏳ Pendientes

⚠️ Atrasadas (según la fecha definida)

✏️ 3. Edición de Notas

Las notas en estado pendiente pueden editarse para actualizar su contenido o fecha.

🗑️ 4. Eliminación de Notas

Existe la opción de eliminar todas las notas almacenadas para reiniciar el estado de la aplicación.

🧠 Conceptos de Desarrollo Aplicados

Este proyecto pone en práctica varios conceptos clave del desarrollo en cliente:

Uso de componentes funcionales en React.

Gestión de estado para actualizar dinámicamente la UI.

Tipado fuerte con TypeScript en:

Props de componentes.

Modelos de datos de las notas.

Navegación mediante React Router para separar vistas.

Arquitectura modular basada en reutilización de componentes.

Manipulación de fechas para calcular estados (pendiente / atrasada).

📂 Estructura del Proyecto
src/
│── components/        # Componentes reutilizables
│── pages/             # Vistas principales (Formulario, Dashboard)
│── models/            # Interfaces y tipos de TypeScript
│── routes/            # Configuración de React Router
│── App.tsx            # Componente raíz
│── main.tsx           # Punto de entrada
🛠️ Instalación y Ejecución

1️⃣ Clonar el repositorio:

git clone https://github.com/tuusuario/gestor-notas.git

2️⃣ Acceder al directorio:

cd gestor-notas

3️⃣ Instalar dependencias:

npm install

4️⃣ Ejecutar la aplicación en modo desarrollo:

npm run dev

5️⃣ Abrir en el navegador:

http://localhost:5173
📸 Flujo de Uso

Crear una nota desde el formulario.

Visualizarla en el dashboard.

Marcar su estado según progreso.

Editar notas pendientes si es necesario.

Eliminar todas las notas cuando se desee reiniciar.

🎯 Objetivo Académico

El propósito de esta práctica es aplicar los conocimientos de:

Desarrollo de SPAs (Single Page Applications).

Uso profesional de React con TypeScript.

Organización del código en frontend moderno.

Manejo de rutas y tipado en aplicaciones reales.

🔮 Posibles Mejoras Futuras

Persistencia de datos con LocalStorage o backend.

Filtros avanzados de búsqueda.

Notificaciones o recordatorios.

Diseño responsive más completo.

Tests con React Testing Library.

👨‍💻 Autor

Proyecto realizado por [Tu Nombre]
Asignatura: Desarrollo en Entorno Cliente – DAW

Si quieres, puedo adaptarlo al nombre real del repo, añadir instrucciones de despliegue (por ejemplo en Netlify) o hacerlo más corto para entrega académica.

https://github.com/islena17/Proyecto_Final_Cliente, autora: Islena Polo Franco

Perfecto ✅
He revisado tu repositorio de GitHub (Proyecto_Final_Cliente) para ajustar el README a la información real del proyecto. El repositorio está descrito como el proyecto final de 2º DAW para la asignatura de Cliente y está desarrollado principalmente en TypeScript junto con HTML, CSS y JavaScript .

🔗 Repositorio

Puedes acceder al proyecto aquí:
👉 Ver repositorio en GitHub

📝 Gestor de Notas – Proyecto Final DAW (Cliente)

Aplicación web desarrollada como proyecto final de 2º DAW para la asignatura de Desarrollo en Entorno Cliente.
La aplicación permite crear, organizar y gestionar notas mediante una interfaz dinámica construida con React + TypeScript y Vite.

🚀 Tecnologías Utilizadas

⚡ Vite – Entorno de desarrollo rápido y moderno.

⚛️ React – Construcción de la interfaz basada en componentes.

🔷 TypeScript – Tipado estático para mejorar la calidad del código.

🧭 React Router – Navegación entre vistas sin recargar la página.

🎨 CSS – Estilado de la aplicación.

🧩 Uso de Props tipadas para la comunicación entre componentes.

📌 Funcionalidades Principales
✍️ Creación de Notas

El usuario puede añadir nuevas notas mediante un formulario.
Cada nota incluye información necesaria para su seguimiento.

📊 Dashboard de Organización

Las notas se muestran en un panel donde se clasifican automáticamente según su estado:

✅ Completadas

⏳ Pendientes

⚠️ Atrasadas (cuando se supera la fecha establecida)

✏️ Edición de Notas

Solo las notas pendientes pueden modificarse, permitiendo actualizar su contenido.

🗑️ Eliminación Global

El sistema permite eliminar todas las notas para reiniciar la gestión.

🧠 Conceptos de Desarrollo Aplicados

Este proyecto pone en práctica conocimientos clave del desarrollo frontend moderno:

Arquitectura basada en componentes reutilizables.

Gestión del estado para actualizar la UI dinámicamente.

Tipado fuerte con interfaces de TypeScript.

Navegación SPA mediante React Router.

Comunicación entre componentes usando props tipadas.

Lógica de control de fechas para determinar estados de las notas.

📂 Estructura General del Proyecto
Proyecto_final_cliente/
│── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Vistas principales (Formulario / Dashboard)
│   ├── types/          # Interfaces y modelos TypeScript
│   ├── routes/         # Configuración de rutas
│   ├── App.tsx         # Componente raíz
│   └── main.tsx        # Punto de entrada
│
├── public/
├── index.html
└── package.json
🛠️ Instalación y Ejecución

1️⃣ Clonar el repositorio:

git clone https://github.com/islena17/Proyecto_Final_Cliente.git

2️⃣ Entrar en el proyecto:

cd Proyecto_Final_Cliente

3️⃣ Instalar dependencias:

npm install

4️⃣ Ejecutar en modo desarrollo:

npm run dev

5️⃣ Abrir en el navegador:

http://localhost:5173
📸 Flujo de Uso de la Aplicación

El usuario crea una nota desde el formulario.

La nota aparece en el dashboard.

Se clasifica automáticamente según su estado.

Puede editar notas pendientes.

Puede eliminar todas las notas si desea reiniciar.

🎯 Objetivo Académico

El objetivo del proyecto es aplicar los conocimientos adquiridos en:

Desarrollo de Single Page Applications (SPA).

Uso profesional de React con TypeScript.

Organización modular del frontend.

Gestión de rutas y tipado de datos.

Buenas prácticas en desarrollo en entorno cliente.

👩‍💻 Autora

Islena Polo Franco
Proyecto Final – 2º DAW
Asignatura: Desarrollo en Entorno Cliente
