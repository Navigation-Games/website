// Builds src/pages/meet-the-team.mdx from content/team.md.
//
// content/team.md format:
//   # Page title
//   Intro paragraphs
//   ## Category name          (any number of categories)
//   - Layout: compact         (optional: smaller cards, for long lists)
//   Category intro text       (optional)
//   ### Person name
//   - Role: ...               (optional)
//   - Photo: file.jpg         (optional, file in static/img/team/)
//   - Email: ...              (optional)
//   Bio paragraphs (Markdown)
//
// Runs automatically before `npm start` and `npm run build`.

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'content/team.md'), 'utf8').replace(/^﻿/, '');

let title = 'Meet the Team';
const intro = [];
const categories = [];
let category = null;
let person = null;

for (const line of src.split(/\r?\n/)) {
  let m;
  if ((m = line.match(/^# (.+)/))) {
    title = m[1].trim();
  } else if ((m = line.match(/^## (.+)/))) {
    category = { name: m[1].trim(), intro: [], people: [] };
    categories.push(category);
    person = null;
  } else if ((m = line.match(/^### (.+)/))) {
    if (!category) throw new Error(`"${m[1]}" is not under a ## category heading`);
    person = { name: m[1].trim(), bio: [] };
    category.people.push(person);
  } else if (person && (m = line.match(/^- (Role|Photo|Email):\s*(.*)/i))) {
    person[m[1].toLowerCase()] = m[2].trim();
  } else if (person) {
    person.bio.push(line);
  } else if (category && (m = line.match(/^- Layout:\s*compact/i))) {
    category.compact = true;
  } else if (category) {
    category.intro.push(line);
  } else {
    intro.push(line);
  }
}

// MDX treats { } < > as code, so escape them in free text.
const esc = (s) => s.replace(/[{}<>]/g, (c) => '\\' + c);

let out = `---\ntitle: ${title}\n---\n\n# ${title}\n\n${esc(intro.join('\n').trim())}\n\n`;
for (const c of categories) {
  out += `## ${c.name}\n\n`;
  const catIntro = esc(c.intro.join('\n').trim());
  if (catIntro) out += c.compact ? `<div className="team-intro compact">\n\n${catIntro}\n\n</div>\n\n` : `${catIntro}\n\n`;
  if (!c.people.length) continue;
  out += `<div className="${c.compact ? 'team compact' : 'team'}">\n\n`;
  for (const p of c.people) {
    out += `<div className="person">\n\n`;
    if (p.photo) out += `![${p.name}](/img/team/${p.photo})\n\n`;
    out += `### ${p.name}\n\n`;
    if (p.role) out += `<p className="role">${esc(p.role)}</p>\n\n`;
    if (p.email) out += `<p className="email">[${p.email}](mailto:${p.email})</p>\n\n`;
    const bio = esc(p.bio.join('\n').trim());
    if (bio) out += `${bio}\n\n`;
    out += `</div>\n\n`;
  }
  out += `</div>\n\n`;
}

fs.writeFileSync(path.join(root, 'src/pages/meet-the-team.mdx'), out);
console.log(`Built meet-the-team.mdx: ${categories.map((c) => `${c.name} (${c.people.length})`).join(', ')}`);
