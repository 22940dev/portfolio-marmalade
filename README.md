> โ ๏ธ **Update 21/06/2020:** I've left this project on the backburner for a bit whilst revamping [joebell.co.uk](https://joebell.co.uk/).    
> I've changed strategy on a few things, but once I find the time I'll add them back.   
> **This project is still a [work in progress](#to-do)**

# marmalade ๐

Another opinionated **JAM**stack starter with static optimization.

Powered by [**Next.js**](https://nextjs.org) and friends:

## Features

- ๐จ [**Theme UI**](https://theme-ui.com/) (with a default theme)
- ๐ [**MDX**](https://mdxjs.com/) (via [next-mdx-enhanced](https://github.com/hashicorp/next-mdx-enhanced))
- โก๏ธ [**Preact**](https://preactjs.com/)
- ๐ [**TypeScript**](https://typescriptlang.org/)
- ๐ Multiple "posts" directories (with index pages)
- ๐ท Tagging (with index pages)
- ๐ก RSS feed generation
- โ๏ธ Manifest generation
- ๐ Extended front matter
- ๐ข Deploy to [Netlify](https://netlify.com/) or your platform of choice
- โจ๏ธ [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Commitizen](https://github.com/commitizen/cz-cli)

### To do

- โน๏ธ Favicon generation (including updating the repo's meta info)
- ๐ Customisable layouts
- ๐งฑ Customisable components (including a nicer dark mode button and less B&Q-esque theme)
- ๐ทโโ GitHub Actions
- ๐งช Tests (I know I'm sorry)
- ๐ Performance audits and optimisation
- โฟ๏ธ Accessibility testing and optimisation

### Feature candidates

- ๐ฌ Webmentions
- ๐ง Mimic 11ty cascading data? (e.g. `.json` file in folder to configure layouts for all pages)
- ๐ Offline support
- ๐ Netlify CMS

## Getting started

Head over to the ["Getting started" guide](https://marmalade.joebell.co.uk/blog/getting-started) on the demo site.

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
 <summary><b>Why do you use CSS-in-JS (specifically <a href="https://theme-ui.com/">Theme-UI</a>)?</b></summary>
  It feels right. I was a SASS advocate, but now it just feels cumbersome and outdated. With CSS-in-JS I can make the most of a theme schema to reinforce design tokens.
</details>

<details>
 <summary><b>Why not use <a href="https://chakra-ui.com/">Chakra-UI</a>?</b></summary>
    <a href="https://chakra-ui.com/">Chakra-UI</a> is bound to the Styled System Theme Specification and Emotion, so unfortunately not an option for this project ๐
</details>

## Acknowledgements

- [**@mxstbr**](https://github.com/mxstbr) - _["mxstbr.com"](https://github.com/mxstbr/mxstbr.com)'s architecture was a fundamental resource for the start of this template. I owe Max massively for this._
- [**@robertcoopercode**](https://github.com/robertcoopercode) - [_"Using ESLint and Prettier in a TypeScript Project"_](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
