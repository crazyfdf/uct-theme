# 配置步骤

1. npm i uct-theme
2. npx uct-theme init
3. 将 scss 导入项目

```
@import './uct-theme.scss';//导入生成的uct-theme
@import 'uct-theme/index.scss';
```

4. 使用

```
<div class='mt10 c-red'>margin-top:10px; color:#f00;</div>
```

```
// 偏移
  <m|p>[l|t|r|b|x|y]<$space-sizes>
  mt10 margin-top:10px;
  mx10 margin: 10px 0;
  my10 margin: 0 10px;
  m10 margin: 10px;
  pt10 padding-top:10px;
  px10 padding: 10px 0;
  py10 padding: 0 10px;
  p10 padding: 10px;

// 颜色
  <c|bc>-<primary|success|error|warning|info|bgc|main|base|tips|light|brc|black|white|gray|dark|blue|skyblue|green|red|orange|yellow>[-<1|2|3|4|5|6|7|8|9>]
  c-red color:#f00;
  bc-red background-color: #f00;
  bc-red-1 background-color: rgba(#f00,.1);

// 边框
  b<s|ds|dt|db>-<$border-sizes>-<primary|success|error|warning|info|bgc|main|base|tips|light|brc|black|white|gray|dark|blue|skyblue|green|red|orange|yellow>
  bs-1-red border:1px solid #f00
  bs-t-1-red border-top:1px solid #f00

// 圆角
  r[t|l|r|b|tl|tr|bl|br]<$radius-sizes>
  rtl10 border-top-left:10px;
  rt10 border-radius:10px 10px 0 0;
  rl10 border-radius: 10px 0 0 10px;
  rr10 border-radius: 0 10px 10px 0;
  rb10 border-radius: 0 0 10px 10px;
  r10 border-radius: 10px;


// 字体
  f<$font-size>
  f12 font-size:12px;

// 文本溢出省略
  more-t<$omit-sizes>
  more-t1
  {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  more-t3
  {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

// flex
  f<x|y|xr|yr>-<s|c|e|sb|sa>-<s|c|e|baseline|stretch>
  fx-sb-s
  {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
  }

// grid
  g<x|y>-<$grid-sizes>
  gy-1
  {
    display:grid;
    grid-template-rows: repeat(1, minmax(0, 1fr));
    grid-auto-flow:column;
  }
   gx-1
  {
    display:grid;
    grid-template-column: repeat(1, minmax(0, 1fr));
  }

// gap
  gap[x|y]<$gap-sizes>
  gap10 gap: 10px;
  gapx20 column-gap: 20px;
  gapy40 row-gap: 40px;

```

## 生成的 css

```
# index.css
```
