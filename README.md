# popup-card

popup-card is simple and imperfection

devDependencies jquery. font awesome

  1. [Examples](https://github.com/k-atom/popup-card#Examples)
  1. [Param](https://github.com/k-atom/popup-card#Param)

## Examples
```javascript
// use jquery3.x

// create popup card
createPopup({
  body: `<div>card body</div>`,
  close: 'false',
  head: $('<div>', {
    class: 'class'
    text: 'card head'
  }),
  tail: 'card tail',
  type: 'default'
});
```

## Param

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
  // default class 'fa fa-times'
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
