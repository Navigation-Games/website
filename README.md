# Navigation Games website (info.navigationgames.org)

Pages that have moved off the Wix site at navigationgames.org. The Wix site keeps the home page, events, blog, shop and donations. Each site's menu links to the other.

## This repo is public

Anyone can read every file **and every past version**. Deleting something later does not remove it from history.
Only commit what you would put on the public website. Never commit personal phone numbers or home addresses, donor, student or parent information, or passwords and keys.

## Editing

| To change | Edit |
| --- | --- |
| Meet the Team | `content/team.md` (photos go in `static/img/team/`) |
| The menu and footer | `docusaurus.config.ts`. Also change the Wix menu to match. |
| Colors, fonts, layout | `src/css/custom.css` (the only stylesheet) |

Commit to `main` and GitHub Actions publishes the site in a few minutes.

### Meet the Team format

```
## Category name

- Layout: compact

Optional intro text for the category.

### Person Name

- Role: Program Staff
- Photo: person-name.jpg
- Email: person@navigationgames.org

Bio paragraphs.
```

Each `##` heading is a category; add, rename or reorder them freely. `Layout: compact` gives a category smaller cards (used for long lists like former contributors). Role, Photo and Email are optional. Square photos about 400 pixels wide work best.

## Running locally

```
npm install
npm start
```

`npm start` and `npm run build` first run `scripts/build-team.js`, which turns `content/team.md` into `src/pages/meet-the-team.mdx` (generated, not committed).
