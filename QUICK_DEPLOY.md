# 🚀 快速部署指南

## 方案一：使用GitHub（推荐）

### 1. 创建GitHub仓库
1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角 "+" > "New repository"
3. 填写信息：
   - **Repository name**: `chinese-name-generator`
   - **Description**: `专业的中文宝宝起名神器`
   - 选择 **Public**
4. 点击 "Create repository"

### 2. 配置Git认证
#### 方法A：使用Personal Access Token（推荐）
1. GitHub设置 > Developer settings > Personal access tokens
2. 点击 "Generate new token" (classic)
3. Note: `Chinese Name Generator`
4. Expiration: 选择有效期（推荐90天）
5. 勾选权限：`repo`（全选）
6. 点击 "Generate token"
7. **复制生成的token（只显示一次）**

#### 方法B：使用GitHub CLI（更简单）
```bash
# 安装GitHub CLI
brew install gh

# 登录GitHub
gh auth login

# 推送代码
gh repo create chinese-name-generator --public --source=. --remote=origin --push
```

### 3. 推送代码
```bash
cd /Users/mhao/Public/claude

# 如果还没有配置远程仓库
git remote add origin https://github.com/wangmhao/chinese-name-generator.git

# 推送时会要求输入用户名和token
# 用户名：您的GitHub用户名
# 密码：Personal Access Token
git push -u origin master
```

## 方案二：使用其他免费平台

### Netlify（最简单）
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账号
3. 拖拽 `chinese-name-generator.html` 文件到网页
4. 自动生成网站地址

### Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号
3. 下载Vercel CLI: `npm i -g vercel`
4. 在项目目录运行: `vercel`

## 方案三：使用国内平台

### 腾讯云静态网站托管
1. 注册腾讯云账号
2. 使用静态网站托管服务
3. 上传HTML文件

### 阿里云OSS
1. 注册阿里云账号
2. 使用对象存储OSS
3. 开启静态网站托管

## 配置小程序

无论使用哪种方式，获得网站URL后：

### 1. 修改小程序配置
编辑 `miniprogram/app.js`：
```javascript
webUrl: 'https://您的网站地址/chinese-name-generator.html',
```

### 2. 导入小程序
1. 打开微信开发者工具
2. 导入项目：`/Users/mhao/Public/claude/miniprogram`
3. AppID: `wx3cc55f272cc21174`

### 3. 配置域名
在开发者工具 > 详情 > 域名信息中添加：
- request合法域名：您的网站域名
- web-view域名：您的网站域名

## 最快部署方案

如果您想立即测试，可以：

### 临时测试方案
1. 使用 `python -m http.server 8000` 启动本地服务器
2. 在小程序中使用本地地址：`http://localhost:8000/chinese-name-generator.html`
3. 注意：这只能在开发者工具中测试，真机需要HTTPS

### 推荐步骤
1. 先用Netlify快速部署（5分钟）
2. 配置小程序使用Netlify地址
3. 测试功能正常后再考虑GitHub

## 常见问题

### Q: GitHub推送失败？
A: 检查是否已创建仓库，是否使用正确的用户名和Personal Access Token

### Q: 小程序WebView打不开？
A: 检查域名配置，确保使用HTTPS

### Q: 想要自定义域名？
A: 购买域名后，在托管平台配置CNAME记录

---

**建议**：如果GitHub配置复杂，可以先使用Netlify快速体验功能，等熟悉后再迁移到GitHub。