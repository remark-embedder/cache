<div align="center">
<h1>@remark-embedder/cache</h1>

<p>A cache for <a href="https://github.com/remark-embedder/core">@remark-embedder/core</a></p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## The problem

You're using [`@remark-embedder/core`][@remark-embedder/core] and you want to
cache the results of your transformers long-term so you don't have to make
network requests for HTML every time.

## This solution

This is a cache implementation specifically for
[`@remark-embedder/core`][@remark-embedder/core] that saves the results of
`getHTML` for a transformer to disk (in `node_modules/.cache` by default).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```shell
npm install @remark-embedder/cache
```

## Usage

```ts
import Cache from '@remark-embedder/cache'

const cache = new Cache()

async function go() {
  const result = await remark()
    .use(remarkEmbedder, {
      cache,
      transformers: [
        // transformers
      ],
    })
    .use(html)
    .process(someMarkdown)
}

go().then(go).then(go).then(go)

// your transformers will only be called once even though we call process 4 times.
```

The default directory is pretty reasonable:
`path.join(process.cwd(), 'node_modules/.cache/@remark-embedder/cache')`, but if
you want to change it, that's the first argument of the `Cache` constructor:
`new Cache(directory)`.

## Inspiration

- [Gatsby's built-in plugin cache][gatsby-plugin-cache-source]

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/remark-embedder/cache/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/remark-embedder/cache/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/remark-embedder/cache/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/remark-embedder/cache/commits?author=MichaelDeBoey" title="Documentation">📖</a> <a href="https://github.com/remark-embedder/cache/commits?author=MichaelDeBoey" title="Code">💻</a> <a href="#maintenance-MichaelDeBoey" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/andreashouben"><img src="https://avatars3.githubusercontent.com/u/3708288?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreas Houben</b></sub></a><br /><a href="https://github.com/remark-embedder/cache/commits?author=andreashouben" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/remark-embedder/cache/validate?logo=github&style=flat-square
[build]: https://github.com/remark-embedder/cache/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/remark-embedder/cache.svg?style=flat-square
[coverage]: https://codecov.io/github/remark-embedder/cache
[version-badge]: https://img.shields.io/npm/v/@remark-embedder/cache.svg?style=flat-square
[package]: https://www.npmjs.com/package/@remark-embedder/cache
[downloads-badge]: https://img.shields.io/npm/dm/@remark-embedder/cache.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/@remark-embedder/cache
[license-badge]: https://img.shields.io/npm/l/@remark-embedder/cache.svg?style=flat-square
[license]: https://github.com/remark-embedder/cache/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/remark-embedder/cache/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/remark-embedder/cache?color=orange&style=flat-square
[bugs]: https://github.com/remark-embedder/cache/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/remark-embedder/cache/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/remark-embedder/cache/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[@remark-embedder/core]: https://github.com/remark-embedder/core
[gatsby-plugin-cache-source]: https://github.com/gatsbyjs/gatsby/blob/0a06a795c434312150f30048567b0e2cd797027e/packages/gatsby/src/utils/cache.ts
<!-- prettier-ignore-end -->
