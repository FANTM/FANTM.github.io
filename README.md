# FANTM.github.io
Documentation for the FANTM APIs and Libraries, hosted [here](https://docs.getfantm.com). The website is built using Gatsby (so React), along with Material-UI as the main component library. The driving philosophy is that documentation should be incur no additional overhead while being maintained; the 100% of the effort should be directed at the documents themselves. We might not be completely there yet, but most improvements will be geared towards streamlining that process over everything else.

## Getting Started. 
Before working adding new pages, you first need to perform a bit of one-off setup. Just run:

```bash
git clone https://github.com/FANTM/fantm.github.io
cd fantm.github.io
npm install
```

Then you need to make your new branch where the docs will be added:

```bash
git checkout -b <username-topic>
```

You should be ready to get started!

## Updating Documentation
First make sure you are on your own branch (and it's up to date with the main branch if you've used it before).

To start changing documentation, just add the .mdx file ([read more about .mdx](https://mdxjs.com/) but TL;DR: it's spicey markdown) to the `./src/markdown-pages` folder, and add a path to the file in the `./src/data/TableOfContents.yaml` file. The only rule here is the block at the top of the .mdx file needs to have a slug: field that matches the entry in the TableOfContents file. Then you can push and open a PR on the github website which will be reviewed and automatically update the website. If you want to test what it will look like locally you can either run the build instructions or use an online markdown previewer.

## Local Building
Once you've run through the 'Getting Started' steps, all you should need to do is run `npm run develop`. Then you should be able to see a live-updating feed at `localhost:8000/` of any documentation you are updating.
