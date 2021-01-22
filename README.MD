# 安装
npm install --global @gridsome/cli
## 安装失败原因
gridsome依赖于sharp，sharp很难安装成功的原因如下：

## 问题一：包含c++文件，需要对此进行编译，所以需要安装c++运行环境
解决方案：
    安装node-gyp,该包是解决在node环境中编译c++库打包的问题。
    `npm install -g node-gyp`
    node-gyp根据操作系统不同，还需要安装一些额外的东西
    参阅文档 https://www.npmjs.com/package/node-gyp

## 问题二、sharp依赖libvips，但是这个包很大，在国内由于网络原因很难安装成功
解决方案：
    `npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"`
    `npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"`

# 创建
gridsome create my-gridsome-site

# 启动
npm run develop