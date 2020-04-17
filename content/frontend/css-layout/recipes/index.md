---
title: CSS Layout Recipes cookbook
---
# Cookbook recipes
- If we want to scale applications based on screensize, we can do:
  ```css
  :root {
    font-size: 0.75em;
  }
  @media (min-width: 800px) {
    :root {
      font-size: 0.875em;
    }
  }
  @media (min-width: 1200px) {
    :root {
      font-size: 1em;
    }
  }     
  ```
  This will save us a tonne of media queries while scaling the CSS codebase.
- Scaling a component literally:\
  ```css
  .component {
    font-size: 1rem; /* <- pattern */
    padding: 1em;
    border: 1px solid #999;
    border-radius: 0.5em;
  }
  ```
  Here, we are fixing the `font-size` w.r.t `:root` and sizing other properties w.r.t the now-fixed font sizing. Now, overriding only the `font-size` will result in predictable size scaled component.
- Fluid scaling of font-size across diff screensizes
  ```css
  :root {
    font-size: calc(0.5em + 1vw);
  }
  ```
- specify `line-height` at root as unitless value, bcz if we specify unit, it will be fixed and for larger font sizes, we need to override it to avoid overlapping of text vertically.
- Universal `border-box`
  ```css
  :root {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  ```
  So that if any third party library expects `context-box` to be set, we can set it to the container of the element using it so that its children will using `inherit` property.
- center align content
  - use equal top and bottom padding on parent container.
  - use `table-cell` with `vertical-align: middle`.
- `lobotomized owl selector`:\
  - `* + *`
  - selects every element except `:first-child` of all parent elements.
  - This is used to add `margin-top` to all. this greatly simplifies adding margin to multiple elements. need to override wherever the elements are side by side.
  For existing browsers, it has got no performance penalties, since it also greatly reduces the number of selectors down the line.
    ```css
    body * + * {
      margin-top: 1.5em;
    }
    ```


## References
- [CSS in Depth [Book]](https://learning.oreilly.com/library/view/css-in-depth/9781617293450/)