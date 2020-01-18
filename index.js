
require('fs')
    .writeFileSync('url.txt',
        'https://kodaktor.ru/api/req?name=' +
        encodeURIComponent('Виолетта') +
        '&fname=' +
        encodeURIComponent('Рунаева'),
        err => console.log(err)
    );
