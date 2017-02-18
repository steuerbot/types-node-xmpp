import {Component} from './index';

let component = new Component({
    jid: 'test.test.test',
    password: 'password',
    host: 'test.test',
    port: 1234
});


component.on('online', function () {
});

component.on('stanza', function (ignored: any) {
});

component.end();
