import { readFile } from "fs";

const filePath = process.argv[2];

if (!filePath) {
  console.error("No file path provided.");
  process.exit(1);
}

const normalize = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
};

function checkHeaderMatch(headerText, anchorText) {
  const normalizeHeader = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const normalizedHeader = normalizeHeader(headerText);
  return `x-${normalizedHeader}` === anchorText;
}

readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  const lines = data.split("\n");

  const linkRegex = /\[:([^\]]+)]\(#x-([^)]+)\)/g; // Matches [:text](#x-id)
  const headingRegex = /^#{1,6} :x ([^\n]+)/g; // Matches # :x, ## :x, ..., ###### :x

  let links = new Map();
  let headings = new Map();
  let linkHeadings = new Map();

  lines.forEach((line, index) => {
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      const regex = /\[\s*(.*?)\s*\]\(\s*#(.*?)\s*\)/;
      const linkHeading = match[0].match(regex);

      const linkId = normalize(match[2]);
      const linkTitle = match[1].trim();
      if (match) {
        const check = checkHeaderMatch(linkHeading[1], linkHeading[2]);
        if (!check) {
          linkHeadings.set(linkId, {
            title: match[0],
            line: index + 1,
          });
        }
      }
      if (!links.has(linkId)) {
        links.set(linkId, { title: linkTitle, line: index + 1 });
      }
    }

    while ((match = headingRegex.exec(line)) !== null) {
      const headingText = match[1].trim();
      const headingId = normalize(headingText);
      if (!headings.has(headingId)) {
        headings.set(headingId, { title: headingText, line: index + 1 });
      }
    }
  });

  let missingLinks = [];
  let missingHeadings = [];
  let missingLinkHeadings = [];

  links.forEach((link, key) => {
    if (!headings.has(key)) {
      missingHeadings.push(
        `❌ Missing heading for link '${link.title}' (Line ${link.line})`
      );
    }
  });
  linkHeadings.forEach((link, key) => {
    missingLinkHeadings.push(
      `❌ Mismatch in link and heading '${link.title}' (Line ${link.line})`
    );
  });

  headings.forEach((heading, key) => {
    if (!links.has(key)) {
      missingLinks.push(
        `❌ Missing link for heading '${heading.title}' (Line ${heading.line})`
      );
    }
  });

  if (
    missingLinks.length === 0 &&
    missingHeadings.length === 0 &&
    missingLinkHeadings.length === 0
  ) {
    console.log("✅ All Nutshell links have matching headings!");
  } else {
    console.log("\n=== MISMATCHES ===");
    missingLinkHeadings.forEach((msg) => console.log(msg));

    console.log("\n=== MISSING HEADINGS ===");
    missingHeadings.forEach((msg) => console.log(msg));

    console.log("\n=== MISSING LINKS ===");
    missingLinks.forEach((msg) => console.log(msg));
  }
});

// Add this to ctrl-shift-p open user tasks
// {
//   "version": "2.0.0",
//   "tasks": [
//     {
//       "label": "Check Nutshell Links in active file",
//       "type": "shell",
//       "command": "node",
//       "args": [
//         "${workspaceFolder}/checkNutshellLinks.js",
//         "${file}"
//       ],
//       "options": {
//         "cwd": "${workspaceFolder}"
//       },
//       "problemMatcher": [],
//       "group": {
//         "kind": "build",
//         "isDefault": true
//       }
//     }
//   ]
// }
