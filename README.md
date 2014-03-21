# MediumEditor

This is a clone of [medium.com](https://medium.com) inline editor toolbar.

Since I always had problems with bloated editors and I loved the simplicity of medium.com solution I've tried to implement their WYSIWYG approach with this script.

MediumEditor has been written using vanilla JavaScript, no additional frameworks required.

Tested on Google Chrome, Firefox and IE9+.

[![Build Status](https://travis-ci.org/daviferreira/medium-editor.png?branch=master)](https://travis-ci.org/daviferreira/medium-editor)

# Basic usage

![screenshot](https://raw.github.com/daviferreira/medium-editor/master/demo/img/medium-editor.jpg)

__demo__: [http://daviferreira.github.io/medium-editor/](http://daviferreira.github.io/medium-editor/)

First, you need to attach medium editor's stylesheet to your page:

```html
<link rel="stylesheet" href="css/medium-editor.css"> <!-- Core -->
<link rel="stylesheet" href="css/themes/default.css"> <!-- or any other theme -->
```

The next step is to reference the editor's script and instantiate a new MediumEditor object:

```html
<script src="js/medium-editor.js"></script>
<script>var editor = new MediumEditor('.editable');</script>
```

The above code will transform all the elements with the .editable class into HTML5 editable contents and add the medium editor toolbar to them.

You can also pass a list of HTML elements:

```javascript
var elements = document.querySelectorAll('.editable'),
    editor = new MediumEditor(elements);
```

## Initialization options

* __allowMultiParagraphSelection__: enables the toolbar when selecting multiple paragraphs/block elements. Default: true
* __anchorInputPlaceholder__: text to be shown as placeholder of the anchor input. Default: _Paste or type a link_
* __anchorPreviewHideDelay__: time in milliseconds to show the anchor tag preview after the mouse has left the anchor tag. Default: 500
* __buttons__: the set of buttons to display on the toolbar. Default: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote']
* __buttonLabels__: type of labels on the buttons. Values: 'fontawesome', `{'bold': '<b>b</b>', 'italic': '<i>i</i>'}`. Default: false
* __delay__: time in milliseconds to show the toolbar or anchor tag preview. Default: 0
* __diffLeft__: value in pixels to be added to the X axis positioning of the toolbar. Default: 0
* __diffTop__: value in pixels to be added to the Y axis positioning of the toolbar. Default: -10
* __disableReturn__:  enables/disables the use of the return-key. You can also set specific element behavior by using setting a data-disable-double-return attribute. Default: false
* __disableDoubleReturn__:  allow/disallow two(or more) empty new line(s). You can also set specific element behavior by using setting a data-disable-return attribute. Default: false
* __disableToolbar__: enables/disables the toolbar, adding only the contenteditable behavior. You can also set specific element behavior by using setting a data-disable-toolbar attribute. Default: false
* __firstHeader__: HTML tag to be used as first header. Default: h3
* __forcePlainText__: Forces pasting as plain text. Default: true
* __placeholder__: Defines the default placeholder for empty contenteditables. You can overwrite it by setting a data-placeholder attribute on your elements. Default: 'Type your text'
* __secondHeader__: HTML tag to be used as second header. Default: h4
* __targetBlank__: enables/disables target="\_blank" for anchor tags. Default:
  false

Example:

```javascript
var editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'Type a link',
    buttons: ['bold', 'italic', 'quote'],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: 'h1',
    secondHeader: 'h2',
    delay: 1000,
    targetBlank: true
});
```

## Extra buttons

Medium Editor, by default, will show only the buttons listed above to avoid a huge toolbar. There are a couple of extra buttons you can use:

* __superscript__
* __subscript__
* __strikethrough__
* __unorderedlist__
* __orderedlist__
* __pre__
* __image__ (this simply converts selected text to an image tag)
* __indent__ (moves the selected text up one level)
* __outdent__ (moves the selected text down one level)


## Themes

Check out the Wiki page for a list of available themes: [https://github.com/daviferreira/medium-editor/wiki/Themes](https://github.com/daviferreira/medium-editor/wiki/Themes)

## API

* __.deactivate()__: disables the editor
* __.activate()__: re-activates the editor
* __.serialize()__: returns a JSON object with elements contents


## Capturing DOM changes

For observing any changes on contentEditable

```js
$('.editable').on('input', function() {
  // Do some work
});
```

This is handy when you need to capture modifications other thats outside of `key up`'s scope like clicking on toolbar buttons.

`input` is supported by Chrome, Firefox, IE9 and other modern browsers. If you want to read more or support older browsers, check [Listening to events of a contenteditable HTML element](http://stackoverflow.com/questions/7802784/listening-to-events-of-a-contenteditable-html-element/7804973#7804973) and [Detect changes in the DOM](http://stackoverflow.com/questions/3219758/detect-changes-in-the-dom)

## Image Upload

[Pavel Linkesch](https://github.com/orthes) has developed a jQuery plugin to upload images following Medium.com functionality. Check it out at [http://orthes.github.io/medium-editor-insert-plugin/](http://orthes.github.io/medium-editor-insert-plugin/)


## Angular directive

[Thijs Wijnmaalen](https://github.com/thijsw) hacked together an AngularJS
directive. Check it out at
[https://github.com/thijsw/angular-medium-editor](https://github.com/thijsw/angular-medium-editor)

## Development

MediumEditor development tasks are managed by Grunt. To install all the necessary packages, just invoke:

```bash
npm install
```

These are the available grunt tasks:

* __js__: runs jslint and jasmine tests and creates minified and concatenated versions of the script;
* __css__: runs autoprefixer and csslint
* __test__: runs jasmine tests, jslint and csslint
* __watch__: watch for modifications on script/scss files

The source files are located inside the __src__ directory.

## Contributing

[![Stories in Ready](https://badge.waffle.io/daviferreira/medium-editor.png)](https://waffle.io/daviferreira/medium-editor)

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Test your changes to the best of your ability.
4. Update the documentation to reflect your changes if they add or changes current functionality.
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## Contributors

```
 project  : medium-editor
 repo age : 10 months
 active   : 110 days
 commits  : 429
 files    : 46
 authors  :
   317  Davi Ferreira           73.9%
    20  Maxime de Visscher      4.7%
     8  Derek Odegard           1.9%
     8  Jarl Gunnar T. Flaten   1.9%
     8  Pedro Nasser            1.9%
     8  Seif                    1.9%
     6  Andy Yaco-Mink          1.4%
     4  Sebastian Zuchmanski    0.9%
     4  minikomi                0.9%
     3  Andrew Hubbs            0.7%
     3  Dmitri Cherniak         0.7%
     3  Nikita Korotaev         0.7%
     3  Troels Knak-Nielsen     0.7%
     3  arol                    0.7%
     3  ʞuıɯ-oɔɐʎ ʎpuɐ          0.7%
     2  Ethan Turkeltaub        0.5%
     1  Adam Mulligan           0.2%
     1  Alberto Gasparin        0.2%
     1  Bitdeli Chef            0.2%
     1  David Collien           0.2%
     1  David Hellsing          0.2%
     1  Denis Gorbachev         0.2%
     1  Diana Liao              0.2%
     1  Jeff Welch              0.2%
     1  Mark Kraemer            0.2%
     1  Max                     0.2%
     1  Maxime Dantec           0.2%
     1  Maxime De Visscher      0.2%
     1  Michael Kay             0.2%
     1  Moore Adam              0.2%
     1  Nic Malan               0.2%
     1  Noah Paessel            0.2%
     1  Pavel Linkesch          0.2%
     1  Søren Torp Petersen     0.2%
     1  Tom MacWright           0.2%
     1  happyaccidents          0.2%
     1  mbrookes                0.2%
     1  muescha                 0.2%
     1  shaohua                 0.2%
     1  t_kjaergaard            0.2%
     1  typify                  0.2%
     1  waffleio                0.2%
```

## License

"THE BEER-WARE LICENSE" (Revision 42):

As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.
