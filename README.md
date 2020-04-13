- [Introduction](#introduction)
- [Setting up a development environment](#setting-up-a-development-environment)
  - [VSCode](#vscode)
    - [Installing VSCode](#installing-vscode)
    - [Live Server & Sass Compiler](#live-server--sass-compiler)
    - [Prettier](#prettier)
  - [Git](#git)
  - [Node & Yarn](#node--yarn)
  - [Gatsby](#gatsby)
- [Updating the site](#updating-the-site)
  - [Modifying Pages](#modifying-pages)
  - [Adding Blog Posts](#adding-blog-posts)
    - [1. Include some "frontmatter"](#1-include-some-%22frontmatter%22)
    - [2. Put your post in the right place](#2-put-your-post-in-the-right-place)

# Introduction
This README should cover everything you need to know to set up your development environment and begin creating new features for the CyberSoc website!

# Setting up a development environment
## VSCode
I'd recommend downloading VSCode for developing this project, as it has a couple of helpful extensions we'll mention slightly further in.

### Installing VSCode
The easiest way to get started with VSCode is to head over to [code.visualstudio.com](https://code.visualstudio.com/) and download the latest *Stable Build* from the website.

You can also install VSCode through most package managers, so do that if you'd prefer.

### Live Server & Sass Compiler
We style our website with Sass, compiling to standard CSS with every new build. Sass supports a lot of useful features (like nested selectors) which aren't possible in vanilla CSS. This speed up development a lot and makes it a bit more bearable, too. If you're interested in exactly what the differences are, I'd recommend having a gander at [the documentation.](https://sass-lang.com/documentation)

Live Server and Sass Compiler are the only two essential extensions to install. You can do through the links below:
- [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [**Live Sass Compiler**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

Before you start modifying any `.scss` files in the code, make sure to start the extension by typing `Ctrl-Shift-P` then `Watch sass`. The extension will then monitor any changes you make to the styling and update the respective `.css` and `.css.map` files.

### Prettier
Formatted code is good code. We use Prettier to format all of the languages used in this project, and would recommend you install the extension to help keep your code looking clean.

- [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

The `.prettierrc` config file can be found at the root of this project, and will be used by Prettier when formatting any and all of the in here. If you want to change any of the formatting options to something you prefer, it could be worth adding `.prettierrc` to the `.gitignore` file to ensure other people's development environments aren't affected by the formatting changes.

## Git
Now that you have VSCode set up and ready to go, let's download the repo!

The first step is to make sure you have Git installed. You can download it from [git-scm.com](https://git-scm.com/). Go ahead and install that, then continue.

In a terminal of your choice, navigate to the directory you'd like to place the project in, and type:

```bash 
git clone https://github.com/CyberSocYork/cybersocyork.github.io.git
```

This will place a folder called `cybersocyork.github.io` inside the directory you're currently in.

You can then navigate inside your newly created directory using:

```bash
cd cybersocyork.github.io
```

The final step is to make sure to develop on the correct *branch*. To list the branches currently available, type:

```bash
git branch
```

You should see a single branch listed, called `gatsby`. If so, that's good! This is the development branch for the project and code should only ever be pushed to or pulled from there.

## Node & Yarn
**Node**  
The CyberSoc website requires Node to run and be developed properly, so head over to [nodejs.org/en](https://nodejs.org/en/) and download the latest LTS (Long Term Support) version for your platform.

You can check that everything has been installed correctly by typing:

```bash
node -v
```

This will list the current version of Node running on your computer. At the time of writing that version was `v12.16.1`, so anything the same or higher is a good thing.

**Yarn**  
Next, we want to install Yarn. By default Node comes with a package manager called NPM (Node Package Manager) but due to personal preference when starting the project I'd strongly recommend continuing with Yarn (this is due to how the package managers keep track of and "lock" the dependencies; using multiple at once could cause problems).

To install Yarn, head to [classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install) and follow the instruction.

Yarn is used to install any and all third-party packages used for this project (and, it being a Node project, there are *quite* a few). The list of dependencies for the website can be found in the `package.json` file in the root of the project directory.

To automatically install all the required dependencies, get that terminal open and head back to the `cybersocyork.github.io` directory. Once inside, run:

```bash
yarn install
```

This might take an amount of time to complete, so go and make a cup of coffee while you wait :)

## Gatsby
One of the dependencies that was installed when you ran `yarn install` is a package called `gatsby-cli`. This allows you to control the GatsbyJS framework underpinning the entire project. 

GatsbyJS is a framework based on React. It should be fairly easy to make modifications to the existing pages now that all the set-up is done, as most of it is just modifying the HTML you want. However, if you'd like any help working out what a particular section of code does, don't hesitate to ask (or post an issue in this repo).

To start a local development server for the website, type:

```bash
gatsby develop
```

This will run a local server on your computer for you to test any changes made to the code. Whenever you make a change and save it, the server will refresh the web page to reflect it.

This local server is hosted at [http://localhost:8000](http://localhost:8000), so just visit that address in your web browser to view the site!

# Updating the site
## Modifying Pages
All the hard-coded pages for this site can be found inside `src/pages` (e.g. `src/pages/index.js`). The pages for the site are written in JSX, which is basically just a combination of JS and HTML. Modify it like you would a normal website, and the changes you make will be shown on the live server.

## Adding Blog Posts
One of the coolest parts of this site is its `/blog` page. Through the wonders of GraphQL and GatsbyJS, you can write articles for this website in Markdown and have them be automatically converted to and rendered as HTML pages!

To get an post of yours onto the site, there are a couple of things you need to do.

### 1. Include some "frontmatter"
Metadata for each blog post is stored inside its respective Markdown post as "frontmatter". An example of some frontmatter can be seen below:

```
---
path: "/blog/my-post-path"
date: "2020-04-13"
author: "Ben Silverman"
title: "Why JS frameworks are the future of all programming everywhere."
---
```

Chuck that frontmatter just before the start of your post, and it'll help it be picked up and rendered correctly.

### 2. Put your post in the right place
It's important that your post is located in the correct directory, otherwise it won't be detected by GraphQL and displayed as a blog post.  
Once your post is ready to be added, upload it to `src/markdown-posts`. The easiest way to do this is to head to [this page](https://github.com/CyberSocYork/cybersocyork.github.io/tree/gatsby/src/markdown-posts) and click the *Upload files* button. Please make sure to name your commit clearly so we know what you're submitting.

Alternatively, you can send your post to a member of the committee and they'll sort out it getting added to the repo.

***

That's basically everything! Hopefully this README was comprehensive enough, but feel free to ask any questions if you'd like some more clarification.

Happy developing!