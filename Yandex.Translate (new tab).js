// This script translates the current page using Yandex.Translate. The result opens in a new tab.
// Copy it, delete all Enter and Space and save it as a bookmark in your browser.
javascript:
q=(document.location.href);
void(
    open(
        'https://translate.yandex.com/translate?lang=auto-auto&url='+escape(q),
        )
    );
