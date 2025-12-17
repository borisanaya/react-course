# Curso Básico de React

Este repositorio contiene una serie de proyectos progresivos para aprender React desde cero. Cada proyecto introduce nuevos conceptos y se construye sobre el conocimiento del anterior.

## Estructura del Curso

### React-Basics-01-project-created
**Tema:** Primer proyecto React con Vite

Proyecto inicial creado con Vite. Introduce la estructura básica de un proyecto React, configuración de Vite, y los archivos esenciales como `main.jsx`, `App.jsx`, y la configuración de desarrollo.

**Conceptos:**
- Estructura de un proyecto React
- Vite como herramienta de desarrollo
- Componente App básico
- Hot Module Replacement (HMR)

---

### React-Basics-02-components
**Tema:** Introducción a los componentes

Primeros pasos con componentes en React. Aprende qué son los componentes, cómo crearlos y cómo usarlos en tu aplicación.

**Conceptos:**
- ¿Qué son los componentes?
- Crear componentes funcionales
- HeaderComponent y ButtonComponent
- Importar y exportar componentes
- JSX básico

---

### React-Basics-02-components-css
**Tema:** Componentes con CSS y ejercicios

Carpeta de ejercicios complementaria a React-Basics-02-components. Contiene soluciones a ejercicios prácticos con componentes como FooterComponent, CardComponent, ButtonComponent y HeaderComponent ampliado.

**Conceptos:**
- Práctica de creación de componentes
- Múltiples componentes en una aplicación
- Estructura de carpetas para componentes

---

### React-Basics-03-exercises
**Tema:** Estilización de componentes con CSS

Continuación de React-Basics-02-components donde se agregan estilos CSS a los componentes existentes. Aprende cómo importar CSS en componentes y usar clases CSS.

**Conceptos:**
- Importar archivos CSS en componentes
- Usar `className` en lugar de `class`
- CSS anidado (nesting)
- Estilos específicos por componente
- Organización de archivos CSS

---

### React-Basics-04-events
**Tema:** Eventos en React

Introducción a los eventos en React. Aprende cómo manejar interacciones del usuario como clics, cambios en inputs, y movimientos del mouse.

**Conceptos:**
- Eventos en React vs HTML tradicional
- `onClick`, `onChange`, `onMouseEnter`
- Funciones manejadoras de eventos (handlers)
- Pasar funciones sin ejecutarlas
- Objeto del evento (e.target.value)
- Eventos sintéticos en React

---

### React-Basics-05-exercises
**Tema:** Ejercicios de eventos

Soluciones a los ejercicios propuestos en React-Basics-04-events. Implementa eventos adicionales como `onMouseEnter` y validación de inputs con mensajes en consola.

**Conceptos:**
- Múltiples eventos en un mismo elemento
- Evento `onMouseEnter` y `onMouseLeave`
- Validación de inputs con lógica condicional
- Template strings en JavaScript
- Feedback en consola

---

### React-Basics-06-variables-reactivity
**Tema:** Variables y reactividad con useState

Introducción crucial al concepto de estado en React. Demuestra por qué las variables normales no funcionan para actualizar la interfaz y por qué necesitamos `useState`.

**Conceptos:**
- ¿Qué es el estado en React?
- Diferencia entre variables normales y estado
- Introducción a `useState`
- Reactividad en React
- Por qué `let` no funciona para actualizar la UI
- Componentes controlados (inputs)

---

### React-Basics-07-exercises
**Tema:** Ejercicios con useState

Soluciones a los ejercicios de React-Basics-06-variables-reactivity. Implementa un contador de clics funcional y validación visual de inputs con mensajes en pantalla (no en consola).

**Conceptos:**
- Implementación completa de `useState`
- Contador de clics con estado
- Múltiples estados en un componente
- Validación visual con mensajes en UI
- Componente controlado completo
- Renderizado condicional (`&&`)
- Clases CSS dinámicas
- Feedback visual en tiempo real

