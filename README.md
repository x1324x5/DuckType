# DuckType Showcase

这是 DuckType（码字鸭）的静态展示页仓库，可直接用于 GitHub Pages、Cloudflare Pages、Vercel 或任意静态托管。

## 本地预览

直接打开：

```text
index.html
```

或用任意静态服务器：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://127.0.0.1:8000/
```

## 文件结构

```text
.
├─ index.html
├─ styles.css
├─ .nojekyll
└─ assets/
   ├─ duck.png
   ├─ ducktype-dashboard.png   # 看板（首屏背景 + 真实仪表盘）
   ├─ shot-fun.png             # 趣味页
   ├─ shot-report.png          # 报告页
   ├─ shot-sequence.png        # 输入序列
   ├─ shot-lexicon.png         # 词库占比
   ├─ shot-mini.png            # 随身鸭
   └─ mini-counter.png         # 随身鸭手绘插画
```

> 截图均使用应用内置的「演示数据」（虚构语料），不含任何真实输入。

## 部署到 GitHub Pages

1. 新建一个仓库，例如 `ducktype-showcase` 或 `ducktype-site`。
2. 将本目录内容推送到仓库。
3. 在仓库 Settings → Pages 中选择 `main` 分支和根目录。
4. 等待 GitHub Pages 构建完成。

页面中的下载、源码、Issue、License 链接均指向：

```text
https://github.com/x1324x5/Duck-Type
```

