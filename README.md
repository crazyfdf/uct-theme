# 配置步骤

1. npm i uct-theme
2. npx uct-theme init
3. 将 scss 导入项目

```
@import './uct-theme.scss';//导入生成的uct-theme
@import 'uct-theme/index.scss';
```

4. 使用
<head>
   <style>
    @import './index.css';
   </style>
   </head>
   <div class='mt10 c-red'>mt10 c-red</div>

```
// 偏移
  mt10 margin-top:10px
  mx10 margin: 10px 0;
  my10 margin: 0 10px;
  ma10 margin: 10px ;
  pt10 padding-top:10px
  px10 padding: 10px 0;
  py10 padding: 0 10px;
  pa10 padding: 10px ;
// 颜色
  c-red  color:red;
  bc-red background-color: red;
  bc-red-1 background-color: rgba(red,.1);
// 边框
  bs-1-red border:1px solid red
  bs-t-1-red border-top:1px solid red
// 字体
  f12 font-size:12px;
// 文本溢出省略
  more-t3

// flex
// f(x|y|xr|yr)-j(s|c|e|sb|sa)-a(s|c|e|baseline|stretch)
  fx-jsb-as:
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;

```
