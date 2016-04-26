# [S01E02] API Dasar Node.js

## Outlines

1. API di Node.js
2. Menggunakan API Node.js
3. Menggunakan API dari package lain

### API di Node.js

Ada 2 macam API di Node.js berdasarkan cara eksekusinya, yakni sync dan async.
Sync melakukan sesuatu dengan sinkron, tidak ada proses lain boleh berjalan sebelum proses sync tersebut selesai.
Async melakukan sesuatu dengan asinkron, proses lain bisa tetap jalan sambil menunggu proses ini selesai.

Untuk sync, perlakuannya bisa seperti variable assignment biasa, namun untuk async, penggunaannya sedikit rumit karena kita menunggu proses yang kita tidak tau kapan selesainya, tapi kita tahu suatu saat akan selesai, dengan memberi argumen berupa callback. Fungsi yang akan di panggil jika proses tersebut selesai. Atau bisa disebut sebagai notifikasi.

1. Callback

Callback adalah salah satu cara yang digunakan dalam menjalankan method/fungsi yang asinkron.
Penggunaannya adalah sebagai berikut

```
fs.readFile('fileName', (err, source) => {
    fs.writeFile('targetFileName', source, (err) => {
        if(err) throw err;
    })
})
```
2. Promise

Promise adalah bentuk lain dari callback tapi lebih editor friendly karna tidak menjerumuskan kita dalam lubang callback hell.

```
someLibrary.doSomething(args)
.then((result) => {
    return anotherPromise;
})
.then((resultOfAnotherPromise) => {
    return anotherPromiseFromAnotherGalaxy;
})
.then((resultOfAnotherPromiseFromAnotherGalaxy))
.then()
.then()
.then()
...
.catch((err) => {
    throw err
})
```


###Menggunakan API Node.js

Semua API Node.js bisa dilihat di https://nodejs.org/dist/latest-v5.x/docs/api/
Feel free to browse them.

API apa saja yang disediakan Node.js? Bisa dilihat di link diatas.

TL;DR! just tell me!

😅 Http client-server, TCP client-server, FileSystem read-write, OS informations, Fork Process (Cluster), Child Process (Spawn), Crypto, Timers, etc...

Untuk cara penggunaannya, nativenya berupa callback. Disarankan melakukan apapun di Node.js dengan asinkron (callback) dan hindari blocking process (sync). Karna Sync process memblokir semua konsumsi CPU untuk dirinya sendiri sampai dirinya selesai.

Untuk penggunaan, bisa buka lagi link API diatas. Cukup panggil API tersebut dan gunakan.
```
var fs = require('fs');
// fs is yours now
```

###Menggunakan API External dari npmjs.com

Selain API built in, Node.js juga bisa menggunakan API yang dibuat oleh pengguna Node.js lain yang di share di npmjs.com. Setidaknya ada 200 ribu package lebih yang siap pakai. Hanya saja kita harus menginstallnya dengan cara 
```
$ npm install --save namapackage
```

Untuk cara penggunaannya bervariasi, ada yang menggunakan callback maupun promise. Lihat penggunaan di halaman `namapackage` di npmjs.com untuk lebih detail dalam penggunaannya.