---
title: CSS Layout
---
## Concepts
### Keywords
- Different style `origin`:\
  - User agent style sheets
  - Normal declarations in user style sheets
  - Normal declarations in author style sheets
  - Important declarations in author style sheets
  - Important declarations in user style sheets
- `Declaration:`\
  Made up of a `property` and a `value`.\
  e.g:
  ```css
  background-color: steelblue;
  ```
- `Declaration block`:\
  curly braces containing one or multiple `declarations`, preceded by `selector`.
- `ruleset`:\
  `selector` plus `declaration block`
- A declaration that “wins” the cascade is called a `cascaded value`. It is the mechanism that controls the end result when multiple, conflicting CSS declarations apply to the same element.
- `User stylesheet`:\
  a style sheet that the user has specified. Not all browsers support user style sheets, but they can be very useful
- `Author stylesheet`
- `late-binding` of styles:\
The content and its styles aren’t pulled together until after the authoring of both is complete. But it can be applied to thousands of pages. The final rendering of the page can be altered directly by the user, who, for example, can change the default font size or resize the browser window.
- The root node is the ancestor of all other elements in the document. It has a special pseudo-class selector (:root) that you can use to target it. This is equivalent to using the type selector html with the specificity of a class rather than a tag.

### CSS conflict resolution
- first, based on origin / importance
- then, specificity
- finally, source order

### Basic rules
- pseudo-class selectors and attribute selectors each have same specificity as class selector
- The order of `pseudo-class` selectors
  - `:link`
  - `:visited`
  - `:hover`
  - `:active`
  If two or more of these states are true of one element at the same time, the last one can override the others. A helpful mnemonic to remember this order is `LoVe/HAte`—link, visited, hover, active.
- Rules of thumb:
  - Don’t use IDs in your selector
  - Don’t use !important
  - while creating modules/libararies dont apply styles using JS. For dynamic styling, the package can include a stylesheet and class can be added and removed on demand to achieve the required effect. This will help users win specificity battle without breaking the *thumb rules*.
- A non-inline display value and a content value cause the `pseudo-element` to appear in the document.

### Flexbox
- making `flex-children` `display:block` helps to add height to parent container. If they were to remain inline, the height they’d contribute to their parent         would be derived from their line height—not their padding and content.
- flexbox allows you to use `margin: auto` to fill available space between the flex items.
- `flex-basis`:\
   defines a sort of starting point for the size of an element—an initial value. can be set to any value that would apply to width. Its initial value is `auto`, which means the browser will look to see if the element has a `width` declared. If so, the browser uses that size; if not, it determines the element’s size naturally by the contents. This means that width will be ignored for elements that have any flex basis other than `auto`.

### Modular CSS
- `base-rules`:\
  Every stylesheet begins with a set of generic rules that apply to the whole page.
- You should avoid targeting based on generic tag types, such as `div` and `span` in selectors

### Inheritence
Not all properties are inherited. Majority is text based, like:
- `color`
- `font`
- `font-family`
- `font-size`
- `font-weight`
- `font-variant`
- `font-style`
- `line-height`
- `letter-spacing`
- `text-align`
- `text-indent`
- `text-transform`
- `white-space`
- `word-spacing`
  
Others are like, list based:
- `list-style`
- `list-style-type`
- `list-style-position`
- `list-style-image`

Table borders:
- `border-collapse`
- `border-spacing`

Importance of inheritance and emphasis on how it is difference from cascade can be shown with an example.
```css
p {
  color: #1b1b1b;
}
.aside {
  color: #555;
  font-size: 14px;
}
.aside p {
  color: inherit;
}
```
#### `inherit` keyword
In the example above, all the paragraph tags will be rendered with a global value of `#1b1b1b` unless overridden. The `aside` class has color of `#555`. But since paragraph inside `.aside` will render in `#1b1b1b1`, we can add `.aside p { color: #1b1b1b; }`. But it will be repeatative. Again, if we change, say theme color, of aside then we need to change if for paragraph also.\
This can be avoided by using `color: inherit`. We are forcing paragraph inside `.aside` to inherit the property from its parent.\
Here, doubt is, by default the `color` should have been inherited. Why we are forcing the para to inherit?

