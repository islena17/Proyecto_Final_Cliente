# 📝 Gestor de Notas – Proyecto Final DAW (Cliente)

Aplicación web desarrollada como **Proyecto Final de 2º DAW** para la asignatura de **Desarrollo en Entorno Cliente**.

La aplicación permite crear, organizar y gestionar notas mediante una interfaz dinámica construida con **React + TypeScript** utilizando **Vite** como entorno de desarrollo.

---

## 🔗 Repositorio

👉 https://github.com/islena17/Proyecto_Final_Cliente

---

## 🚀 Tecnologías Utilizadas

* ⚡ **Vite** – Entorno de desarrollo rápido.
* ⚛️ **React** – Desarrollo de la interfaz basada en componentes.
* 🔷 **TypeScript** – Tipado estático para mayor seguridad y mantenimiento.
* 🧭 **React Router** – Navegación entre vistas (SPA).
* 🎨 **ThailWhind CSS** – Estilado de la aplicación.
* 🧩 **Props Tipadas** – Comunicación entre componentes asegurando integridad de datos.

---

## 📌 Funcionalidades

### ✍️ Creación de Notas

El usuario puede crear nuevas notas mediante un formulario introduciendo la información necesaria.

### 📊 Dashboard de Gestión

Las notas se muestran en un panel principal donde se clasifican automáticamente según su estado:

* ✅ **Completadas**
* ⏳ **Pendientes**
* ⚠️ **Atrasadas** (cuando se supera la fecha indicada)

### ✏️ Edición de Notas

Las notas en estado **pendiente** pueden editarse para modificar su contenido o fecha.

### 🗑️ Eliminación de Notas

Existe la opción de eliminar todas las notas almacenadas para reiniciar la aplicación.

---

## 🧠 Conceptos de Desarrollo Aplicados

Este proyecto aplica conocimientos clave del desarrollo en entorno cliente:

* Arquitectura basada en **componentes reutilizables**.
* Uso de **React con TypeScript** en una SPA.
* Tipado mediante **interfaces y props**.
* Gestión del estado para actualizar la interfaz dinámicamente.
* Navegación entre páginas con **React Router**.
* Organización modular del código.
* Lógica de fechas para determinar estados de las notas.

---

## 📂 Estructura del Proyecto

```
src/
│── components/        # Componentes reutilizables
│── pages/             # Vistas principales (Formulario y Dashboard)
│── types/             # Interfaces de TypeScript
│── routes/            # Configuración de React Router
│── App.tsx            # Componente raíz
│── main.tsx           # Punto de entrada
```

---

## 🛠️ Instalación y Ejecución

1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/islena17/Proyecto_Final_Cliente.git
```

2️⃣ Acceder al proyecto:

```bash
cd Proyecto_Final_Cliente
```

3️⃣ Instalar dependencias:

```bash
npm install
```

4️⃣ Ejecutar la aplicación:

```bash
npm run dev
```

5️⃣ Abrir en el navegador:

```
http://localhost:5173
```

---

## 📸 Flujo de Uso

1. Crear una nota desde el formulario.
2. Visualizarla en el dashboard.
3. Consultar su estado (pendiente, completada o atrasada).
4. Editar notas pendientes si es necesario.
5. Eliminar todas las notas para reiniciar la gestión.

---

## 🎯 Objetivo Académico

El objetivo del proyecto es aplicar los conocimientos adquiridos en:

* Desarrollo de **Single Page Applications (SPA)**.
* Uso de **React + TypeScript** en un proyecto real.
* Gestión de rutas y componentes.
* Organización profesional del frontend.
* Buenas prácticas en desarrollo en entorno cliente.

---

## 👩‍💻 Autora

**Islena Polo Franco**
2º Desarrollo de Aplicaciones Web (DAW)
Asignatura: **Desarrollo en Entorno Cliente**

---
