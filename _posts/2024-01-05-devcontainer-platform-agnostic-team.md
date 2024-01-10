---
layout: blog_post
title: "How to support a platform-agnostic engineering team with VS Code Dev Containers"
subtitle: "Learn from the Compiler Engineering team, which has been using VS Code Dev Containers daily across Windows, Linux and Mac on all of their projects."
description: "Learn from the Compiler Engineering team, which has been using VS Code Dev Containers daily across Windows, Linux and Mac on all of their projects."
author: Machiko Yasuda
excerpt: "Learn from the Compiler Engineering team, which has been using VS Code Dev Containers daily across Windows, Linux and Mac on all of their projects."
date:   2024-01-05 19:03:13 +0200
categories: compiler, engineering
---

The Compiler Engineering team - although quite small in teammates - has engineers working on the three main operating systems in use today: Windows, Linux and Mac. That's a very different team set-up than I've personally ever worked on over the last decade in the private sector tech world - which, for me, exclusively used Apple machines. 

How do we make that work? The secret (or rather, the very open source method) lies in our team’s use of [Docker](https://www.docker.com/) and [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers). At first, I was nervous about joining a team where I’d be the only engineer on an Apple machine, but over the past two years here at Compiler, thanks to Dev Containers, I’ve been able to code, debug and run tests more efficiently alongside my Windows and Linux colleagues – and I’ve started to see the benefits of a more platform-diverse engineering team across the stack.

By using Dev Containers, we’re able to all be in the same and replicable developer and debugging environment – down to the code editor and all of its myriad of extensions. The benefits go beyond just developer environment, though: we’re able to better test front-end web app user experiences to find platform-specific bugs, better serve our client tech teams - who often use Windows, and also recruit engineers from a greater range of professional backgrounds. In this post, I aim to share how the Compiler Engineering team uses Docker with VS Code Dev Containers to maintain our development environment, along with its benefits and some of the challenges.

## The technical nuts and bolts: How to get it all set up

<figure>
    <img src="/assets/blog/2024/2024-1-vscode-devcontainer-post-screenshot-1.jpg" alt="A meta look at my code editor with Devcontainers running this website locally: VS Code on the left and the browser on the right. Within the VS Code app, the file editor is on top, while the bottom is a multi-tab pane with a Terminal - for reading logs, running command line tools like Git - along with a pane showing currently running ports, the debug console and test runner." />
    <figcaption>A meta look at my code editor with Devcontainers running this website locally: VS Code on the left and the browser on the right. Within the VS Code app, the file editor is on top, while the bottom is a multi-tab pane with a Terminal - for reading logs, running command line tools like Git - along with a pane showing currently running ports, the debug console and test runner.</figcaption>
</figure>

On the previous engineering teams I was a part of, my first few days of work consisted of installing a lot of coding libraries, languages and tools to manage all of that onto my personal machine. For Node, Ruby or Python engineers on Mac, like I was, that might mean installing a slew of dependencies from Homebrew, Node, npm, Ruby Version Manager, Bundler, Postgres, Git and getting all the versions of each, to then be able to get the app’s various dependencies up and running for development. Then, you’d install your favorite coding editor and maybe even a custom Terminal emulator app.

On my first day at Compiler, though, I only had to install three applications: Git, the [Visual Studio Code editor](https://code.visualstudio.com/), Microsoft’s free and open source code editor, with its [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), and Docker. The Dev Container extension essentially allows developers to install the app they are working on, and all of its dependencies into a container, rather than the local machine. All of the code editor’s extensions and customizations are also run from inside the container. The engineering team uses the same container, so we end up with having the same development environment.

What does that look like as a daily work routine? I’ll be using one of the team’s main client apps, the [Cal-ITP](https://www.calitp.org/) [Benefits](https://benefits.calitp.org/) application’s set of containers - which includes a [Django](https://www.djangoproject.com/) application that connects to a separate [Flask](https://flask.palletsprojects.com/en/3.0.x/) app server and a [MKDocs](https://www.mkdocs.org/) documentation app - as an example for this post. If you’d like to follow along and try running this all locally, kudos to you - here’s the [Benefits GitHub repository](https://github.com/cal-itp/benefits) and [documentation](https://docs.calitp.org/benefits/development/).

To get the app running on my first day of work, I:

1. Cloned the GitHub repository
1. Created an environment file
1. Ran a script that builds the Docker images
1. Opened the repository with VS Code, and launched `Dev Containers: Reopen in Container` from the command palette.
1. Opened the application in the browser with the address listed on the `PORTS` tab.

And that’s it!

After the environment is set up for the first time, you can skip the first three steps. In the example of the Benefits application, going through these steps launches the Benefits Django app and the Eligibility Server Flask app. Running another command will start up the Documentation site, too.

In the past, I’d [worked in Dockerized developer environments](https://web.archive.org/web/20200423065935/https://blog.reactioncommerce.com/dev-tips-debugging-reaction-docker-container/) that made it very difficult to debug the app easily. But with this setup, interactive line-by-line debugging in a REPL environment coems first-class with the code editor. By clcking on the Run and Debug panel icon on the left-hand side, selecting `Django: Benefits Client`, selecting some breakpoints in the code editor and clicking Play, the editor will switch to a Debug mode and allow you to step through each of line of code, and use the command line to inspect or manipulate any variables.

Running all of the Pytests is also just a two-click endeavor: Click the `Testing` icon on the right-hand side, and the Play button to run all the specs.

Although I was nervous about joining a team without other Mac engineers and using Visual Studio Code for the first time, being in this containerized developer environment and having both debugging and testing built in to the editor has been a time-saving and stress-relieving work environment. The Engineering team uses this Dev Container set up for all of our projects, including internal Compiler projects like this website itself as well, which, by the way, is [open source on GitHub](https://github.com/compilerla/compiler.la/).

For a more basic step-by-step tutorial, refer to the official [VS Code Dev Containers tutorial](https://code.visualstudio.com/docs/devcontainers/tutorial) and the official [development container spec](https://containers.dev/overview). For more technical detail on Compiler’s specific implementation of Dev Containers for the Benefits application, refer to the application documentation on [Docker dynamic ports](https://docs.calitp.org/benefits/development/docker-dynamic-ports/) and [working with Dev Containers](https://docs.calitp.org/benefits/development/).


## Benefits of a platform-agnostic team

The benefits of having all engineers running and writing code from the same containerized environment and using the same code editor are quite clear: Less configuration headache when one engineer’s local environment has a seemingly un-replicable bug. But as I learned as I kept working on the Compiler team, I could see even more benefits of having this kind of environment supporting a team that has engineers using all major operating platforms.

From the perspective of a team and company, especially one that works on open source government software, being able to support engineers who use Windows, Linux and Mac allows the company to recruit people from a wider variety of industries and experiences. I didn’t have to, for example, retrain and learn the Windows environment to work on government apps, which often are built by Windows-only teams.

As an engineer who focuses primarily on the front-end user experience, I feel that our team is stronger because we are testing the app daily on Windows, Linux and Mac, across various browsers. I no longer have to click through an emulator took like BrowserStack to check how the app looks and feels on Windows. Windows users aren’t second-class, and vice versa. A common criticism of all-Apple engineering and design teams is that they are not working on the hardware that most Americans can afford and use, and that’s not a problem here at Compiler.

Often times, our team supports front-line government IT teams over Zoom, and having a team that understands all the major computing platforms is also essential for us to help debug issues on clients’ machines.

## Technical challenges and looking forward

So what are the technical challenges? I’ll be the first to admit that setting up and configuring a Dockerized container may be very challenging for a junior engineer - depending on how complex the application is, that might require a more senior engineer for the initial set up.

If you’re the kind of developer who has a very specific code editor - Neovim, Emacs or what have you - and a very custom suite of extensions and plugins, this way of working may not be for you. Having the command line and code editor integrated together might also not be everyone’s cup of tea.

One of the greatest challenges our team has faced is running Cypress tests. The Benefits application has a suite of end-to-end Cypress tests that run a browser and click through the app – but we have yet to figure out how to get that all running in the container. We have to run Cypress outside of the container, which means downloading Node, npm, Cypress and its dependencies on our local machines. We’re continuing to investigate how to best achieve a fully-containerized end-to-end front-end browser testing suite. Perhaps a post in this coming year elucidating this configuration challenge is in the future.
