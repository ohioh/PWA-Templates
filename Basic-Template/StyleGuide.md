******************************************************

Theme Name:    general Styleguide

Theme URI:     StyleGuide.md

Description:   Description for  Paradigms and Coding

Version:       1.0

Date:          01.11.2020

Author:        Tjark Ziehm

License:       MIT

*******************************************************


Source: copyright google  *[GoogleStyleGuide](https://github.com/google/styleguide)*

# Index:
1. Paradigm
2. Html
3. VersionControll

## TODOs:

[TODO]: Versionscontrolle
[TODO]: MarkDown [More](https://www.markdownguide.org/)
[TODO]: paradigm

# 1.Paradigm
## 1.1 Functional programming (declarative)
→ Main article: Functional Programming
The task and the known premises are formulated here as a functional expression. The independent application of function substitution and evaluation by the interpreter or compiler then solves the task. The program can be understood as a mapping of the input to the output.

[Source](https://de.wikipedia.org/wiki/Programmierparadigma)

[More](https://www.ionos.de/digitalguide/websites/web-entwicklung/funktionale-programmierung/)

## 1.2 Object-oriented programming paradigms (imperative)
→ Main article: Object Orientation
Classes are instantiatable modules and basic elements in object-oriented programming. According to the object-oriented programming paradigm, objects with data and the routines working on them are combined into units. In contrast, the procedural paradigm keeps the data separate from the routines processing the objects. A computer program is realized as a set of interacting objects.

Object-oriented programming can be combined well with event-oriented programming, e.g., in the programming of interactive graphical user interfaces.

[Source](https://de.wikipedia.org/wiki/Programmierparadigma)

[More](https://bmu-verlag.de/objektorientierte-programmierung-oop/)

## Refactoring / Restructoring
- Renaming of variables and methods.
- Encapsulating fields.
- Introduction of a new abstract superclass.
- Removing and rearranging parameters.
- Reformatting of program code.
- Extraction of methods, classes, packages and interfaces.
- Improvement of data encapsulation.

[More](https://www.refactoring.com/)

# 2.HTML:
## 2.1 General Style Rules
### 2.1.1 Protocol

- Recommended
<code>@import 'https://fonts.googleapis.com/css?family=Open+Sans';</code>

- Recommended
<code><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script></code>

# 2.2 General Formatting Rules
### 2.2.1 Indentation
Indent by 2 spaces at a time.

<code>.example {
  color: blue;
}</code>


### 2.2.2 Capitalization

Use only lowercase.All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).

- Recommended
<code><img src="google.png" alt="Google"></code>

### 2.2.3 Trailing Whitespace
Remove trailing white spaces.

Trailing white spaces are unnecessary and can complicate diffs.

### 2.3.1 Encoding
Use UTF-8 (no BOM).

Make sure your editor uses UTF-8 as character encoding, without a byte order mark.

### 2.3.2 Comments

Explain code as needed, where possible.

Use comments to explain code: What does it cover, what purpose does it serve, why is respective solution used or preferred?

### 2.3.3 Action Items

Mark todos and action items with TODO.

Highlight todos by using the keyword TODO only, not other common formats like @@.

Append a contact (username or mailing list) in parentheses as with the format TODO(contact).

Append action items after a colon as in TODO: action item.

{# TODO(john.doe): revisit centering #}
<center>Test</center>
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>

# 3 HTML

## 3.1 HTML Style Rules
### 3.1.1 Document Type

Use the Document type of the code.
Make sure only  using the right version of the code.
If needed code is newer then the code has to get a new main  Version. Comment the obsolete Version as  deprecated.

### 3.1.2 Validity

Use valid Code where possible.

### 3.1.3 Semantics

Use Code according to its purpose.
Use elements (sometimes incorrectly called “tags”) for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.


###  3.1.4 Multimedia Fallback

Provide alternative contents for multimedia.
For multimedia, such as images, videos, animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without @alt, and other users may have no way of understanding what video or audio contents are about either.

(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".)


### 3.1.5 Separation of Concerns

#### Devide and Concer:
1. Divide: Break the given problem into subproblems of same type.
2. Conquer: Recursively solve these subproblems
3. Combine: Appropriately combine the answers

#### Refactoring: [TODO]

Mikro-Refactorings:
- Program dependence graph
- Software intelligence
- Encapsulate Field
- Type generalization
- Polymorphismus
- extract & seperate classes
- extract & seperate methods

###  3.1.6 Entity References

Do not use entity references.
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.
<!-- Recommended -->
The currency symbol for the Euro is “€”.

### Attributes

Omit type attributes for style sheets and scripts.(  if language allowed)

## 3.2 Formatting Rules
### 3.2.1 General Formatting
Use a new line for every block, list, or table element, and indent every such child element.

Independent of the styling of an element (as CSS allows elements to assume a different role per display property), put every block, list, or table element on a new line.

Also, indent them if they are child elements of a block, list, or table element.

(If you run into issues around whitespace between list items it’s acceptable to put all li elements in one line. A linter is encouraged to throw a warning instead of an error.)

### 3.2.2 Line-Wrapping

While there is no column limit recommendation for HTML, you may consider wrapping long lines if it significantly improves readability.

When line-wrapping, each continuation line should be indented at least 4 additional spaces from the original line.

### 3.2.3 HTML Quotation Marks

When quoting attributes values, use double quotation marks.

Use double ("") rather than single quotation marks ('') around attribute values.

## 4 CSS
## 4.1 CSS Style Rules
### 4.1.1 CSS Validity

Use valid CSS where possible.

Unless dealing with CSS validator bugs or requiring proprietary syntax, use valid CSS code.

Use tools such as the W3C CSS validator to test.

Using valid CSS is a measurable baseline quality attribute that allows to spot CSS code that may not have any effect and can be removed, and that ensures proper CSS usage.

### 4.1.2 ID and Class Naming

Use meaningful or generic ID and class names.

Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.

### 4.1.3 ID and Class Name Style

Use ID and class names that are as short as possible but as long as necessary.

Try to convey what an ID or class is about while being as brief as possible.

Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.

/* Not recommended */
#navigation {}
.atr {}
/* Recommended */
#nav {}
.author {}

### 4.1.4 Type Selectors

Avoid qualifying ID and class names with type selectors.

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

Avoiding unnecessary ancestor selectors is useful for performance reasons.

/* Not recommended */
ul#example {}
div.error {}
/* Recommended */
#example {}
.error {}

### 4.1.5 Shorthand Properties

Use shorthand properties where possible.

CSS offers a variety of shorthand properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.

/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;

### 4.1.6 0 and Units
Omit unit specification after “0” values, unless required.

Do not use units after 0 values unless they are required.

flex: 0px; /* This flex-basis component requires a unit. */
flex: 1 1 0px; /* Not ambiguous without the unit, but needed in IE11. */
margin: 0;
padding: 0;

### 4.1.7 Leading 0s
Omit leading “0”s in values.

Do not put 0s in front of values or lengths between -1 and 1.

font-size: .8em;

### 4.1.8 Hexadecimal Notation
Use 3 character hexadecimal notation where possible.

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.

/* Not recommended */
color: #eebbcc;
/* Recommended */
color: #ebc;

### 4.1.9 Prefixes
Prefix selectors with an application-specific prefix (optional).

In large projects as well as for code that gets embedded in other projects or on external sites use prefixes (as namespaces) for ID and class names. Use short, unique identifiers followed by a dash.

Using namespaces helps preventing naming conflicts and can make maintenance easier, for example in search and replace operations.

.adw-help {} /* AdWords */
#maia-note {} /* Maia */

### Separate words in ID and class names by a hyphen.

Do not concatenate words and abbreviations in selectors by any characters (including none at all) other than hyphens, in order to improve understanding and scannability.

/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}
/* Recommended */
#video-id {}
.ads-sample {}

## 4.2 CSS Formatting Rules
###  4.2.1 Declaration Order
Alphabetize declarations.

Put declarations in alphabetical order in order to achieve consistent code in a way that is easy to remember and maintain.

Ignore vendor-specific prefixes for sorting purposes. However, multiple vendor-specific prefixes for a certain CSS property should be kept sorted (e.g. -moz prefix comes before -webkit).

background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;


### 4.2.2 Block Content Indentation
Indent all block content.

Indent all block content, that is rules within rules as well as declarations, so to reflect hierarchy and improve understanding.

@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}

### 4.2.3 Declaration Stops
Use a semicolon after every declaration.

End every declaration with a semicolon for consistency and extensibility reasons.

### 4.2.4 Property Name Stops
Use a space after a property name’s colon.

Always use a single space between property and value (but no space between property and colon) for consistency reasons.

/* Not recommended */
h3 {
  font-weight:bold;
}
/* Recommended */
h3 {
  font-weight: bold;
}

### 4.2.5 Declaration Block Separation

Use a space between the last selector and the declaration block.

Always use a single space between the last selector and the opening brace that begins the declaration block.

The opening brace should be on the same line as the last selector in a given rule.

/* Not recommended: missing space */
#video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video
{
  margin-top: 1em;
}
/* Recommended */
#video {
  margin-top: 1em;
}

### 4.2.6 Selector and Declaration Separation

Separate selectors and declarations by new lines.

Always start a new line for each selector and declaration.

/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}

### 4.2.7 Rule Separation
Separate rules by new lines.

Always put a blank line (two line breaks) between rules.

html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}

### 4.2.8 CSS Quotation Marks
Use single ('') rather than double ("") quotation marks for attribute selectors and property values.

Do not use quotation marks in URI values (url()).

Exception: If you do need to use the @charset rule, use double quotation marks—single quotation marks are not permitted.

/* Not recommended */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
/* Recommended */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}

## 4.3 CSS Meta Rules
### 4.3.1 Section Comments
Group sections by a section comment (optional).

If possible, group style sheet sections together by using comments. Separate sections with new lines.

/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
