# [Corchete]

**Cuaderno de análisis para Gramática** · Profesorado en Letras · Universidad Nacional de Formosa

Corchete es una app de estudio para la materia Gramática. Reúne en un solo lugar los apuntes, la práctica de análisis sintáctico y la autoevaluación, todo construido a partir de la bibliografía de la cátedra.

**Abrir la app:** https://redmouse7112.github.io/corchete/

Funciona en el celular y en la computadora, sin instalar nada. Para usarla como una app, abrí el link en Chrome y elegí **⋮ → Agregar a la pantalla de inicio**.

---

## Qué incluye

| Sección | Para qué sirve |
|---|---|
| **Inicio** | Oración del día ya analizada y avance por unidad. |
| **Apuntes** | Resumen de las 7 unidades, con ejemplos, oraciones agramaticales marcadas y la fuente de cada tema. |
| **Analizar** | 59 oraciones para etiquetar constituyente por constituyente: funciones, construcciones verbales, valores de *se* y proposiciones. Corrige y explica cada parte. |
| **Pruebas** | 4 árboles de decisión con las pruebas de reconocimiento de la cátedra: ¿qué función cumple?, ¿hay perífrasis?, ¿qué *se* es?, ¿qué proposición es? |
| **Fichas** | 105 fichas con repaso espaciado: nuevas, en repaso y dominadas. |
| **Práctica** | 69 preguntas de opción múltiple, en modo práctica (con explicación inmediata) o simulacro (10 preguntas con cronómetro). |

### Unidades

1. Nociones sintácticas
2. Clases de palabras
3. Flexión verbal
4. Modificadores del núcleo verbal
5. Perífrasis verbales
6. Los valores de *se*
7. Oración compuesta y compleja

### Bibliografía en la que se basa

Di Tullio, *Manual de gramática del español* · Demonte (1999), cap. 38 y §3.6 · Gómez Torrego (1999), cap. 51 · Yllera (1999), cap. 52 · Ciapuscio y Ferrari (2004), cap. 2 · Ciapuscio, Giammatteo, Albano y Ferrari (2004), *Proposiciones subordinadas* · Giammatteo, *¿Cómo se clasifican las palabras?* · RAE-ASALE, *Nueva gramática. Manual* (caps. 4, 12 y 13) · Alcina y Blecua (1991) · presentaciones de clase de la cátedra (2025).

Los contenidos son resúmenes y ejemplos elaborados a partir de esa bibliografía; la app no reproduce los textos originales. Ante cualquier diferencia, vale el criterio de la cátedra.

---

## Diseño

- **Cuaderno de día, pizarrón de noche:** tema claro con renglones y margen rojo; tema oscuro de pizarrón. Sigue la preferencia del sistema o se cambia a mano.
- **Corchetes y resaltadores:** cada función sintáctica tiene su color, como en el análisis hecho a mano.
- **Sin servidor:** el progreso se guarda en el navegador (`localStorage`). No hay cuentas ni datos que salgan del dispositivo.

## Estructura del proyecto

```
index.html        App compilada (la que publica GitHub Pages)
build.py          Arma index.html a partir de src/
src/
  template.html   Estructura de la página
  styles.css      Estilos y temas
  app.js          Lógica de la app (JavaScript sin dependencias)
  data-1.js       Unidades 1 a 3
  data-2.js       Unidades 4 y 5
  data-3.js       Unidades 6 y 7
  data-4.js       Oraciones para analizar, paletas y árboles de decisión
```

Los contenidos están separados de la lógica: para agregar apuntes, fichas, preguntas u oraciones solo se editan los archivos `data-*.js`.

### Compilar

```bash
python build.py
```

Genera `index.html` en la raíz (y una copia en `dist/`).

---

Hecho por **RED**
