!function() {
  $(document).ready(() =>
  {
    let textareaData,
        textareaDataString;

    textareaData = {
      // use Template literals
      body: `<div>card body</div>`,
      close: true,
      // use JQuery object
      head: {class: 'class',content: 'card head'},
      // use String
      tail: 'card tail',
      type: 'green'
    };
    textareaDataString = jsonToString(JSON.stringify(textareaData).split(/([{}\[\],])/g));

    $('#popup-card-data').val(textareaDataString);
    $('#popup-btn').on('click', () =>
    {
      let popupData;

      popupData = JSON.parse($('#popup-card-data').val() || '{}');
      createPopup(popupData);
    });
  });

  function jsonToString(jsonData) {
    if (Array.isArray(jsonData) === 'object') {
      alert('data no array');
      return {};
    }
    else {
      let data,
          stack;

      data = '';
      stack = 0;
      jsonData.forEach((value, key) => {
        if (value !== '') {
          let matchArr = value.match(/^[{},]$/g);

          if (matchArr && matchArr[0] === '}')
            stack--;

          if (value !== ' ' && value !== ',' && !/^\)/g.test(value))
            for (let i = 0; i < stack; i++)
            {
              value = '  ' + value;
            }

          if (matchArr)
            switch (matchArr[0]) {
              case '{':
                value += '\n'
                stack++;
                break;
              case '}':
                value = '\n' + value
                break;
              case ',':
                value += '\n'
                break;
            }

          data += value;
        }
      });

      return data;
    }
  }
}();
