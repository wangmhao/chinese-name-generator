#!/bin/bash

# GitHub 部署脚本
echo "🚀 开始部署到 GitHub Pages..."

# 检查是否已配置远程仓库
if ! git remote | grep -q "origin"; then
    echo "❌ 请先配置 GitHub 远程仓库"
    echo "📋 执行以下命令："
    echo "   git remote add origin https://github.com/yourusername/chinese-name-generator.git"
    echo "   git push -u origin master"
    exit 1
fi

# 推送代码到 GitHub
echo "📤 推送代码到 GitHub..."
git push origin master

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功！"
    echo ""
    echo "📖 接下来请："
    echo "   1. 访问 GitHub 仓库设置"
    echo "   2. 在左侧菜单选择 'Pages'"
    echo "   3. Source 选择 'Deploy from a branch'"
    echo "   4. Branch 选择 'master'"
    echo "   "   文件夹选择 '/ (root)'"
    echo "   5. 点击 Save"
    echo ""
    echo "🌐 几分钟后，您的网站将在以下地址可用："
    echo "   https://yourusername.github.io/chinese-name-generator/"
else
    echo "❌ 代码推送失败，请检查网络连接和仓库权限"
    exit 1
fi