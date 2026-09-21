# 🗂️ Project Manager — Drag & Drop en TypeScript

Proyecto en TypeScript que aplica conceptos de **Programación Orientada a Objetos**: clases, herencia, decoradores, genéricos y el patrón **Singleton**. Incluye un formulario validado para crear proyectos y una interfaz de **drag & drop** para moverlos entre estados, renderizando el DOM desde templates dinámicos.

---

## ✨ Características

- 📝 Creación de proyectos con **título**, **descripción** y **número de personas** asignadas.
- ✅ **Validación de formulario** con feedback visual al usuario.
- 🧲 **Drag & Drop nativo** (HTML5 Drag & Drop API) para mover proyectos entre:
- 🟣 **Active Projects**
- 🔵 **Finished Projects**
- 🏗️ Arquitectura orientada a objetos:
- Clase `Project` — modelo de dominio.
- Clase `ProjectState` — **Singleton** que centraliza el estado de la aplicación.
- Clase base `Component<T>` — renderizado del DOM desde templates.
- Clases `ProjectInput` y `ProjectList` — heredan de `Component` y componen la UI.

## 🧠 Conceptos de TypeScript aplicados

| Concepto | Dónde se usa |
| --- | --- |
| Clases & Herencia | `Component`, `ProjectInput`, `ProjectList`, `ProjectItem` |
| Decoradores | `@autobind` para bindear métodos a la instancia |
| Genéricos | Clase `State<T>` para un estado tipado y reutilizable |
| Singleton | `ProjectState.getInstance()` — única fuente de verdad |
| Union Types & Enums | `ProjectStatus.Active |
| Type Guards | Validación de inputs del formulario |
| Interfaces | Contratos de *listeners* y estructura de `Project` |

---

## 🚀 Instalación y uso

Requisito previo: tener [pnpm](https://pnpm.io/installation) instalado.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/project-manager-ts.git
cd project-manager-ts

# 2. Instalar dependencias
pnpm install

# 3. Compilar TypeScript en modo observador
pnpm run watch
# o una compilación única
pnpm run build

# 4. Servir la carpeta /dist (Live Server de VS Code o similar)
```

> Abre `dist/index.html` en el navegador o usa la extensión **Live Server**.

### Scripts disponibles

| Script | Descripción |
| --- | --- |
| `pnpm run build` | Compila TypeScript a JavaScript en `/dist` |
| `pnpm run watch` | Compila automáticamente al guardar cambios |

---

## 📁 Estructura del proyecto

```javascript
project-manager-ts/
├── src/
│   ├── models/        # Tipos, enums e interfaces (Project, ProjectStatus)
│   ├── state/         # ProjectState (Singleton) y State<T> genérico
│   ├── components/    # Component base, ProjectInput, ProjectList, ProjectItem
│   ├── decorators/    # @autobind
│   └── app.ts         # Punto de entrada: instancia los componentes
├── dist/              # Código compilado (JS + index.html)
├── tsconfig.json
└── package.json
```

---

## 🎮 Cómo usar la app

1. Completa el formulario con **título**, **descripción** y **personas asignadas**.
2. Presiona **ADD PROJECT** — el proyecto aparecerá en *Active Projects*.
3. Arrastra la tarjeta al panel de *Finished Projects* para marcarla como completada (o viceversa).

---

## 🛠️ Stack

- **TypeScript** — lenguaje principal
- **pnpm** — gestor de paquetes
- **HTML5** — estructura y templates (`<template>`)
- **CSS** — estilos (sin frameworks)
- **Drag & Drop API** — interacción de arrastrar y soltar