---

## Progresión del Aprendizaje

### Nivel 1: Fundamentos (Proyectos 01-03)
- Estructura de proyectos React
- Componentes básicos
- JSX y estilos CSS

### Nivel 2: Interactividad (Proyectos 04-05)
- Eventos del usuario
- Funciones manejadoras
- Interacción básica

### Nivel 3: Estado y Reactividad (Proyectos 06-07)
- useState y estado
- Reactividad en React
- Interfaces dinámicas y actualizables

## Instalación General

Cada proyecto se instala y ejecuta de manera independiente:

```bash
cd [nombre-del-proyecto]
npm install
npm run dev
```

El servidor de desarrollo se abrirá en `http://localhost:5173`

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Navegador web moderno
- Editor de código (VS Code recomendado)

## Conceptos Clave del Curso

| Concepto | Proyecto donde se introduce |
|----------|----------------------------|
| Componentes | React-Basics-02-components |
| CSS en React | React-Basics-03-exercises |
| Eventos | React-Basics-04-events |
| useState | React-Basics-06-variables-reactivity |
| Estado reactivo | React-Basics-06-variables-reactivity |
| Validación visual | React-Basics-07-exercises |
| Componentes controlados | React-Basics-06-variables-reactivity |

## Orden Recomendado de Estudio

1. **React-Basics-01-project-created** - Familiarízate con la estructura
2. **React-Basics-02-components** - Aprende sobre componentes
3. **React-Basics-02-components-css** - Practica con ejercicios
4. **React-Basics-03-exercises** - Agrega estilos
5. **React-Basics-04-events** - Maneja eventos
6. **React-Basics-05-exercises** - Practica eventos
7. **React-Basics-06-variables-reactivity** - Entiende la reactividad
8. **React-Basics-07-exercises** - Domina useState

## Próximos Temas (Proyectos Futuros)

- **Props:** Pasar datos entre componentes
- **Lifting State Up:** Compartir estado entre componentes
- **useEffect:** Efectos secundarios y ciclo de vida
- **Formularios:** Manejo complejo de formularios
- **Listas y Keys:** Renderizar listas dinámicas
- **Comunicación entre componentes**
- **Context API:** Estado global
- **Custom Hooks:** Crear tus propios hooks

## Recursos Adicionales

- [Documentación oficial de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [JavaScript moderno (ES6+)](https://javascript.info)

## Notas Importantes

- Cada proyecto tiene su propio README con explicaciones detalladas
- Los proyectos son progresivos: cada uno se basa en el anterior
- Se recomienda hacer los ejercicios antes de ver las soluciones
- Practica modificando el código y experimentando
- Usa la consola del navegador (F12) para debugging

## Estructura de Carpetas Típica

```
proyecto/
├── node_modules/          # Dependencias (no se sube a git)
├── public/                # Archivos estáticos
├── src/                   # Código fuente
│   ├── components/        # Componentes React
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos del App
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # HTML base
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación del proyecto
```

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linter (verificar código)
npm run lint
```

## Tips de Aprendizaje

1. **Lee el README de cada proyecto** antes de explorar el código
2. **Experimenta con el código** - rompe cosas y arregla
3. **Usa la consola del navegador** para entender qué sucede
4. **Compara los proyectos** para ver cómo evoluciona el código
5. **Haz los ejercicios propuestos** antes de ver las soluciones
6. **Toma notas** de los conceptos que aprendes
7. **Practica creando tus propios componentes**

## Objetivo del Curso

Al completar estos proyectos, serás capaz de:
- ✅ Crear y estructurar proyectos React con Vite
- ✅ Crear y organizar componentes reutilizables
- ✅ Aplicar estilos CSS a componentes
- ✅ Manejar eventos del usuario
- ✅ Gestionar el estado con useState
- ✅ Crear interfaces interactivas y dinámicas
- ✅ Validar formularios en tiempo real
- ✅ Comprender la reactividad en React


