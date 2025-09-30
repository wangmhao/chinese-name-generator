# 🚀 手动部署指南

## 第一步：创建GitHub仓库

### 1.1 登录GitHub
1. 访问 [github.com](https://github.com)
2. 登录您的账号

### 1.2 创建新仓库
1. 点击右上角的 "+" > "New repository"
2. 填写仓库信息：
   - **Repository name**: `chinese-name-generator`
   - **Description**: `专业的中文宝宝起名神器`
   - 设置为 **Public** （必须公开才能使用GitHub Pages）
3. 点击 "Create repository"

### 1.3 获取仓库地址
创建成功后，复制仓库的HTTPS地址：
```
https://github.com/yourusername/chinese-name-generator.git
```

## 第二步：推送代码到GitHub

### 2.1 配置远程仓库
在终端中执行：
```bash
cd /Users/mhao/Public/claude
git remote add origin https://github.com/yourusername/chinese-name-generator.git
```

### 2.2 推送代码
```bash
git push -u origin master
```

如果要求输入用户名和密码：
- **Username**: 您的GitHub用户名
- **Password**: 您的Personal Access Token（不是登录密码）

### 2.3 创建Personal Access Token（如果需要）
1. GitHub设置 > Developer settings > Personal access tokens
2. 点击 "Generate new token"
3. 设置token名称，选择权限（repo）
4. 生成并复制token（只显示一次）

## 第三步：启用GitHub Pages

### 3.1 进入仓库设置
1. 在GitHub仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"

### 3.2 配置Pages
1. **Source**: 选择 "Deploy from a branch"
2. **Branch**: 选择 "master"
3. **文件夹**: 选择 "/ (root)"
4. 点击 "Save"

### 3.3 等待部署
- 几分钟后，网站将在以下地址可用：
  ```
  https://yourusername.github.io/chinese-name-generator/
  ```

## 第四步：配置小程序

### 4.1 打开微信开发者工具
1. 点击 "导入项目"
2. 项目目录：选择 `/Users/mhao/Public/claude/miniprogram`
3. AppID：`wx3cc55f272cc21174`
4. 项目名称：`中文取名神器`

### 4.2 修改webUrl（如果需要）
如果您的GitHub用户名不是mhao，请修改：
编辑 `miniprogram/app.js` 第4行：
```javascript
webUrl: 'https://yourusername.github.io/chinese-name-generator/chinese-name-generator.html',
```

### 4.3 配置服务器域名
1. 在开发者工具中，点击右上角"详情"
2. 选择"域名信息"
3. 添加以下域名：
   - **request合法域名**: `https://yourusername.github.io`
   - **web-view域名**: `https://yourusername.github.io`

## 第五步：本地测试

### 5.1 测试网页版
1. 打开浏览器访问您的GitHub Pages地址
2. 测试所有功能是否正常

### 5.2 测试小程序
1. 在微信开发者工具中预览
2. 使用手机扫码测试
3. 验证WebView是否能正常加载

### 5.3 常见问题
- **WebView加载失败**: 检查域名配置和HTTPS证书
- **样式问题**: 确保CSS文件路径正确
- **功能异常**: 检查JavaScript控制台错误

## 第六步：提交审核

### 6.1 准备审核材料
参考 `MINIPROGRAM_GUIDE.md` 中的审核指南

### 6.2 上传小程序代码
1. 在开发者工具中点击"上传"
2. 填写版本号：`1.0.0`
3. 填写项目备注
4. 点击"上传"

### 6.3 提交审核
1. 登录微信公众平台
2. 版本管理 > 找到上传的版本
3. 点击"提交审核"
4. 填写审核信息

## 📋 检查清单

- [ ] 创建GitHub仓库
- [ ] 推送代码到GitHub
- [ ] 启用GitHub Pages
- [ ] 验证网页版正常工作
- [ ] 配置小程序项目
- [ ] 本地测试通过
- [ ] 准备审核材料
- [ ] 提交小程序审核

## 🆘 遇到问题？

### GitHub相关
- 确保仓库是Public的
- 检查Personal Access Token权限
- 确认分支名称是否正确

### 小程序相关
- 确认AppID正确
- 检查域名配置
- 验证WebView URL可访问

### 其他问题
- 查看浏览器控制台错误
- 检查网络连接
- 清除浏览器缓存

---

**提示**: 整个部署过程大约需要15-30分钟，其中GitHub Pages部署可能需要几分钟才能生效。