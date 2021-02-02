# CyberSoc's Website

This repo contains all the code for [cybersoc.co.uk](https://cybersoc.co.uk).

## Contributing

The main way people can contribute to the website is by writing blog posts. These are markdown files placed in the `src/markdown-posts` directory.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for specific details about how to submit your contribution.

## Development

This section will walk you through how to set up a development environment to work on the website locally.

### Editor

This was originally written using VSCode, but any text editor will suffice, providing it has support for the required plugins (ESLint and Prettier)

#### ESLint

ESLint has been set up to enforce a standard code style across the entire project, as well as watch out for (and potentially _fix_) some common errors made when programming.

#### Prettier

Formatted code is good code. We use Prettier to format all of the languages used in this project.

The `.prettierrc` config file can be found at the root of this project, and will be used by Prettier when formatting any and all of the in here. You can also run Prettier on all the source files at once in this project by typing the following command when inside the project directory:

```sh
yarn format
```

### Git

Once you have your editor set up, it is important that you're working on the correct branch. As github uses the `master` branch for deployment, we use the branch `gatsby` as the main development branch. Git should recognize this and automatically check out `gatsby` for new clones. You can check which branch you're on with `git branch`. The branch with the `*` before it is the currently selected branch. You can use `git checkout <branch-name>` to switch branch.

### Node

The website requires [node.js](https://nodejs.org/) to be installed to run properly. Install this using your preferred method. You can check that node is installed properly by running the command `node -v`. This command will print the version of node installed. At the time of writing the site, that was version `v12.16.1`, so we treat that as the minimum supported version.

### Yarn

We use the [yarn](https://yarnpkg.com/) package manager for dependency management. Theoretically it is possible to use `npm`, but due to issues with dependency locking it is strongly discouraged.

Install yarn using your preferred method. You can check that yarn is installed correctly by running `yarn -v`. This command will print the version of yarn installed.

Once you have yarn installed, you can use it to download the (many) dependencies. Run the following from a terminal:

```sh
yarn install
```

As this is a node project, and accordingly has a very large amount of dependencies, this command may take longer than most, depending on your system performance and internet speed.

### Gatsby

The main framework that this site is built on is [Gatsby](https://www.gatsbyjs.com/).

To start a local development server for the site, type:

```sh
gatsby develop
```

This will start a local server on your computer for you to test any changes you make to the code. Whenever you make a change and save it, the server will refresh the web page to reflect it.

This local server is available at [http://localhost:8000](http://localhost:8000), so just visit that address in your web browser to view the site!

## Making modifications

### Modifying Pages

All the hard-coded pages for this site can be found inside `src/pages` (e.g. `src/pages/index.js`). These are written in JSX, which is a combination of JS and HTML. Modify it like you would a normal website, and any changes you make will be shown on the live server.

### Adding Blog Posts

One of the coolest parts of this site is its `/blog` page. Through the wonders of GraphQL and GatsbyJS, you can write articles for this website in Markdown and have them be automatically rendered as HTML pages!

To write a blog post, there are a couple of things you need to do.

#### Include the correct frontmatter

The metadata (Author, Date, Title, etc) for each blog post is specified using frontmatter. The frontmatter for an example blog post can be seen below:

```
---
path: "/blog/my-post-path"
date: "2020-04-13"
author: "Ben Silverman"
title: "Why JS frameworks are the future of all programming everywhere."
---
```

This must be placed at the beginning of your `.md` file.

#### Put your post in the right place

Blog posts must be placed in `src/markdown-posts` to be detected and rendered properly.

It's important that your post is located in the correct directory, otherwise it won't be detected by GraphQL and displayed as a blog post. This directory is `src/markdown-posts`.
To submit your blog post, please use Github's pull requests feature. The easiest way to do this is to fork the repo, commit your post to your fork, and then create a pull request using Github's online interface. It is important that you use a descriptive commit message for your commit, such as `Add blog post <title>`.

---

The code of this website is available under the GNU AGPLv3
