---
layout: blog_post
title: "How to write a Compiler blog post"
subtitle: "Follow these instructions to learn how to write a blog post, include images, blockquotes and more."
description: "Follow these instructions to learn how to write a blog post, include images, blockquotes and more."
author: Laney Mangan
excerpt: "Learn how to write a blog post, include images, blockquotes and more."
date:   2023-09-24 19:03:13 +0200
categories: compiler
---

## First thing’s first
##### Let’s imagine you have a subheader paired with this section

Before you start drafting your post, make sure you get your post filename and [front matter](https://jekyllrb.com/docs/front-matter/) together.

### How to save and name a post

Click [on this GitHub New File link](https://github.com/compilerla/compiler.la/new/main/_posts) to create an empty file in the `_posts` folder and name it according to this naming convention: `YEAR-MONTH-DATE-name-of-post.md`. Year should be 4 digits, while month and date should be 2 digits, respectfully. This post’s name is `2023-09-01-first-post.md`

### How to write front matter

Now you’re ready to tackle the front matter. As the Jekyll doc states, "the front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines."

It begins and ends with `---`, and has the keys (like `layout`) separated from each key’s values (like `blog_post`) with a colon (`:`). Here is an example from this post:

```
---
layout: blog_post
title: "Do’s and don’ts of open source software"
subtitle: "This is an optional subtitle specific to this page lorem ipsum dolor"
permalink: "blog/2023/dos-and-donts-of-open-source-software"
author: Laney Mangan
excerpt: "This is a little teaser of what’s to come. There are a lot of cool things to learn and discover in this blog post! Let’s talk about just a few. Let’s lorem ipsum dolor a bit further, shall we?"
date:   2023-09-01 19:03:13 +0200
categories: compiler
---
```

You can copy and paste the code snippet above to the top of your post. You will have to change some of the values, and this table will show you what key/value pairs to change, and what to keep the same:

| Key     | Value                                                                                                                                                                                        | notes                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `layout`     | `blog_post`                                                                                                                                                                                      | required - do not change                                                            |
| `title`      | Appears on post page. Come up with your own.                                                                                                                                                          | required                                                             |
| `subtitle`   | Appears on post page. Come up with your own.                                                                                                                          | optional                                                             |
| `permalink`  | `blog/2023/come-up-with-your-own`                                                                                                                                                  | required - `blog/YEAR/come-up-with-your-own`                                                  |
| `author`     | Your Name                                                                                                                                                                                     | can include multiple people, like "Laney Mangan and Olivia Ramacier" |
| `excerpt`    | Appears on main blog page. Come up with your own. | required                                                             |
| `date`      | 2023-09-01 19:03:13 +0200                                                                                                                                                                        | if it’s in the future, it won’t be published                         |
| `categories` | compiler                                                                                                                                                                                         | required                                                             |


<p class="pt-3">It can be difficult to write a succinct title and/or subtitle. Feel free to ask an editor for help.

Once you’ve written the front matter, you’re ready to dive into the main part - writing.</p>

## Writing and formatting the post itself

If this is your first time writing for the web, you will need to take a few minutes to familiarize yourself [Markdown syntax](https://www.markdownguide.org/basic-syntax/). Don’t worry - you do not need to memorize it or understand all of it. You only need what you will be using.

What writing in Markdown entails is writing a bit of code. Instead of using a graphical content editor like you are used to in Google Docs or your e-mail composer, you will have to write a bit of code to make a word **bold** (like this: `**bold**`) or *italics* (like this: `_italics_`). Developers tend to like writing in Markdown, because it allows people to write and format without having to use a mouse and click on icons. The resulting files tend to be easier to store and display on the web as well.

Here is a short but comprehensive list of the Markdown you may need for your post, aside from bolding and italicizing:
- **Section titles** - Using [the `##` syntax](https://www.markdownguide.org/basic-syntax/#headings). (It’s a good practice to always have at least 2.)
- **Section sub-titles** - Using [the `###` syntax](https://www.markdownguide.org/basic-syntax/#headings). (It’s a good practice to always have at least 2. You cannot have a sub-title without a section title.)
- **One blockquote** - Using [`>` syntax](https://www.markdownguide.org/basic-syntax/#blockquotes-1).
- **Numbered lists** - Using [`1.` syntax](https://www.markdownguide.org/basic-syntax/#ordered-lists).
- **Unordered lists** - Using [`-` syntax](https://www.markdownguide.org/basic-syntax/#unordered-lists).
- **Tables** - Using [table Markdown syntax](https://www.markdownguide.org/hacks/#table-formatting).
- **Links** - Using `[link text](https://link.com)` link syntax.
- **Graphic(s), illustration(s), chart(s), photograph(s) with captions** - Keep reading to learn how to do this.

Use this [cheatsheet Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) to find anything else you may need.

Generally, the more you can break up paragraphs with non-paragraph elements, the better.

When writing your post, make sure to include a full space between paragraphs. Sentences should have 1 space after the period, not 2. Remember, short paragraphs are easier for people to read.

## Adding visuals

When appropriate, adding photographs, charts, illustrations with captions is a good idea. You **must** also include a sentence or two of `alt` text, which is what a screenreader reads out loud for those who are visually-impaired, to fully understand what the visual is trying to convey. Here are some [tips on how to write effective `alt` text](https://udayton.edu/blogs/onlinelearning/2021/07_07_2021_alttext.php).

<figure>
    <img src="/assets/blog/compiler-team-photo-for-blog.jpg" alt="This is a caption underneath an image." />
    <figcaption>This is a caption underneath an image. Photograph by BYLINE</figcaption>
</figure>

### How to include a full-width visual

Trying to include a photograph, illustration or chart to your post? Great. Follow these steps:

1. Make sure to save the file at 500kB or less. Use [https://imagecompressor.com/](https://imagecompressor.com/) to compress a large image into a smaller one.
1. Make sure you get the name of the illustrator, photographer or chart-maker.
1. Write a caption. This caption should enable someone who is visually-impaired to understand the main gist of your visual.
1. Save the image in the `/assets/blog/` folder. Remember the filename.
1. Add the following code to your post, where you want the visual to appear. Fill in the filename, caption and byline with your own information:

```
<figure>
    <img
        src="/assets/blog/YOUR-FILENAME-HERE.jpg"
        alt="Your caption goes here." />
    <figcaption>Your caption goes here. Photograph by FIRST LAST.</figcaption>
</figure>
```

If you need help with any of these steps, ask for help from a developer in the #websites channel.

### How to include a half-width visual

<figure class="m-0 w-100 w-md-50 float-md-start pe-md-4">
    <img src="/assets/blog/compiler-team-photo-for-blog.jpg" alt="This is a caption underneath an image." />
    <figcaption>This is a caption underneath an image. Photograph by BYLINE</figcaption>
</figure>

If you’d like your visual to take half the width of the post, instead of the full-width, follow these steps:

1. Follow steps 1-4 from the section above. **Note**: The caption also has to be 1/2 as long.
1. Add the following code to your post, where you want the visual to appear. Fill in the filename, caption and byline with your own information:

```
<figure class="m-0 w-100 w-md-50 float-md-start pe-md-4">
    <img
        class="w-50 h-50"
        src="/assets/blog/YOUR-FILENAME-HERE.jpg"
        alt="Shorter caption." />
    <figcaption>Shorter caption. Photograph by FIRST LAST.</figcaption>
</figure>
```

The visual will now appear in half the width.

## Give your most important point some visual flair

Now that you’re at the end of this writing adventure, think back and ask yourself: If readers only remember one sentence, or one idea, what would you want that to be? What was the greatest revalation, the biggest thing that surprised you, in your writing process? Or perhaps it’s the single-most shocking statistic. Find a sentence that reflects that idea. Give that sentence it’s own paragraph. Add a `>` in front of that sentence.

> Always end your post with an empty line.

While there’s no character limit, design recommends 150 characters. The shorter the better! Editorial-wise, the sentence is best placed around the middle portion of your post - you don’t want to leave the reader waiting _too_ long for your greatest epiphany.
