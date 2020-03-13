> **⚠️ THIS PROJECT IS EARLY WORK IN PROGRESS**

# marmalade 🍊

Another opinionated **JAM**stack starter with static optimization, featuring:

- A **Design System** (custom built in [Styled Components](https://styled-components.com/) with themes)
- **TypeScript**
- **MDX** (extended to support front matter and custom layouts)

**Powered by [Next.js](https://nextjs.org)**.

## Roadmap

### Immediate

- [x] ~~🎨 Theming Schema~~.
- [x] ~~🏁 ESLint, Prettier and commit tools~~.
- [ ] 🧱 Components
  - [x] ~~Container~~
  - [ ] Text
  - [ ] Heading
  - [ ] Divider
  - [ ] Blockquote
  - [ ] Link
  - [ ] Image
  - [ ] Table
  - [ ] List
  - [ ] Code inline
  - [ ] Code block
- [ ] 🏗 Layouts
  - [ ] Home (move the README).
  - [ ] Default
  - [ ] Blog
  - [ ] Blog Posts (index/tags)
  - [ ] Use dynamic imports in `Layouts`
- [ ] 🔎 Scripts
  - [x] ~~Get files~~
  - [x] ~~Get files by latest.~~
  - [ ] Get files by tag.
  - [ ] Prettify the date.
  - [x] ~~Pass through static files.~~ N/A use `public`.
  - [ ] Generate Favicons.
  - [ ] Generate RSS.
  - [x] ~~Generate JSONFeed.~~
  - [x] ~~Generate manifest.~~
- [ ] 🖼 Image optimization.
  - or at least a guide to setup with Netlify LFS?
- [ ] ⚡️ Performance audits and optimization.
- [ ] ♿️ Accessibility testing and optimization.

### Later

- [ ] 💧 Mimic 11ty cascading data?
- [ ] 🔍 Better Type checking of front matter (which could be solved by the next item)
- [ ] 🔩 Use MDX Async API
- [ ] 🐞 Types for theme dot notation (e.g. colors).
- [ ] 🚇 Offline support.
- [ ] ⚡️ Preact in production.
- [ ] 📝 Netlify CMS.
- [ ] 🎨 Extract Design System to separate project.

## Usage

### Installation

1. There are two options to choose from:

   1. [Generate a new repo](https://github.com/joe-bell/marmalade/generate) from this template repo, **or…**
   2. Clone or fork this template repo:
      ```sh
      git clone git@github.com:joe-bell/marmalade.git
      ```

2. Install dependencies:
   ```sh
   npm i
   ```

### Commands

The following commands are available for use, prefixed with `npm run`:

- `dev` - spins up a hot-reloading development environment.
- `production` - builds the application for production and [exports to static HTML](https://nextjs.org/learn/excel/static-html-export/export-the-index-page).
- `start` - runs the Next.js production server.
- `clean` - flushes `node_modules` and build directories.

## Configuration

For now, basic application info can be configured in [`marmalade.config.js`](./marmalade.config.js).

To configure the initial theme and components used to render MDX/Markdown, you'll need to customise the default [`_app.tsx`](./src/pages/_app.tsx) file.

## Architecture

- `src/`

  - `pages/`

    Supports `.md`, `.mdx`, `.tsx` format.

- `scripts/`

  Node scripts used by the application and Next.js to generate things like index pages.

  These scripts are also available for use in `next.config.js` under `.marmalade`.

  > Unfortunately, Next.js doesn't currently support it's config in `.ts`. To workaround this, scripts are compiled to `.js` in `.marmalade` before build time.
  >
  > It's a hacky solution but I can't think of a better one for now.

## Q&A

<details>
 <summary><b>Why does this project exist?</b></summary>
  <p>It's how I like to build things right now. You might like it too or you might not; and that's totally fine.</p>

  <p>This project was born out of a polarization on "how things should be built" in the current Front End climate. Specifically, a comment stating "stop wasting time perfecting your personal site's tech stack". Tweaking my tech stack pushes me to leave my comfort zone and broaden my knowledge; I'd actively encourage others to try new tools where possible.</p>

  <p>Build what you love and don't feel disheartened to try something new or go down a different route.</p>
</details>

<details>
 <summary><b>Why not just use <a href="https://www.gatsbyjs.org/">Gatsby</a>?</b></summary>
  I love <a href="https://www.gatsbyjs.org/">Gatsby</a>, I use it for my <a href="https://github.com/joe-bell/joebell.co.uk">personal site</a>. I like the fact I can install a plugin and let it magically solve my problems, but I equally think it's important to understand what goes on <em>behind</em> the scenes. I heard about Next.js' static export feature just after finishing my personal site and felt like it was worth an explore.
</details>

<details>
 <summary><b>Why do you use CSS-in-JS (specifically <a href="https://styled-components.com/">Styled Components</a>)?</b></summary>
  It feels right. I was a SASS advocate, but now it just feels cumbersome and outdated. With CSS-in-JS I can make the most of a theme schema to reinforce design tokens. In comparison to Emotion, Styled Components benefits from a wider community, better TypeScript support and <a href="https://github.com/emotion-js/emotion/issues/1178">less restrictions on how to write CSS</a>.
</details>

<details>
 <summary><b>Why don't you follow the <a href="https://styled-system.com/theme-specification/">Styled System Theme Specification</a>?</b></summary>
  Marmalade's components use Styled System under the hood to generate themed style props. I just wasn't particularly a fan of the plural naming convention of theme keys, but I might change my mind on this if it's problematic.
</details>

<details>
 <summary><b>Why not use <a href="https://chakra-ui.com/">Chakra-UI</a>?</b></summary>
    <a href="https://chakra-ui.com/">Chakra-UI</a> is bound to the Styled System Theme Specification and Emotion, so unfortunately not an option for this project 💔
</details>

## Acknowledgements

- [**@mxstbr**](https://github.com/mxstbr) - _["mxstbr.com"](https://github.com/mxstbr/mxstbr.com)'s architecture was a fundamental resource for the start of this template. I owe Max massively for this._
- [**@robertcoopercode**](https://github.com/robertcoopercode) - [_"Using ESLint and Prettier in a TypeScript Project"_](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
