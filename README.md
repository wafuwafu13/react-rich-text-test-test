# react-p5-components
:art: use p5.js in react without writing p5's code

## Install

```
npm i react-p5-components
```

## Components

### GenerateLettersByDragCanvas

#### Code

```jsx
import GenerateLettersByDragCanvas from "react-p5-components";

<GenerateLettersByDragCanvas
  letters={"example letters"}
  height={500}
  width={500}
  font={"Georgia"}
  fontColor={"#000000"}
  fontSizeMin={10}
  backgroundColor={"#CCCCCC"}
/>
```

#### Demo
[click here](https://user-images.githubusercontent.com/50798936/103163042-d2182480-483b-11eb-84be-f536aa1f7983.mp4)

#### Props

| Name | Type | Default | Description |
|:---:|:---:|:---:|:---:|
| letters | string | | generate this letters |
| height | number | 500 | canvas height |
| width | number | 500 | canvas width |
| font | string | "Georgia" | [font-family](https://developer.mozilla.org/ja/docs/Web/CSS/font-family) |
| fontColor | string | "#000000" | font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) |
| fontSizeMin | number | 10 | minimum size of letter |
| backgroundColor | string | #CCCCCC | canvas background [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) |

