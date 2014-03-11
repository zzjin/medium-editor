var mediumEditor = window.mediumEditor || {};

(function (window, document) {
    'use strict';

    mediumEditor.selection = {
        // http://stackoverflow.com/questions/5605401/insert-link-in-contenteditable-element
        // by Tim Down
        save: function save() {
            var i,
                len,
                ranges,
                sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                ranges = [];
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                    ranges.push(sel.getRangeAt(i));
                }
                return ranges;
            }
            return null;
        },

        restore: function restore(savedSel) {
            var i,
                len,
                sel = window.getSelection();
            if (savedSel) {
                sel.removeAllRanges();
                for (i = 0, len = savedSel.length; i < len; i += 1) {
                    sel.addRange(savedSel[i]);
                }
            }
        },

        // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
        // by You
        getStartNode: function getStartNode() {
            var node = document.getSelection().anchorNode,
                startNode = (node && node.nodeType === 3 ? node.parentNode : node);
            return startNode;
        },

        // http://stackoverflow.com/questions/4176923/html-of-selected-text
        // by Tim Down
        getHTML: function getHTML() {
            var i,
                html = '',
                sel,
                len,
                container;
            if (window.getSelection !== undefined) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    container = document.createElement('div');
                    for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                        container.appendChild(sel.getRangeAt(i).cloneContents());
                    }
                    html = container.innerHTML;
                }
            } else if (document.selection !== undefined) {
                if (document.selection.type === 'Text') {
                    html = document.selection.createRange().htmlText;
                }
            }
            return html;
        }
    };

}(window, document));
