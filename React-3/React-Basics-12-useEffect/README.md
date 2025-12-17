# React Basics 12 - useEffect

Proyecto educativo para aprender a usar el hook useEffect en React, el cual permite ejecutar código en diferentes momentos del ciclo de vida de un componente.

## Conceptos Esenciales

### ¿Qué es useEffect?
`useEffect` es un hook de React que permite ejecutar **efectos secundarios** en componentes funcionales. Los efectos secundarios son operaciones que afectan algo fuera del componente, como:
- Peticiones HTTP a APIs
- Suscripciones a eventos
- Manipulación del DOM
- Timers (setTimeout, setInterval)
- Logging en consola

### Sintaxis Básica
```javascript
useEffect(() => {
  // Código del efecto
}, [dependencias]);
```

### Tres Formas de Usar useEffect

#### 1. Sin Array de Dependencias
```javascript
useEffect(() => {
  console.log("Se ejecuta en CADA renderizado");
});
```
- Se ejecuta después de **cada renderizado**
- Cuidado: puede causar bucles infinitos si modifica el estado

#### 2. Con Array Vacío `[]`
```javascript
useEffect(() => {
  console.log("Se ejecuta solo al MONTAR el componente");
}, []);
```
- Se ejecuta **una sola vez** cuando el componente se monta
- Equivalente a `componentDidMount` en componentes de clase
- Ideal para peticiones HTTP iniciales

#### 3. Con Dependencias `[variable]`
```javascript
useEffect(() => {
  console.log("Se ejecuta cuando cambia 'user'");
}, [user]);
```
- Se ejecuta cuando alguna **variable del array cambia**
- Permite reaccionar a cambios específicos del estado

### Función de Limpieza (Cleanup)
```javascript
useEffect(() => {
  console.log("Montado");
  
  return () => {
    console.log("Desmontado - Limpieza");
  };
}, []);
```
- La función que se **retorna** se ejecuta al **desmontar** el componente
- Útil para: cancelar suscripciones, limpiar timers, remover event listeners

## En Este Proyecto

### Componente `MovieList.jsx`
Demuestra los tres tipos de useEffect:

1. **Al montar**: Muestra un mensaje cuando aparece en pantalla
2. **Al desmontar**: Muestra un mensaje cuando se oculta con el botón "Toggle Movies"
3. **Ejemplo comentado**: useEffect sin dependencias

### Componente `App.jsx`
Demuestra useEffect con dependencias:

1. **useEffect con `[user]`**: Se ejecuta cada vez que el estado `user` cambia
2. **Renderizado condicional**: El botón "Toggle Movies" monta/desmonta MovieList
3. **Comunicación entre componentes**: Login actualiza el estado user en App

### Flujo de Ejecución
```
Usuario hace clic en "Login" → 
setUser actualiza estado → 
useEffect en App detecta cambio en [user] → 
Se ejecuta el código del useEffect
```

## Instalación

```bash
npm install
npm run dev
```

## Conceptos Relacionados
- **Montaje**: Cuando el componente aparece en el DOM
- **Desmontaje**: Cuando el componente se elimina del DOM
- **Renderizado**: Cuando React actualiza el componente en pantalla
- **Dependencias**: Variables que useEffect "observa" para ejecutarse
