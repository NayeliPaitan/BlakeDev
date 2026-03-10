# 🟣 BlakeDev — Plataforma de Contenido Tech

> Vue 3 + Vite · GitHub Pages ready

## 🚀 Setup

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura

```
blakedev/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js               ← Entry point + Vue Router
    ├── App.vue               ← Layout raíz (Nav + RouterView + Footer)
    ├── assets/
    │   └── global.css        ← Variables, reset, helpers globales
    ├── composables/
    │   ├── useCursor.js      ← Cursor personalizado
    │   ├── useReveal.js      ← Scroll reveal animations
    │   └── useActiveSection.js ← Nav link activo al hacer scroll
    ├── components/
    │   ├── AppCursor.vue     ← Cursor animado
    │   ├── AppNav.vue        ← Navbar fija con scroll effect
    │   ├── AppFooter.vue     ← Footer
    │   ├── CursoCard.vue     ← Card de curso
    │   ├── RecursoCard.vue   ← Card de recurso
    │   ├── ProyectoCard.vue  ← Card de proyecto (estilo terminal)
    │   └── SocialCard.vue    ← Card de red social
    └── views/
        └── HomeView.vue      ← Todas las secciones (Hero, Cursos, Recursos, Proyectos, Comunidad)
```

## 🌐 Deploy en GitHub Pages

1. Cambia `base` en `vite.config.js` al nombre de tu repo:
   ```js
   base: '/blakedev/'  
   ```

2. Build y sube la carpeta `dist/`:
   ```bash
   npm run build
   ```

3. En GitHub: **Settings → Pages → Deploy from branch `main` / `dist`**
   (o usa GitHub Actions con el workflow de Vite)

## 🔗 Actualizar links sociales

En `src/views/HomeView.vue`, busca el array `socials` y cambia los `href`:

```js
const socials = [
  { ..., href: 'https://www.instagram.com/blakedev.np/' },
  { ..., href: 'https://www.instagram.com/nayeli.paitan/' },
  { ..., href: 'https://www.linkedin.com/in/nayeli-alison-paitan-ramirez/' },
  { ..., href: 'https://www.tiktok.com/@nayeli.paitan'   },
  { ..., href: 'https://www.youtube.com/@NayeliPaitan'    },
  { ..., href: 'https://github.com/NayeliPaitan'    },
]
```

## 🎨 Brand Colors

| Variable   | Valor     |
|------------|-----------|
| `--p1`     | `#894df8` |
| `--p2`     | `#A855F7` |
| `--p3`     | `#C084FC` |
| `--bg`     | `#0a1a3b` |
| `--text`   | `#F5F5F7` |

**BlakeDev · By Nayeli Paitan**
