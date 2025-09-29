# 中文取名神器 - 部署指南

## 快速部署方式

### 🚀 最简单：Netlify
1. 访问 [Netlify.com](https://netlify.com)
2. 注册/登录账号
3. 拖拽 `chinese-name-generator.html` 到网页
4. 自动生成网站地址

### 🎯 GitHub Pages（推荐）
1. 创建GitHub仓库
2. 上传HTML文件
3. Settings > Pages > Source: main分支
4. 访问：`https://yourusername.github.io/repository-name/`

### ☁️ 腾讯云静态网站托管
1. 注册腾讯云账号
2. 使用静态网站托管服务
3. 创建存储桶，上传文件
4. 配置静态网站托管

### 📱 微信分享优化
已添加微信分享友好的meta标签，支持微信内正常访问。

## 服务器部署

### Nginx配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index chinese-name-generator.html;

    # Gzip压缩
    gzip on;
    gzip_types text/html text/css application/javascript;

    # 缓存配置
    location ~* \.(html|css|js)$ {
        expires 1d;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache配置
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html
    DirectoryIndex chinese-name-generator.html

    <Files "*.html">
        Header set Cache-Control "max-age=86400, public"
    </Files>
</VirtualHost>
```

## CDN加速

### 使用七牛云CDN
1. 注册七牛云账号
2. 创建对象存储空间
3. 上传HTML文件
4. 配置CDN加速

### 使用阿里云CDN
1. 阿里云对象存储OSS
2. 配置静态网站托管
3. 开启CDN加速

## 域名配置

### DNS设置
```
@   A   服务器IP
www A   服务器IP
```

### SSL证书（推荐）
- Let's Encrypt免费证书
- 阿里云免费SSL证书
- 腾讯云SSL证书

## 监控统计

### 百度统计
```html
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?YOUR_ID";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

### Google Analytics
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 成本预估

### 免费方案
- GitHub Pages: $0
- Netlify: $0（100GB带宽）
- Vercel: $0

### 低成本方案
- 域名: ¥60/年
- 虚拟主机: ¥300/年
- 总计: ¥360/年

### 专业方案
- 云服务器: ¥300/年起
- CDN: ¥50/月起
- 域名+SSL: ¥100/年
- 总计: ¥450/年起

## 推荐方案

### 个人使用
**GitHub Pages + 自定义域名**
- 成本：域名费 ¥60/年
- 优点：稳定、免费、HTTPS

### 商业使用
**腾讯云/阿里云 + CDN**
- 成本：¥400-800/年
- 优点：速度快、国内访问快、支持备案

### 快速上线
**Netlify**
- 成本：$0
- 优点：无需技术、一键部署、全球CDN

## 注意事项

1. **备案**: 如果使用国内服务器，需要ICP备案
2. **HTTPS**: 建议开启HTTPS，现代浏览器要求
3. **CDN**: 建议使用CDN加速，提升用户体验
4. **备份**: 定期备份网站文件
5. **监控**: 添加访问统计，了解使用情况

## 技术支持

如有问题，可以参考：
- [GitHub Pages文档](https://pages.github.com/)
- [Netlify文档](https://docs.netlify.com/)
- [腾讯云文档](https://cloud.tencent.com/document/product)