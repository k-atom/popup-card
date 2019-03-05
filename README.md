# popup-card

popup-card is simple and imperfection

devDependencies jquery. font awesome

  1. [Examples](https://github.com/k-atom/popup-card#Examples)
  1. [Param](https://github.com/k-atom/popup-card#Param)
     1. [createPopup](https://github.com/k-atom/popup-card#createpopup)
     1. [closePopup](https://github.com/k-atom/popup-card#closepopup)

## Examples
```javascript
// use jquery3.x

// create popup card
createPopup({
  // use Template literals
  body: `<div>card body</div>`,
  close: 'false',
  // use JQuery object
  head: $('<div>', {
    class: 'class'
    text: 'card head'
  }),
  // use String
  tail: 'card tail',
  type: 'default'
});
```

## Param

### createPopup()

* body
  * string | jquery object
  * object 
  ```javascript
  {
    class: string,
    content: string,
    // if overflow == true
    // set body class limit max-height(69vh)
    overflow: boolean
  }
  ```

* card_head
  * string | jquery object
  * object 
  ```javascript
  {
    class: string,
    content: string
  }
  ```

* close
  * boolean | string
  ```javascript
  // default false
  
  // if close: true
  // default class 'fa fa-times'
  
  // if you want use custom class
  // use object
  ```
  * object 
  ```javascript
  {
    class: string,
    content: string
  }
  ```

* head
  * string | jquery object
  * object 
  ```javascript
  {
    class: string,
    content: string
  }
  ```

* lock_body
  * boolean
  ```javascript
  // default true
  // body css('overflow-y', 'hidden')
  ```

* tail
  * string | jquery object
  * object 
  ```javascript
  {
    class: string,
    content: string
  }
  ```

* type
  * string

type |  color
----- | -----
danger | #d9534f
default | #ff98aa
green | #2ecc71

### closePopup()

## Contributing

### License

popup-card is [MIT licensed](https://github.com/k-atom/popup-card/blob/master/LICENSE).
