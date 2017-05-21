
### 静态文件管理

#### 标识

`core/public/explorer`

> await tool(method, ...params);

#### 请求参数

| KEY       | 类型   | 描述                           |
| --------- | ------ | ------------------------------ |
| method    | String | 处理文件的方法标识             |
| ...params | String | (所有路径都是基于静态文件夹的) |

#### 例子 判断文件/文件夹是否存在(exists)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('exists', '/path/dir').then(res=>{
	//  判断是否有 /path/dir 文件/文件夹
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 获取文件/文件夹属性(stat)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('stat', '/path/dir').then(res=>{
	/**
	 * {
	 *   "resolve": "dir",
	 *   "dirname": ".",
	 *   "basename": "dir",
	 *   "extname": "",
	 *   "size": 0,
	 *   "isFile": false,
	 *   "isDirectory": true
	 * }
	 */
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 列出文件夹里的文件(readdir)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('readdir').then(res=>{
	/**
	 * [
	 *   {
	 *     "resolve": "index.ejs",
	 *     "dirname": ".",
	 *     "basename": "index.ejs",
	 *     "extname": ".ejs",
	 *     "size": 140,
	 *     "isFile": true,
	 *     "isDirectory": false
	 *   }
	 * ]
	 */
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 创建文件夹(mkdir)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('mkdir', '/path/dir').then(res=>{
	// 在 /path 目录创建了 dir 文件夹
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 删除文件/文件夹(remove)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('remove', '/path/file.txt').then(res=>{
	// 删除 /path/file.txt 文件
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 复制文件/文件夹(copy)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('copy', '/path/file1.txt', '/path/file2.txt').then(res=>{
	// 复制 /path/file1.txt 文件 到 /path/文件夹并且重命名为 file2.txt
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 重命名/移动文件/文件夹(move)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('move', '/path/file1.txt', '/path/file2.txt').then(res=>{
	// 移动 /path/file1.txt 文件 到 /path/文件夹并且重命名为 file2.txt
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 写入/覆盖UTF8格式文件(outputFile)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('outputFile', '/path/file.txt', '文本').then(data=>{
	// 将 '文本' 写入到 /path/file.txt 中
}).catch(err=>{
    // err => 错误提示
})
```

#### 例子 读取UTF8格式文件(readFile)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('readFile', '/path/file.txt').then(data=>{
	// 读取文本
}).catch(err=>{
    // err => 错误提示
})
```

#### 压缩文件/文件夹到当前目录(zipEncrypt)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('move', '/path', 'file.zip', ['file1.txt', 'file2.txt']).then(res=>{
	// 将在 /path 文件夹中的 'file1.txt', 'file2.txt' 压缩到 '/path/file.zip'
}).catch(err=>{
    // err => 错误提示
})
```

#### 解压ZIP文件到当前目录同名的文件夹(zipDecrypt)

```javascript
const tool = ctx.getTool('core/public/explorer');

tool('move', '/path/file.zip').then(res=>{
	// 将在 /path/file.zip 压缩文件解压到 /path/file/
}).catch(err=>{
    // err => 错误提示
})



```