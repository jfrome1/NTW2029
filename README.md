## 🚀 Project Structure

Inside of this Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Styles

The styles are in the `src/styles/custom` directory and are overwritten. The Nutshell styles can also be overwritten in this directory.

## Internal Markdown Links for Astro/Starlight:

For this e.g. file structure:
.
├── src/
│ └── content/
│ └── docs/
│ ├── course-info/
│ │ └── titles.md
│ ├── writing/
│ │ └── formatting.md
│ └── gen-ai-policy.md
│ └── index.md
└── public/
├── downloads/
│ └── formattedpaper.docx
└── images/
└── headshot.jpg

## These will work for all pages as absolute links

- page link: Although we present a sample policy [here](/course-ntw2029/course-info/gen-ai-policy)
- heading link: Although we present a sample policy [here](/course-ntw2029/course-info/gen-ai-policy/#nus-general-genai-policy)
- image link (from public folder): ![Another File](/images/add-another-file.png)
- link to file for download (from public folder): [Another File](/downloads/formattedpaper.docx)
- Nutshell link to whole page (only works after build):[:This example](/course-ntw2029/course-info/gen-ai-policy) links to `/course-ntw2029/course-info/gen-ai-policy`
- Nutshell heading link: [:LIKE THIS](/course-ntw2029/course-info/gen-ai-policy/#nus-general-genai-policy)!
- Nutshell image link:(from public folder need to add the image to a heading) [:here](/#see-this-is-hidden-image)
- Nutshell link to file for download (Can't be done I think, you can put the link in the heading like below.)
- Nutshell image link:(from public folder need to add the download link to a heading below) [:here](/#see-this-is-hidden-download)

### :x See This Is Hidden Image

Hello
![Another File](/images/add-another-file.png)

### :x See This Is Hidden download

Hello
[Download File](/downloads/formattedpaper.docx)

## To Test the links;

`npm run build` to build the site into the `dist` folder
`npm run preview` to preview the site locally
Be aware that live changes wont effect the site running on preview until you rebuild again.
