# The way this project was built

# Setting up Tailwind CSS

```bash
# If you're on Next.js v10 or newer
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create your configuration files

```bash
npx tailwindcss init -p
```

Configure Tailwind to remove unused styles in production

```js
 // tailwind.config.js
  module.exports = {
      //...
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
      //...
  }
```

  create folder under the root, named `components`.

  delete all the code in the `globals.css`,
  and paste this

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

设置页面背景

```css
/* globals.css */

@layer base {
  body {
    @apply bg-gradient-to-bl from-blue_pink_set-blue_2 to-blue_pink_set-blue_1 min-h-screen
  }
}
```
使用的颜色，需要先在`tailwind.config.js`里设置。

> 自定义color：https://tailwindcss.com/docs/customizing-colors#custom-colors

> @apply的作用：https://tailwindcss.com/docs/functions-and-directives#apply

```js
module.exports = {
  //...
  theme: {
    //...
    extend: {
      colors: {
        blue_pink_set: {
          blue_1:"#163762",
          blue_2:"#082957",
          blue_3:"#123668",
          pink:"#f3d7d1",
          gray:"#838597"
        }
      }
    }
  },
  //...
}
```
如果没有放到extend之中，直接把colors写到themes里，相当于是覆盖了

安装最新版本 material-UI

```bash
npm install @material-ui/core@next @emotion/react @emotion/styled
```