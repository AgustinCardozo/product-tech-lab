# 🛍️ Talento Tech - Entrega Final Node.js

## 📋 Descripción

API RESTful para la gestión de productos y usuarios, desarrollada con Node.js, Express y Firebase Firestore. Permite registrar usuarios, autenticarse y realizar operaciones CRUD sobre productos.

## 🚀 Instalación

### Clona el repositorio

```bash
git clone https://github.com/AgustinCardozo/product-tech-lab.git
cd product-tech-lab
```

### Instala las dependencias:

```bash
npm install
```

### Configura las variables de entorno:

- Copia el archivo `.env-example` a `.env` y completa los valores requeridos.

### Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

O en modo producción:

```bash
npm start
```

## 🛠️ Endpoints principales

### Autenticación

- `POST /api/auth/register` — Registro de usuario
- `POST /api/auth/login` — Login y obtención de token JWT

### Productos (requiere autenticación)

- `GET /api/products` — Listar todos los productos
- `GET /api/products/:id` — Obtener producto por ID
- `POST /api/products/create` — Crear producto
- `DELETE /api/products/:id` — Eliminar producto

---

## ⚙️ Variables de entorno

El archivo `.env` debe contener:

```env
PORT=
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
JWT_SECRET=
```

## 👨‍💻 Autor

### Agustin Adrian Cardozo

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio de GitHub.
