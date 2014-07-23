---
layout: post
title: GitHub from your Terminal
---

Git is awesome. It's easy to use and makes your workflow stupid-resistant. Pairing Git with GitHub makes Git even more awesome. I mean who couldn't like a company that has a logo as adorable as this? <img alt = "Github Octocat" src = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png' height = 150 style = "display: block; margin-left: auto;margin-right: auto; margin-top: 20px ">

But tabbing out from Terminal and Sublime to the Github website can get frustrating very quickly. Luckily there's a easy-to-use command line wrapper by GitHub itself so that you can continue your workflow from the terminal!

The wrapper is officially called Hub but we'll be aliasing it to the `git` keyword to make our workflow simpler. Hub is open-sourced on [here](https://github.com/github/hub) and the official documentation can be found [here](https://hub.github.com/)

So let's get started!

## Installing Hub
Hub is super quick to install much like Git itself. Just use [Homebrew](http://brew.sh/)!

```bash
$ brew install hub
```

If you'd rather install from source

```bash
$ git clone https://github.com/github/hub.git
$ cd hub
$ rake install prefix=/usr/local
```

To check if the install went through

```bash
$ hub --version
```
## Aliasing Hub
Great so you've successfully installed Hub! But now you have two different keywords to use in your terminal workflow. Let's fix that by aliasing `git` and `hub`. Hub will just delegate all the native git commands so everything you used to do with git still works!

```bash
$ alias git=hub
# The above line will only alias in your current terminal. For a permanent alias, add it to your .bashrc or .zshrc
```

## Using Hub
Hub comes with a variety of commands for interacting with Github. Let's explore some of them here.
### Browsing Repos
To simply open up a repo's GitHub page with your browser, use the `browse` subcommand

```bash
$ git browse twbs/bootstrap
```

`browse` can also take paramaters like `issues` to navigate you straight to the issues page.

```bash
$ git browse twbs/bootstrap issues
```

You can also use parameters like `pulls`, `graphs` to jump straight to their respective web pages.

### Cloning Repos
Repos are easy to clone with Hub. If you want to clone your own project from your GitHub, use `git clone`

```bash
$ git clone myRepo
#This is shorthand for git clone git://github.com/YOUR_USER/myRepo.git
```

To clone someone else's repo e.g., [Hub from Github](https://github.com/github/hub)

```bash
$ git clone github/hub
#This is shorthand for git clone git://github.com/github/hub.git
```
###Forking Repos
To fork a repo to your own GitHub, simply clone down the repo like we did above `cd` into the cloned directory and run,

```bash
$ git fork
```

###Pull Requests
One of the major features of GitHub, pull requests are extremely simple with Hub too. Just run `git pull-request` and your default text editor will open up with the options needed for the request.

```bash
$ git pull-request [branch]
# This creates a pull request against origin/branch, and origin/master if branch is not specified
```

You can also provide the flags `-o`, `-m`, `-i`, `-b`, and `-h` for `open`, `message`, `issues`, `base` and `head` respectively.

```bash
$ git pull-request -b upstream:branch
# This creates a pull request against the upstream remote and the branch specified
```

To make a pull-request against any repo on GitHub simply format your command as `owner/repo:branch`

---
That's it! So go ahead and give Hub a try with your workflow. If you liked Hub or use something similar feel free to comment in the section below.