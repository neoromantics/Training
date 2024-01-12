# Homework Day4

# what is event propagation?

When an event happens on an element, it can trigger other events to happen on other elements too. Event propagation include bubbling and capturing.

# difference between let, const, var

**var** is no longer being used since it’s very unpredictable and buggy.

**const**: Does not allow reassignment or revaluate. However, if the const variable is an object or array, its properties or elements can be updated or changed.

**let**: Allow reassignment

# what is a reference type

a type of data that stores the reference or address to a location in memory.

examples: objects, arrays, functions

# difference between == vs ===, which one should we use

== allows type coersion

===  checks both the value and the type. no type coersion.

we should use === 

# what is type coercion

 converting one type of data to another type to do operations on different type of data

# Todo List Code

[todo](https://codesandbox.io/p/sandbox/todo-fz859c?layout=%7B%22sidebarPanel%22%3A%22EXPLORER%22%2C%22rootPanelGroup%22%3A%7B%22direction%22%3A%22horizontal%22%2C%22contentType%22%3A%22UNKNOWN%22%2C%22type%22%3A%22PANEL_GROUP%22%2C%22id%22%3A%22ROOT_LAYOUT%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22UNKNOWN%22%2C%22direction%22%3A%22vertical%22%2C%22id%22%3A%22clraaoq6e00063b6hs2q6tsv7%22%2C%22sizes%22%3A%5B100%2C0%5D%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22EDITOR%22%2C%22direction%22%3A%22horizontal%22%2C%22id%22%3A%22EDITOR%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22EDITOR%22%2C%22id%22%3A%22clraaoq6e00023b6hmmms7e3t%22%7D%5D%7D%2C%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22SHELLS%22%2C%22direction%22%3A%22horizontal%22%2C%22id%22%3A%22SHELLS%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22SHELLS%22%2C%22id%22%3A%22clraaoq6e00033b6hsgpkrywk%22%7D%5D%2C%22sizes%22%3A%5B100%5D%7D%5D%7D%2C%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22DEVTOOLS%22%2C%22direction%22%3A%22vertical%22%2C%22id%22%3A%22DEVTOOLS%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22DEVTOOLS%22%2C%22id%22%3A%22clraaoq6e00053b6hvl68e490%22%7D%5D%2C%22sizes%22%3A%5B100%5D%7D%5D%2C%22sizes%22%3A%5B50%2C50%5D%7D%2C%22tabbedPanels%22%3A%7B%22clraaoq6e00023b6hmmms7e3t%22%3A%7B%22id%22%3A%22clraaoq6e00023b6hmmms7e3t%22%2C%22tabs%22%3A%5B%7B%22id%22%3A%22clrabb9bm00023b6hxme95dcv%22%2C%22mode%22%3A%22permanent%22%2C%22type%22%3A%22FILE%22%2C%22initialSelections%22%3A%5B%7B%22startLineNumber%22%3A36%2C%22startColumn%22%3A1%2C%22endLineNumber%22%3A36%2C%22endColumn%22%3A1%7D%5D%2C%22filepath%22%3A%22%2Fscript.js%22%2C%22state%22%3A%22IDLE%22%7D%5D%2C%22activeTabId%22%3A%22clrabb9bm00023b6hxme95dcv%22%7D%2C%22clraaoq6e00053b6hvl68e490%22%3A%7B%22tabs%22%3A%5B%7B%22id%22%3A%22clraaoq6e00043b6h4a2b5uiu%22%2C%22mode%22%3A%22permanent%22%2C%22type%22%3A%22UNASSIGNED_PORT%22%2C%22port%22%3A0%2C%22path%22%3A%22%2F%22%7D%5D%2C%22id%22%3A%22clraaoq6e00053b6hvl68e490%22%2C%22activeTabId%22%3A%22clraaoq6e00043b6h4a2b5uiu%22%7D%2C%22clraaoq6e00033b6hsgpkrywk%22%3A%7B%22tabs%22%3A%5B%5D%2C%22id%22%3A%22clraaoq6e00033b6hsgpkrywk%22%7D%7D%2C%22showDevtools%22%3Atrue%2C%22showShells%22%3Afalse%2C%22showSidebar%22%3Atrue%2C%22sidebarPanelSize%22%3A15%7D)