---
layout: blog_post
title: "How Compiler approaches static sites"
subtitle: "Learn how the Engineering team combines older and reliable static site frameworks with new build tools and an open source approach to craft memorable and functional content-driven sites."
description: "Learn how the Engineering team combines older and reliable static site frameworks with new build tools and an open source approach to craft memorable and functional content-driven sites."
author: Machiko Yasuda
excerpt: "Learn how the Engineering team combines older and reliable static site frameworks with new build tools and an open source approach to craft memorable and functional content-driven sites."
date: 2024-10-30 00:00:00 +0200
categories:
  - compiler
  - engineering
---

# How Compiler approaches static sites

In my last post, I talked about [how Compiler uses VS Code Dev Containers for our Engineering team](https://compiler.la/blog/2024/devcontainer-platform-agnostic-team), allowing all of us (even product managers!) across various platforms - Mac, Linux and Windows - to work from the same environment. Even if you did not read it, no worries, I’ll summarize it for you: Our team sets up _all_ of our projects in VS Code Dev Containers so that we all access every project in the same way, across platforms. Whether it’s a full-stack web app, a command-line utility or a simple static site, the tools necessary and steps to get started are always the same - allowing us both consistency in process and flexibility in the actual code.

In this post, I want to take it a step further and talk about how we apply these similar philosophies to the way we build static sites.

There are a lot of options these days when it comes to building a website, from the heavy-hitter, now 21-year old WordPress web content management system (CMS), [still used in over 40% of the top websites in the world](https://trends.builtwith.com/cms), to newer JavaScript frameworks like [Gatsby](https://www.gatsbyjs.com/) or [Astro](https://astro.build/). In the hosted CMS world, there are also [no-code](https://webflow.com/made-in-webflow/no-code) tools like [Webflow](https://webflow.com/). And I’m not even talking about all the new ways to write the CSS or the web elements themselves. The options always seem to be increasing (alongside the blog posts and memes about [front-end fatigue](https://www.smashingmagazine.com/2016/11/not-an-imposter-fighting-front-end-fatigue/)), and the urge to rewrite your company blog or team landing page into the newest, shiniest JavaScript front-end framework or new approach ([JAMStack](https://jamstack.org/) or [headless](https://en.wikipedia.org/wiki/Headless_content_management_system)?) lingers.

And yet, what would be an open source, platform-agnostic and flexible, configurable approach to static site development? One that also ensures we can develop accessible sites that are performant, easy to maintain for developers and allows non-developer team members to also be involved in the content and data?

While I’m not going to be comparing and contrasting all of the different static site approaches I mentioned above, I’d like to instead give a tour of Compiler’s static site stack: a lean, open source approach that can be configured and customized to do a lot more than _just_ present static content. And don’t worry, these are probably all tools you’ve heard of before!

## Introducing Compiler’s static site stack: It’s actually just Jekyll.

The stack:

- Jekyll with Markdown content or JSON data
- Netlify for Deploy Previews and hosting
- GitHub for custom Issue templates, GitHub Actions
- Bootstrap with CSS variables
- VS Code Dev Containers [for all the reasons mentioned here](/2024/devcontainer-platform-agnostic-team)

Yes, we are still using the [now 16-year old static site framework](https://jekyllrb.com/docs/history/), [Jekyll](https://jekyllrb.com/), written in Ruby, and the 14-year old CSS and JavaScript library, [Bootstrap](https://getbootstrap.com/docs/5.3/about/overview/). I use the word _still_ because I’ve been using these tools since I first started coding professionally 11 years ago. We deliberately made the decision to stick with Jekyll and Bootstrap because we want these sites to be easy for other teams or developers to work on.

Vast improvements in CSS over the past few years like [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), which are now being implemented in Bootstrap, have allowed us to even stick with CSS over pre-processors like Sass that might encourage you to write _more_ code to maintain.

## Getting the whole team involved with GitHub and Netlify

Writing a static site with Jekyll means that developers ultimately have to initiate and deploy the site, unlike a tool like WordPress or Webflow where the people writing the actual content can be in charge of publishing. With our stack, however, we use GitHub and Netlify to get designers, copy writers and stakeholders involved in more parts of the site creating process:

- Anyone can create a GitHub ticket to request new content to be added or edited.
- GitHub issues can be customized to ensure developers are getting all the data, metadata they need from stakeholders to make the needed updates. Here’s an example of a [issue template for a recent Cal-ITP project](https://github.com/cal-itp/calitp.org/issues/new?template=new_resource.yml).
- [Netlify Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/), which are links to a preview URL that get posted to GitHub pull requests as changes get pushed, allow designers and anyone else to test out the site on their browser. Designers can then request changes to the pull request and be part of the GitHub pull request review process without having to run the app themselves or be able to read the code.
- For text content written in Markdown, non-developers can edit the content from GitHub.com without having to run the whole developer environment locally.

Although not a full-blown content management system solution, which comes with its own benefits and risks, the combination of an open source GitHub repository and Netlify deploy previews puts us in a happy medium where non-developers can get involved as much or as little as they want.

Because Compiler builds out our apps, including static sites, in the open on GitHub, it allows anyone in the teams we are working with to be a part of the publishing process and makes the whole process a bit more transparent.

This site itself is coded and developed in the public on GitHub. Several months ago, [a reader created an issue on this repository to suggest we add an RSS feed](https://github.com/compilerla/compiler.la/issues/175). And I’m happy to announce that we have done just that! Thanks, @rdela for the nudge.

## A quick case study: Map edition.

One of the strengths of this stack is that it allows you to set up a simple site quickly, but you can also configure it to do a lot more if you put more coding time into it. I wanted to end this post with our most complex example on another Cal-ITP site, Mobility Marketplace, and its [map of over 230+ transportation providers in California](https://www.camobilitymarketplace.org/provider-map) that automatically gets updated weekly with the latest data from a Google Cloud data warehouse.

Every Monday, a pull request created by a GitHub workflow appears in my notifications, updating a single CSV file [like this](https://github.com/cal-itp/mobility-marketplace/pull/586). Sometimes the CSV has a few URLs updated, and other times, important IDs are changed. I click on the [Netlify Preview link of the map to confirm the changes](https://deploy-preview-576--cal-itp-mobility-marketplace.netlify.app/provider-map), and click Approve.

A data team within Cal-ITP updates the data in the Google Cloud data warehouse, and thanks to a custom GitHub Action written by a teammate and Netlify Previews, I’m able to review and merge a pull request to ensure that the Provider Map’s data has the most up-to-date information.

As you can see, even with the humble Jekyll stack, with a bit of automation, you can add a lot of dynamic elements to otherwise simple content sites.
