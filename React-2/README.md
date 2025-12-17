# React Basics - Proyectos de Aprendizaje

Colección de proyectos progresivos para aprender React desde cero. Cada proyecto introduce un concepto fundamental de React con ejemplos prácticos y código comentado.

## Proyectos Incluidos

### React-Basics-08: Props Parent to Child
**Tema:** Comunicación de padre a hijo mediante props

**Contenido:**
- Pasar datos de componente padre a hijo
- Uso de props para transmitir strings, objetos y estados
- Desestructuración de props
- Hook useState básico

**Componentes:** App, HeaderComponent, ButtonComponent

---

### React-Basics-09: Props Child to Parent
**Tema:** Comunicación de hijo a padre mediante callbacks

**Contenido:**
- Patrón de funciones callback
- Enviar datos del hijo al padre
- Actualizar el estado del padre desde el hijo
- Manejo de eventos

**Componentes:** App, HeaderComponent, ButtonComponent, Login

---

### React-Basics-10: Conditional Rendering
**Tema:** Renderizado condicional de componentes

**Contenido:**
- Operador lógico `&&` para renderizado condicional
- Operador ternario `? :` para alternativas
- Conceptos truthy/falsy en React
- Mostrar/ocultar elementos según estado

**Componentes:** App, HeaderComponent, ButtonComponent, Login

---

### React-Basics-11: List Rendering
**Tema:** Renderizado de listas y arrays

**Contenido:**
- Método `.map()` para renderizar arrays
- Uso de la prop `key` en listas
- Renderizar listas de objetos
- Patrones comunes de listas

**Componentes:** App, HeaderComponent, ButtonComponent, Login, MovieList, AnimalList

---

## Progresión de Aprendizaje

Los proyectos están diseñados para aprenderse en orden:

1. **Props básicas** → Comunicación unidireccional padre-hijo
2. **Callbacks** → Comunicación bidireccional hijo-padre
3. **Renderizado condicional** → Control de qué se muestra
4. **Listas** → Renderizado de múltiples elementos

## Estructura de Cada Proyecto

```
proyecto/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   ├── components/      # Componentes reutilizables
│   └── assets/          # Recursos estáticos
├── package.json         # Dependencias
└── README.md           # Documentación del proyecto
```

## Instalación y Uso

Cada proyecto se ejecuta de forma independiente:

```bash
cd React-Basics-XX-nombre-proyecto
npm install
npm run dev
```

## Tecnologías

- **React 18+**: Biblioteca principal
- **Vite**: Build tool y dev server
- **JavaScript/JSX**: Lenguaje de desarrollo
- **CSS**: Estilos

## Notas

- Todo el código está **comentado en español** para facilitar el aprendizaje
- Los ejemplos son **progresivos**: cada proyecto añade complejidad
- Los proyectos son **independientes**: puedes estudiarlos en cualquier orden (aunque se recomienda el orden numérico)
