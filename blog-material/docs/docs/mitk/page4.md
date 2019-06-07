# 《MITK 入门学习之我见》
::: tip 关于本章
MITK官方的文档教程不是很友好，网上学习资料也不多（基本都止步于编译环节），自己在学习中走了很多弯路，浪费了大量的时间，因此想将自己的一些学习经验总结一下，帮助大家少踩一些坑，不过，下面内容都是基于我我自己的理解写的，如有不妥之处，请以官方文档为准
:::

*首先将学习MITK中我经常用到的一些资料统一放在开头，后文中也会一一指明<br/>*
*[MITK官方文档](http://docs.mitk.org/nightly/index.html)<br/>*
*[ITK5.0.0官方文档](https://itk.org/Doxygen/html/index.html)<br/>*
*[ITK wiki example 4.13版](https://itk.org/Wiki/ITK/Examples)<br/>*
*[ITK example 5.0.0版](https://itk.org/ITKExamples/src/index.html)<br/>*
*[ITK Software Guide](https://itk.org/ItkSoftwareGuide.pdf)<br/>*

## 1. MITK是什么
#### MITK(Medical Image Interaction Tool Kit)医学影像处理交互平台，MITK既可以作为一个纯软件库使用，也可以作为完整的应用程序框架，使用分两种：
* 向现有程序框架添加插件
* 利用MITK软件库实现自己的应用
#### MITK使用了很多第三方库，但开始学习的时候只需要记住下面几个：
* ITK（Insight Segmentation and Registration Toolkit）图像分割配准函数库：医学影像处理中的opencv，实现了各种图像（png,nrrd,dicom等各类格式）读写，图像处理（图像分割，图像配准，图像数据统计等）功能
* VTK（visualization toolkit）视觉化工具函数库，医学影像处理中的opengl，实现了各种图像可视化功能（图片显示，图像绘制等）
* QT

开始学习时，MITK可以简单理解为一个已经写好的QT程序，其中引用了ITK,VTK两个第三方库来做图像处理与显示，在这之上，MITK还实现了一些对ITK,VTK,QT的上层封装，具体参考*[MITK官方文档](http://docs.mitk.org/nightly/index.html)*中Developer Manual的部分

## 2.MITK的入门学习路线
1. 首先看完 *[MITK官方文档](http://docs.mitk.org/nightly/index.html)* 中Developer Manual/Starting your MITK Development与Developer Manual/MITK Concepts两个部分的内容
2. 结合编译好的程序将tutorial部分过完后（region growing的ITK代码先不着急看），看org_mitk_example_gui_regiongrowing，这就是一个简单的插件示例（ITK部分的代码跳过，知道功能就行），然后学会制作自己的插件 *[MITK添加插件教程](./page3.md)*
3. 在理解了plugin的结构后，可以开始学习ITK了，*[ITK Software Guide](https://itk.org/ItkSoftwareGuide.pdf)* 是一个非常详细的ITK教程，跳着看完，这时候再回头看之前region growing的部分就没问题了，也理解了MITK中调用ITK的方法
4. 除了教程中给出的部分，ITK的大部分用法，*[ITK wiki example 4.13版](https://itk.org/Wiki/ITK/Examples)*  与 *[ITK example 5.0.0版](https://itk.org/ITKExamples/src/index.html)* 例子非常丰富，需要的功能，里面搜索就行，结合*[ITK5.0.0官方文档](https://itk.org/Doxygen/html/index.html)* API文档食用最佳
5. 学到此处，就基本入门了，后续学习就是MITK文档其他部分的深入理解，大部分学习素材都可以在编译的程序中。至于图像显示的部分，就看VTK了，这部分我没有深究，就靠大家补充了


## 3.MITK中一些需要理解的概念
### 1. MITK插件
MITK中有三个概念需要理解：module,plugin,view，这里按我的理解简单解释三者的区别：
* module: 为了便于使用，将一些常用的算法或者视图模块封装而成的共享库，编写需要修改cmake文件，参见`MITK/Modules`中的内容
* plugin: 同样是共享库，但相比于module多了方便插拔的特性，编写不需要修改cmake，一般自己的扩展都使用plugin的方式
* view: MITK程序中导航栏上每个按钮对应一个view，一个plugin可以有多个view

### 2. MITK编译
MITK有源码目录，与superbuild目录，编译好的程序中一切修改都是对MITK源码目录中的文件进行的修改，因此即使编译了两份程序，如果共用的是同一份源码目录，那么是一样的

### 3. MITK其他重要概念
请参考 *[MITK官方文档](http://docs.mitk.org/nightly/index.html)* 中Developer Manual/MITK Concepts部分

