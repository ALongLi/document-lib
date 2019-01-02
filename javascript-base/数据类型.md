---
title: 数据类型
tags: js 数据类型
notebook: js
---

### Boolean类型
  该类型只有两个值 true 和 false,并且区分大小写，在 es 中所有数据类型的值都和这两个Boolean有关，要讲一个值转换为对应的Boolean值，可以调用转型函数Boolean()  
```javascript
    Boolean("陈俊先")   //true
    Boolean("")    //false
    Boolean(0)  //false
    Boolean(-1) //true
    Boolean(1)   //true
    Boolean({name:"陈俊先",husband:"李阿龙"})  //true
    Boolean(null)  //false
    Boolean(undefined)  //false
```

### Number类型
该类型表示整数和浮点数（小数），在这里主要了解十进制的数字，在js中浮点数计算会有精度缺失的效果即0.1+0.2=0.3不成立，在数值计算的时候会出现异常如0.1-"a",是不符合数值计算规则的，它的结果不是数值，于是js统一给了他们一个结果NaN（Not a Number）的缩写表示计算后本应该返回数值结果返回不了数值的情况，它有两个特点

1.任何涉及NaN 的操作或者不能返回数值的计算操作都返回NaN,如（0.1-"a"，NaN/2）  
2.NaN与任何值都不想相等，包括NaN本身   NaN==NaN是错误的

针对NaN的特点 es定义了 isNaN()函数，这个函数接受一个任意类型参数，这个函数会帮我们判断这个参数是否不是数值
```javascript
   isNaN(NaN)    //true
   isNaN(10)    //false
   isNaN("陈俊先")  //true
   isNaN(true)  //false
   isNaN(false) //false
   isNaN(undefined) //true
   isNaN(null)  //false
   isNaN({name:"陈俊先"})   //true
```

#### 数值转换
有三个函数可以把非数值转换为数值，Number(),parseInt(),parseFloat()  
1.Number()可用于转换任何数据类型
  - Boolean值，true和false会转换为1和0
  - 数值，原样返回
  - null，返回0
  - undefined，返回NaN
  - 字符串会遵循以下规则
      - 只包含数字例如"123"会转换为123
      - 如果字符串包含有效小数点"52.1.1",会转换为52.1第二个小数点后面的不要
      -  如果字符串是空的""，会转换为0
      -  如果字符串开头不是数字，转换为NaN
  - 如果是对象，很少用到，以后再说
下面是例子
```javascript
  Number("陈俊先")  //NaN
  Number("521")  //521
  Number("521陈俊先")   //521
  Number("52.1")    //52.1
  Number("52.1陈俊先")  //52.1
  Number(true)  //1
  Number(false) //0
  Number(null)  //0
  Number(undefined) //NaN
```  
2.parseInt()数值转换函数
   - 不符合数值模式（即不是数字开头的），直接返回NaN
   - 以数字开头的字符串，转换为整数，遇到非数字截止，即非数字后面的都不要，小说点后的也会省略掉
   - parseInt是转换为整数，但是空字符串为转换为NaN，这与Number()，不太一样

```javascript
  parseInt("陈俊先")  //NaN
  parseInt("521")   //521
  parseInt("521陈俊先")     //521
  parseInt("52.1")  //52
  parseInt("52.1陈俊先")    //52
  parseInt(true)    //NaN
  parseInt(false)   //NaN
  parseInt(null)     //NaN
  parseInt(undefined)   //NaN
   parseInt('')   //NaN
```
2.parseFloat()数值转换函数
   - 与parseInt()几乎一致，只是parseFloat遇到第一个小数点依然会继续往后转换
```javascript
  parseFloat("陈俊先") //NaN
  parseFloat("521")   //521
  parseFloat("521陈俊先")  //521
  parseFloat("52.1")   //52.1
  parseFloat("52.1陈俊先")    //52.1
  parseFloat(true)    //NaN
  parseFloat(false)   //NaN
  parseFloat(null)    //NaN
  parseFloat(undefined)   //NaN
  parseFloat("")   //NaN
```

### String类型
  1.由单引号('')或者双引号（""）表示例如  
  `var name="陈俊先"`  
  `var name='陈俊先'`  
  2.转换为字符串有两种方式一种是调用toString()方法，另一种是调用String()转型函数，数值，布尔值，对象和字符串有toString()方法，但是null和undefined没有这个方法，而String()则可以将任意数据类型转为字符串规则如下  
  - 如果值有 toString()方法调用该方法
  - 如果值是null，返回"null"
  - 如果值是undefined，返回"undefined"

  ```javascript
    String(10)  //"10"
    String(true) //"true"
    String(false)   //"false"
    String(null)    //"null"
    String(undefined)    //"undefined"
    String({name:1})    //"[object Object]"
  ```

    
![alt](https://github.com/ALongLi/document-lib/blob/master/img/1.jpg?raw=true)


      

    
   
