# NFL Positions Guide | NFL位置指南

A bilingual (English/Chinese) guide to all positions in the NFL, based on [The Athletic's Tifo Sports video](https://www.youtube.com/watch?v=tg8qouFSmf4).

一个中英文对照的NFL位置介绍网站，内容基于 The Athletic 旗下 Tifo Sports 制作的视频。

## Features | 功能特点

- **Bilingual Support** - Switch between English, Chinese, or both languages
- **Responsive Design** - Works on desktop, tablet, and mobile
- **All Positions Covered** - Offense, Defense, and Special Teams
- **Scoring Guide** - Quick reference for NFL scoring
- **Field Diagram** - Visual representation of the field

## Deploy to GitHub Pages | 部署到 GitHub Pages

### Step 1: Create a GitHub Repository | 创建 GitHub 仓库

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it `nfl-positions-guide` (or any name you prefer)
4. Set it to **Public**
5. Click "Create repository"

### Step 2: Push the Code | 推送代码

```bash
cd nfl-positions-guide

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NFL positions guide"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/nfl-positions-guide.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages | 启用 GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4: Access Your Site | 访问你的网站

After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/nfl-positions-guide/
```

## Local Development | 本地开发

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Project Structure | 项目结构

```
nfl-positions-guide/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript (language switching)
└── README.md       # This file
```

## Credits | 致谢

Content based on "All the positions in the NFL explained" by The Athletic's Tifo Sports.

内容基于 The Athletic 旗下 Tifo Sports 制作的"NFL所有位置详解"视频。

## License | 许可证

This project is for educational purposes. The original video content belongs to The Athletic / Tifo Sports.
