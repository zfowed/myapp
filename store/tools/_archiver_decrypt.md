
### 归档解压

#### 标识

`core/archiver/decrypt`

> await tool(src, dest);

| KEY  | 类型   | 描述           |
| ---- | ------ | -------------- |
| src  | String | 压缩包路径     |
| dest | String | 解压到目标路径 |

#### 例子

```javascript
const tool = ctx.getTool('core/archiver/decrypt');
tool('/path/file.zip', '/path/zip/').then(()=>{
    // 将 /path/file.zip 解压到 /path/zip/;
}).catch(err=>{
    // err => 错误提示
})
```