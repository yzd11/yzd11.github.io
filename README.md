# yzd 的博客

Hexo 8 + Butterfly 主题，推送到 `main` 后由 GitHub Actions 自动构建并发布到 https://yzd11.github.io 。

## 发一篇新笔记

1. 按 `scaffolds/paper.md`（论文阅读笔记模板）写好笔记（首页封面默认取正文第一张图，也可以在 frontmatter 里写 `cover:` 指定），文件放到 `source/_posts/<简称>.md`。
2. 图片放到同名文件夹 `source/_posts/<简称>/`，正文里写 `![说明](<简称>/图片名.png)`。
3. 提交并推送到 `main`，几分钟后自动上线。

## 本地预览

```bash
npm ci
npx hexo server   # 打开 http://localhost:4000
```

公式用 `$...$` 和 `$$...$$`，由 KaTeX 在构建时渲染。旧站的静态文件保存在 `old-site` 分支。
