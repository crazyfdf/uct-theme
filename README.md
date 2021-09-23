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
<div class='m-t-10 c-red'>margin-top:10px; color:#f00;</div>
```

```
// 偏移
  <m|p>-[l|t|r|b|x|y]-<$space-sizes>
  m-t-10 margin-top:10px;
  m-x-10 margin: 10px 0;
  m-y-10 margin: 0 10px;
  m-10 margin: 10px;
  p-t-10 padding-top:10px;
  p-x-10 padding: 10px 0;
  p-y-10 padding: 0 10px;
  p-10 padding: 10px;

// 颜色
  <c|bc>-<primary|success|error|warning|info|bgc|main|base|tips|light|brc|black|white|gray|dark|blue|skyblue|green|red|orange|yellow>[-<1|2|3|4|5|6|7|8|9>]
  <!-- 字体颜色 -->
  c-red color:#f00;
  <!-- 背景颜色 -->
  bc-red background-color: #f00;
  bc-red-1 background-color: rgba(#f00,.1);
  <!-- 边框颜色 -->
  border-<s|ds|dt|db>-<$border-sizes>-<primary|success|error|warning|info|bgc|main|base|tips|light|brc|black|white|gray|dark|blue|skyblue|green|red|orange|yellow>
  border-s-1-red border:1px solid #f00;
  border-s-t-1-red border-top:1px solid #f00;

// 圆角
  br-[t|l|r|b|tl|tr|bl|br]-<$radius-sizes>
  br-tl-l10 border-top-left-radius:10px;
  br-t-10 border-radius:10px 10px 0 0;
  br-l-10 border-radius: 10px 0 0 10px;
  br-r-10 border-radius: 0 10px 10px 0;
  br-b-10 border-radius: 0 0 10px 10px;
  br-10 border-radius: 10px;


// 字体
  font-<$font-size>
  font-12 font-size:12px;

// 文本溢出省略
  more-<$omit-sizes>
  more-1
  {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  more-3
  {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

// flex
  flex-<x|y|xr|yr>-<s|c|e|sb|sa>-<s|c|e|baseline|stretch>
  flex-x-sb-s
  {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
  }

// grid
  grid-<x|y>-<$grid-sizes>
  grid-y-1
  {
    display:grid;
    grid-auto-flow:column;
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
   grid-x-1
  {
    display:grid;
    grid-template-column: repeat(1, minmax(0, 1fr));
  }

// gap
  gap-[x|y]-<$gap-sizes>
  gap-10 gap: 10px;
  gap-x-20 column-gap: 20px;
  gap-y-40 row-gap: 40px;

```

## 生成的 css

```
# index.css
```
