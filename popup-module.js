/* version v0.1.0 */
function createPopup(options) {
    let card,
        card_body,
        card_head,
        card_tail,
        close_icon,
        insertHTML;

    if (!options.body && !(options.head || options.close || options.tail)) { return; }

    card = $('<div>', {
        class: 'popup__card scrollbar-custom',
        click: function(e) {
            e.stopPropagation();
        }
    });

    // add type
    // type is border top class card
    if (options.type && typeof options.type === 'string') {
        card.addClass('popup__card--' + options.type);
    }

    // add id
    // id is id attribute of card
    if (options.id && typeof options.id === 'string') {
        card.attr('id', options.id);
    }

    if (options.head || options.close) {
        card_head = $('<div>', {
            class: 'popup__card__head'
        });

        if (typeof options.card_head === 'string' || options.card_head instanceof jQuery == true) {
            card_head.append(options.card_head);
        }
        else if (typeof options.card_head === 'object') {
            if (options.card_head.class != undefined && typeof options.card_head.class === 'string') {
                card_head.addClass(options.card_head.class);
            }

            if (options.card_head.content != undefined && typeof options.card_head.content === 'string') {
                card_head.append(options.card_head.content);
            }
        }

        if (options.head) {
            let title_el = $('<div>', {
                class: 'title'
            });

            if (typeof options.head === 'string' || options.head instanceof jQuery == true) {
                title_el.append(options.head);
            }
            else if (typeof options.head === 'object') {
                if (options.head.class != undefined && typeof options.head.class === 'string') {
                    title_el.addClass(options.head.class);
                }

                if (options.head.content != undefined && typeof options.head.content === 'string') {
                    title_el.append(options.head.content);
                }
            }

            card_head.append(title_el);
        }

        if (options.close) {
            let close_el = $('<div>', {
                class: 'close__icon',
                id: 'close-icon',
                click: () => { closePopup(); }
            });

            if (typeof options.close === 'boolean' && options.close === true) {
                close_el.addClass('fas fa-times');
            }
            else if (typeof options.close === 'string') {
                close_el.text(options.close);
            }
            else if (typeof options.close === 'object') {
                if (options.close.class != undefined && typeof options.close.class === 'string') {
                    close_el.addClass(options.close.class);
                }

                if (options.close.content != undefined && typeof options.close.content === 'string') {
                    close_el.text(options.close.content);
                }
            }

            card_head.append(close_el);
        }

        card.append(card_head);
    }

    if (options.body) {
        card_body = $('<div>', {
            class: 'popup__card__body'
        });

        if (typeof options.body === 'string' || options.body instanceof jQuery == true) {
            card_body.append(options.body);
        }
        else if (typeof options.body === 'object') {
            if (options.body.overflow == undefined || options.body.overflow != true) {
                card_body.addClass('popup__card__body--limit_height');
            }

            if (options.body.class != undefined && typeof options.body.class === 'string') {
                card_body.addClass(options.body.class);
            }

            if (options.body.content != undefined && typeof options.body.content === 'string') {
                card_body.append(options.body.content);
            }
        }

        card.append(card_body);
    }

    if (options.tail) {
        card_tail = $('<div>', {
            class: 'popup__card__tail'
        });

        if (typeof options.tail === 'string' || options.tail instanceof jQuery == true) {
            card_tail.append(options.tail);
        }
        else if (typeof options.tail === 'object') {
            if (options.tail.class != undefined && typeof options.tail.class === 'string') {
                card_tail.addClass(options.tail.class);
            }

            if (options.tail.content != undefined && typeof options.tail.content === 'string') {
                card_tail.append(options.tail.content);
            }
        }

        card.append(card_tail);
    }

    insertHTML = $('<div>', {
        class: 'popup__background',
        id: 'popup-background',
        click: () => { closePopup(); }
    });

    insertHTML.append(card);
    insertHTML.appendTo($('body'));

    if (options.lock_body === undefined || options.lock_body === true) {
        $('body').css('overflow-y', 'hidden');
    }
}

function closePopup() {
    let popupElement = $('#popup-background');

    if (popupElement.length != 0) {
        popupElement.last().remove();
        $('body').css('overflow-y', '');
    }
}
