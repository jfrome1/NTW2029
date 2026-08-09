---
title: Import Test
draft: true
---

Test fixture for `build_website.groovy`, the Freeplane website import. Delete before deploy, or keep it and add it to the import's exclude list. Every construct below exists to be checked against its imported nodes. No H1 appears here on purpose: the importer rejects a page carrying one and aborts the whole run.

## H2 with a paragraph under it

Plain prose paragraph under the H2, on one line.

A second paragraph, so that two siblings under one header can be told apart.

### H3 under the H2

Prose under the H3.

#### H4 under the H3

Prose under the H4.

##### H5 that is not a nutshell

Prose under the non-nutshell H5. This heading level is the one the site's own pages never use, so nothing but this fixture tests it.

###### H6 under the H5

Prose under the H6. On the schedule page this level carries the due dates.

## Blocks that must keep their line breaks

| Column A | Column B | Column C |
|---|---|---|
| first | second | third |
| fourth | fifth | sixth |

1. First numbered item.
2. Second numbered item, which must not be joined to the first.
3. Third numbered item.

:::tip
An aside block. Its opening marker, its prose, and its closing marker are three lines that belong together.
:::

```text
A fenced code block.
  Its second line is indented.
```

<!--
An HTML comment spanning more than one line.
Its closing marker is on the third line.
-->

## Bullets, nesting, and markers

- A top-level bullet with a hyphen marker.
- A second top-level bullet.
  - A bullet indented two spaces.
    - A bullet indented four spaces.
- A bullet whose continuation line follows it.
  This continuation line is indented two spaces and is not itself a bullet.
* A top-level bullet written with an asterisk marker, which exercises the parser's `[-*]` alternative. It survives only because this file's name carries the `-nolint` token, which stops the markdownlint hook rewriting `*` to `-`.

A paragraph that introduces a list:

- The list item that follows the introducing paragraph.
- A second item in that same list.

## Lines that begin with a structural character but are not structure

A paragraph before a thematic break.

---

A paragraph after the thematic break. The `---` line above begins with a hyphen and is not a bullet.

**A bold lead-in that opens a paragraph**, whose second line
continues on the next line and belongs to the same paragraph.

-

The bare hyphen above is a line on its own, and it is not a bullet either.

## A nutshell link

Prose that refers to [:a test nutshell](#x-test-nutshell-term) in the middle of a sentence.

##### :x test nutshell term

The first paragraph of the nutshell explanation.

The second paragraph, which must stay separate from the first.

A paragraph whose second line
sits on its own line in the source and must keep that break.

- A bullet inside the nutshell explanation.
  - A bullet indented two spaces inside the nutshell explanation.

**A bold lead-in inside the nutshell**, whose second line
continues on the next line and belongs to the same paragraph.
