module.exports = {
  title: 'remobodo-book', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'off-box <tackman@tackman.info>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to `en`.
  // size: 'A4', // paper size.
  theme: 'vivliostyle-theme-dnd-5e-phb', // .css or local dir or npm package. default to undefined.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  entry: [
    'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    'chapters/mtg.md',
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set indivisually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  // cover: './cover.png', // cover image. default to undefined.
  // workDir: './dist', // default to `.vivliostyle`.
}
