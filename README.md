# CraftCMS-Boilerplate

#### Set Up
1. clone the repo
2. Make sure to have `docker desktop` open 
3. cd to the project run `ddev start`
4. result -> `Successfully started` -`project-name`
5. run `ddev composer install`
6. open CP `http://project-name.ddev.site/admin`
7.  -> web@page.works -> Newcraft123
8. Update `credentials` to kick off new project
9. To stop the project run `ddev stop` -> spin down the container


#### Roadmap
- [x] CraftCMS 4 (requires php v8.0.2)
- [x] Vite ⚡
- [x] TypeScript | ES Modules
- [x] Tailwind | SCSS
- [x] Web Component/ LitElement Auto Loader
- [x] Generic Component Collection
- [ ] Dynamic Page Builder

#### Running on Dev
1. Update `.env` `CRAFT_ENVIRONMENT` to `dev`
2. `ddev exec npm run serve `
3. Go to the `host` URL on local web server.

#### Previewing Production on Local
1. Update `.env` `CRAFT_ENVIRONMENT` to `production` or `staging`
2. Run `ddev exec npm run build `
3. Go to the `host` URL on local web server.

#### Auto Loading Web Component/ LitElement

1. Create your custom element with the web-component `attribute`.
```html
<custom-element web-component></custom-element>
```

2. Create a corresponding `custom-element.ts` file for the Web Component or LitElement and export the default class.
```ts
export default class CustomElement extends HTMLElement {
    connectedCallback() {
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
    }
}
```
```ts
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export default class CustomElement extends LitElement {
    @property({
        hasChanged: (value: number, oldValue: number) => value !== oldValue,
    })
    private _count: number = 0;

    private increase(): void {
        this._count++;
    }

    private decrease(): void {
        this._count--;
    }

    render() {
        return html`
            <button @click="${this.decrease}"}>-</button>
            <span>Count: ${this._count}</span>
            <button @click="${this.increase}"}>+</button>
        `;
        // https://lit.dev/docs/components/overview/
    }
}
```

#### Creating new SCSS files
* Create `SCSS` files anywhere in `src/styles` and `templates`.
* `@import` `SCSS` files into the `src/styles/main.scss` and use Tailwind throughout the templates.

### PreviewMate Plugin
This project comes installed with the PreviewMate plugin.
Configuration file can be found in [config/preview-mate.php](https://github.com/nicholashamilton/craft-vite/blob/main/config/preview-mate.php).
An example utilizing the `blocksBuilder` matrix field is included in [templates/pages/_entry.twig](https://github.com/nicholashamilton/craft-vite/blob/main/templates/pages/_entry.twig).
Plugin documentation can be found [here](https://github.com/nicholashamilton/craft-preview-mate).
