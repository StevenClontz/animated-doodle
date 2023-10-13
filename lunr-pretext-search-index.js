var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  An dsaf quation:  A big equation:   Heya  PreTeXt is cool   Here is the number :  a crudely hand-drawn digit 1      a crudely hand-drawn digit 2   A nicely drawn digit     a crudely hand-drawn digit 3   A nicely drawn digit      two circles, a red circle of half-radius centered inside a blue circle   An example of Tikz   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-section-name.html#remark-1",
  "type": "Remark",
  "number": "1.1.1",
  "title": "Heya.",
  "body": " Heya  PreTeXt is cool  "
},
{
  "id": "my-number-two",
  "level": "2",
  "url": "sec-section-name.html#my-number-two",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "  a crudely hand-drawn digit 2   A nicely drawn digit  "
},
{
  "id": "my-number-three",
  "level": "2",
  "url": "sec-section-name.html#my-number-three",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": "  a crudely hand-drawn digit 3   A nicely drawn digit  "
},
{
  "id": "my-tikz-figure",
  "level": "2",
  "url": "sec-section-name.html#my-tikz-figure",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "   two circles, a red circle of half-radius centered inside a blue circle   An example of Tikz  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt , baby.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
