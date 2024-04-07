# Toastia
this is a simple project for show toast in your project. you can use your own class and styles or use my own predefined.

## How to use it?
it's simple.
1. add link and script tag
```
<link href="/path/to/toastia.css" rel="stylesheet">
<script src="/path/to/toastia.min.js"></script>
```
2. initialize it
```
const toastia = new Toastia();

// you can pass your own options like this

const toastia = new Toastia(options);
```
3. call toast.
```
toastia.toast("this is a test","info");

//or

toastia.toastInfo("this is a test");

//or

toastia.toastInfo("<span>this is a test</span>");

// toastInfo, toastSuccess, toastWarning, toastError
```
4. if you use toast first parameter is toast text and second is type of toast that is info, success, warning, error.
   
5. done.

### Options.

|  option   |      value       |   default    |                                                      description                                                       |
| :-------: | :--------------: | :----------: | :--------------------------------------------------------------------------------------------------------------------: |
| duration  | number > 0 in ms |     2000     |                                                  how long toast show?                                                  |
|  timeout  | number > 0 in ms |     450      |                                                  how long hide toast?                                                  |
| position  |      string      |  "topRight"  |                               where should i show toast? one of key from positionClass.                                |
| childItem |      string      |     "li"     |                                       what type of child create for toast item?                                        |
| placement |      string      | "afterbegin" | how it show toast? from new to old? or old to new? only accept afterbegin for new to old and beforeend for old to new. |

#### Position class
this object is for add all type of class for each postion.

|   position   | value  |         default         |
| :----------: | :----: | :---------------------: |
|   topLeft    | string |   "toastia-top-left"    |
|  topCenter   | string |  "toastia-top-center"   |
|   topRight   | string |   "toastia-top-right"   |
|  bottomLeft  | string |  "toastia-bottom-left"  |
| bottomCenter | string | "toastia-bottom-center" |
| bottomRight  | string | "toastia-bottom-right"  |

#### Type class
this object is for add all type of class for each type.

|  type   | value  |      default      |
| :-----: | :----: | :---------------: |
|  info   | string |  "toastia-info"   |
| success | string | "toastia-success" |
| warning | string | "toastia-warning" |
|  error  | string |  "toastia-error"  |
|  none   | string |   "toast-item"    |

#### Animation class
this object is for add all type of class for each animation.

| animation | value  |      default       |
| :-------: | :----: | :----------------: |
|    add    | string | "toastia-fade-in"  |
|  remove   | string | "toastia-fade-out" |