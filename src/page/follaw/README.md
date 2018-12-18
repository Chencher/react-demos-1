## react技术学习笔记 
```
记录一些使用过程中的感受和心得，以及自己的理解
```


### 组件化
```
把页面的每个小部分拆分成独立的组件，各个组件保持独立。大大的提高了复用性。降低了复杂度。
只是写的时候需要很多个组件，也存在一些重复的代码，写顺畅了，这种开发体验真的很溜，只是开始需要有个适应的过程。
没有DOM操作的开发真的很hp。
```
```
下面是我做的一个demo，一个todolist，可以看到拆分的几个组件。
感觉就是目录好多啊，不过感觉很清晰。
```
![Image text](https://raw.githubusercontent.com/hongmaju/light7Local/master/img/productShow/20170518152848.png)



### 声明式 vs 命令式
```
一个组件的参数【props】可以通过指定方式[声明式]设置默认值，而不需要自己通过代码去判断。确实方便很多。
而且组件接受什么参数比较明显，比较直观。
react使用声明式代替命令式的地方非常多。声明式的是背后机制其实也是命令式的处理，只是进行了提取封装，提升了编码效率，提高了代码质量【减少bug】。

```
```
//可以看看具体代码
export default class Index extends React.Component{
    static propTypes={
        id:propTpyes.string,
        title:propTpyes.string,
        state:propTpyes.number,
        onItemDelete:propTpyes.func
    }

     static defaultProps={
        todoList:[
            {title:'今天的任务',id:'1111',state:0}
        ]
    }
}
```
