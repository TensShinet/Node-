# 4.1 使用 require和默认路径加载模块
1. review 路径问题
+ ./ 当前路径
+ ../ 父亲
+ / 绝对路径

2. 对于没给路径的包来说, 会顺着 目录 对 node_modules 里面的内容 搜索 modules

3. require.resolve 方法负责查找给定的模块 但只返回文件名
4. delete require.cache('http') 删除缓存的模块

# 4.2外部模块和Node包管理工具
