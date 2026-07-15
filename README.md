# 东南大学学生个人主页

这是一个单页个人作品集，适合放在 GitHub Pages。页面包含自我介绍、技能、项目经历和联系方式，并已适配手机。

## 先把它改成你的

主要内容都集中在 `app/page.tsx` 的最上方：

1. 在 `profile` 中替换姓名、邮箱、GitHub 地址和毕业年份。
2. 在 `projects` 中填写你的课程项目、竞赛、科研或个人作品。
3. 在 `skills` 中只保留你真正熟悉或正在学习的技能。
4. 在 `app/layout.tsx` 中修改浏览器标题和网站简介。

建议每个项目都写清楚三件事：解决了什么问题、你做了什么、结果怎么样。即使项目不大，这也比只写技术栈更有说服力。

## 在电脑上预览

需要 Node.js 22 或更高版本。安装并启动后，浏览器打开 `http://localhost:3000`：

```bash
npm install
npm run dev
```

## 发布到 GitHub Pages

仓库已经包含自动发布流程。把代码上传到 GitHub 后：

1. 打开仓库的 **Settings → Pages**。
2. 在 **Build and deployment** 下，把 **Source** 设为 **GitHub Actions**。
3. 推送到 `main` 分支，等待仓库顶部的 **Actions** 变成绿色。
4. GitHub 会在 Pages 设置页显示你的公开网址。

如果仓库名是 `你的用户名.github.io`，网址会是 `https://你的用户名.github.io`；其他仓库名的网址通常是 `https://你的用户名.github.io/仓库名/`。

## 常用命令

```bash
npm run dev          # 本地预览
npm run build        # 检查网站是否能正常构建
npm run build:github # 生成 GitHub Pages 静态文件
```
