# @gdaget/vitepress

see @ [https://steven7sheng.github.io/vitepress/](https://steven7sheng.github.io/vitepress/)
VuePress应该有人用过，而 VitePress 是 VuePress 的下一代框架 ，是支持vue 3.0 的web网站框架。

在它的文档中被称为 "Vuepress 的兄弟”,对比有一些优势,我觉的主要是启动速度快！

- 基于 Vite 而不是 Webpack 所以更快的启动时间，热重载等
- 使用 Vue3 来减少 JS 的有效负载
## 构建步骤

1. 目录创建
```bash
mkdir @gadget/vitepress
cd  @gadget/vitepress
```

2. 初始化`pacakge.json`
```bash
npm init -y
# set package-name=@gadget/vitepress
npm i -D vitepress
```

3. 添加脚本 (可以注释)#--open
```json
"scripts":{
    "dev": "vitepress dev docs ",
    "build": "vitepress build docs",
    "serve": "vitepress  serve docs"
}
```

4. 创建docs文件夹
```bash
mkdir docs
echo '# Hello Gadget'> docs/index.md
```

5. 可以启动项目了
> `npm run dev -- --open`


### MIT License Gen
[https://license-generator.intm.org/](https://license-generator.intm.org/)