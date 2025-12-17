# React Basic 02 - Exercises (Soluciones)

Este proyecto contiene las soluciones a los ejercicios propuestos en el proyecto **React-Basics-02-components**. Aquí se implementan todos los componentes sugeridos con explicaciones detalladas.

## Descripción del Proyecto

Este proyecto implementa cuatro componentes React que demuestran conceptos básicos de componentización:

1. **FooterComponent** - Pie de página con información de copyright
2. **CardComponent** - Tarjeta con título y descripción
3. **ButtonComponent** - Botón con texto personalizado
4. **HeaderComponent** - Encabezado con menú de navegación ampliado

## Instalación

```bash
npm install
```

## Ejecutar el Proyecto

```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── App.jsx                        # Componente principal que integra todos los componentes
├── App.css                        # Estilos del componente principal
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── ButtonComponent.jsx        # Ejercicio 3: Botón modificado
    ├── CardComponent.jsx          # Ejercicio 2: Tarjeta
    ├── CardComponent.css          # Estilos de la tarjeta
    ├── FooterComponent.jsx        # Ejercicio 1: Footer
    ├── FooterComponent.css        # Estilos del footer
    ├── HeaderComponent.jsx        # Ejercicio 4: Header ampliado
    └── HeaderComponent.css        # Estilos del header
```

## Soluciones Implementadas

### Ejercicio 1: FooterComponent

**Archivo:** [src/components/FooterComponent.jsx](src/components/FooterComponent.jsx)

**Solución:**
```jsx
function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; React Basic 02 - Exercises. Todos los derechos reservados.</p>
        <p className="footer-subtitle">Proyecto educativo de React</p>
      </div>
    </footer>
  );
}
```

**Explicación:**
- Crea un componente de footer con información de copyright
- Incluye dos líneas de texto: copyright y subtítulo
- Tiene su propio archivo CSS para estilos personalizados

**Características:**
- Diseño centrado y con fondo claro
- Se posiciona al final de la página usando flexbox

---

### Ejercicio 2: CardComponent

**Archivo:** [src/components/CardComponent.jsx](src/components/CardComponent.jsx)

**Solución:**
```jsx
function CardComponent() {
  return (
    <div className="card">
      <h3 className="card-title">Tarjeta de Ejemplo</h3>
      <p className="card-description">
        Esta es una tarjeta con título y descripción. Los componentes de tarjeta 
        son muy útiles para mostrar información de manera organizada y visualmente 
        atractiva.
      </p>
    </div>
  );
}
```

**Explicación:**
- Crea un componente de tarjeta reutilizable
- Contiene un título (`h3`) y una descripción (`p`)
- Estructura semántica con clases CSS para estilización

**Características:**
- Efecto hover que eleva la tarjeta
- Bordes redondeados y espaciado interno
- Diseño responsivo que se adapta a diferentes tamaños
- En `App.jsx` se utilizan tres instancias del componente para demostrar reutilización

---

### Ejercicio 3: ButtonComponent (Modificado)

**Archivo:** [src/components/ButtonComponent.jsx](src/components/ButtonComponent.jsx)

**Solución:**
```jsx
function ButtonComponent() {
  return (
    <button>Haz clic aquí</button>
  )
}
```

**Explicación:**
- Modifica el texto del botón original de "Soy un botón" a "Haz clic aquí"
- Mantiene la misma estructura simple del componente original
- Demuestra cómo personalizar componentes

**Características:**
- Texto actualizado y más descriptivo
- Reutilizable en diferentes partes de la aplicación
- En `App.jsx` se muestran tres botones para demostrar reutilización

---

### Ejercicio 4: HeaderComponent (Ampliado)

**Archivo:** [src/components/HeaderComponent.jsx](src/components/HeaderComponent.jsx)

**Solución:**
```jsx
function HeaderComponent() {
  return (
    <header className="header">
      <h1>Bienvenidos a esta página</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
}
```

**Explicación:**
- Amplía el menú de navegación del componente original
- Agrega tres nuevos enlaces: "About", "Services" y "Portfolio"
- Mantiene la estructura semántica con `header`, `nav` y listas

**Características:**
- Menú ampliado de 4 a 7 enlaces
- Diseño horizontal con flexbox
- Efectos hover en los enlaces
- Responsive con wrap para pantallas pequeñas

---

## Componente App.jsx

**Archivo:** [src/App.jsx](src/App.jsx)

El componente principal integra todos los componentes creados:

```jsx
function App() {
  return (
    <div className="app">
      <HeaderComponent />

      <main className="main-content">
        <h2>Solución de Ejercicios React</h2>
        
        <section className="cards-container">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </section>

        <section className="buttons-container">
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}
```

**Estructura:**
- **Header**: Navegación en la parte superior
- **Main**: Contenido principal con múltiples cards y botones
- **Footer**: Pie de página en la parte inferior

**Demostración de Reutilización:**
- Se usan 3 instancias de `CardComponent`
- Se usan 3 instancias de `ButtonComponent`
- Demuestra cómo un mismo componente puede aparecer múltiples veces

---

## Conceptos Aplicados

### 1. Componentización
Cada parte de la interfaz está separada en su propio componente reutilizable.

### 2. Separación de Estilos
Cada componente tiene su propio archivo CSS, manteniendo los estilos organizados.

### 3. Reutilización
Los componentes `CardComponent` y `ButtonComponent` se usan múltiples veces en `App.jsx`.

### 4. Estructura Semántica
Uso de etiquetas HTML5 semánticas: `header`, `main`, `footer`, `nav`, `section`.

### 5. Layout con Flexbox y Grid
- Flexbox para el layout vertical (header, main, footer)
- CSS Grid para las tarjetas (responsive)
- Flexbox para los botones


---

## Mejoras Implementadas

Además de resolver los ejercicios básicos, se implementaron:

1. **Estilos CSS personalizados** para cada componente
2. **Efectos hover** en tarjetas y enlaces
3. **Diseño responsive** con CSS Grid y Flexbox
4. **Layout completo** con header, main content y footer
5. **Organización modular** con archivos separados para cada componente

