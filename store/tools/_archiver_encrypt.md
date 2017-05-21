
### 归档压缩

#### 标识

`core/archiver/encrypt`

> await tool(dest, srcList [, option]);

| KEY           | 类型   | 描述                                |
| ------------- | ------ | ----------------------------------- |
| dest          | String | 压缩到目标文件路径                  |
| srcList       | String | 需要压缩的文件路径数组              |
| option        | Object | 选项                                |
| option.format | String | 格式，目前暂时只支持'zip',默认'zip' |
| option.level  | Number | 压缩等级 0-9 ,默认 9                |
| option.path   | String | 工作路径 ,默认 '/'                  |



#### 例子

```javascript
const tool = ctx.getTool('core/archiver/encrypt');
tool('file.zip', [
	'dir1',
	'dir2',
	'file1.txt',
	'file2.img',
	'file3.mp3',
], {
	format: 'zip',
	level: 9,
	path: '/path',
}).then(()=>{
    // 将 /path/dir1, /path/dir2, /path/file1.txt, /path/file2.img, /path/file3.mp3 压缩到 /path/file.zip;
}).catch(err=>{
    // err => 错误提示
})
```