### Shorthands
- `font`
  - combination of:
    - `font-style`
    - `font-weight`
    - `font-size`
    - `line-height`
    - `font-family`
    - `font-variant`
    - `font-stretch`
  - e.g: 
    ```css
    font: italic bold 18px/1.2 "Helvetica", "Arial", sans-serif;
    ```
- `background`:
  - combination of:
    - `background-color`
    - `background-image`
    - `background-size`
    - `background-repeat`
    - `background-position`
    - `background-origin`
    - `background-chip`
    - `background-attachment`
- `border`
  - combination of:
    - `border-width`
    - `border-style`
    - `border-color`
- `border-width`
- `border-radius`
- `margin`
  - mnemonic used for top, right, bottom, left - "TRouBLe"
- `padding`



### Absolute units:
- px
- mm
- cm
- in
- pt (point—typographic term for 1/72nd of an inch)
- pc (pica—typographic term for 12 points)

### Relative units
Values declared using relative units are evaluated by the browser to an absolute value, called the computed value. This is done by multiplying `em` value with `font-size`.
- `em`:\
  - the font size of the current element
  - depends on element on which applied, sometimes property also
  - `font size: 1.2em`:\
    A font size can’t equal 1.2 times itself. Instead, font-size ems are derived from the inherited font size.
  - the browser must calculate the font size first, and then it uses that value to calculate the other values.
  - trick:\
    ```css
    .title {
      font-size: 1.2em;
      padding: 1.2em;
    }
    ```
    Here, if base font size is 16px, then the font size of `.title` will be 16px * 1.2em = 19.2px. Since, `font-size` itself needs to inherit. But for padding, it will be based on computed `font-size` i.e. 19.2px * 1.2em = 23.04px.
  - another gotcha:\
    if we are using `.8em` font size in a nested way, the size of the nested elements will go on shrinking by using the computed value of its parent, called `shrinking text` effect.
- `rem`:\
  - shortform of "Root em". (check for definition of root, above).
  -  Instead of being relative to the current element, rems are relative to the root element.
- `vh`, `vw`, `vmin`, `vmax`:\
  - `vmin` is 1/100th of the smaller dimension, height or width.
  - Similarly, `vmax` - self explanatory.

### Anti-patterns
- Using 10px calculation for root element:
  ```css
  html {
    font-size: .625em;
  }
  ```
  - this makes calculation simple but since the base font size of our elements become 10px, we need to override it throught our CSS, by leaving behind power of inheritance to work for us.

### Box model
- the percentage is relative to the full width of the parent
- the height of a container is organically determined by its contents, not by the container itself.
- Percentage refers to the size of an element’s containing block; the height of that container, however, is typically determined by the height of its children. This produces a circular definition that the browser can’t resolve, so it’ll ignore the declaration. For percentage-based heights to work, the parent must have an explicitly defined height.
- A vertical-align declaration only affects inline and table-cell elements
- `inline` elements control alignment among other elements on the same line.
- Equal top and bottom padding vertically centers an element’s content without a fixed height.
- If applied to the left or top, the `negative margin` moves the element leftward or upward, respectively. If applied to the right or bottom side, it pulls in any succeeding element.
- When a block element doesn’t have a specified width, it naturally fills the width of its container.
- `margin collapse`:\
  - any adjacent top and bottom elements, their `margins collapse` together. If you add an empty, unstyled div (one with no height, border, or padding) to the page, its own top and bottom margins will collapse. Left and right margins don’t collapse.
  - similarly, when elements are in a hierarchy, the adjacent top/bottom margin of the child will collapse with that of the parent
  - prevention:
    - when `padding`/`border` `top`/`bottom` is applied on parent, margin collapse won't happen
    - but margins of `flex` / `grid` / `table-cell` / `table-row` don't collapse. But `table` / `table-caption` / `table-inline` does.
    - apply any value to `overflow` property except `visible`
    - Margins won’t collapse to the outside of a container that is floated, that is an inline block, or that has an absolute or fixed position.


## Document flow alterators:
1. floats
2. flexbox
3. grid

## Summary
- use intended/readable/base/majority `font-size` as `:root`'s `font-size`
- use `rem` for `font-size`, `px` for borders and `em` for margins & paddings.

## References
- [CSS in Depth [Book]](https://learning.oreilly.com/library/view/css-in-depth/9781617293450/)
- [Inheritance and cascade · WebPlatform Docs](https://webplatform.github.io/docs/tutorials/inheritance_and_cascade/)