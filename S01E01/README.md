# [S01E01] Instalasi Node.js dan Set Up NPM Project

## Kurikulum
1. Peserta bisa menginstall Node.js di sistem operasi yang sedang di pakai.
2. Peserta bisa menginstall Node.js di Linux (untuk server).
3. Peserta bisa menginisialisasi project berbasis Node.js.
4. Peserta mengerti sintaks dasar Javascript setidaknya ES5.
5. Peserta bisa mengeksekusi file Javascript di Node.js.

## Materi

### Install Node.js di Linux

Untuk menginstall Node.js di linux, bisa menggunakan berbagai cara. Namun sangat direkomendasikan untuk menggunakan NVM (Node Version Manager) agar mudah dalam mengganti versi Node.js yang di inginkan tanpa perlu reinstall apapun.

Menginstall dengan NVM

Gunakan perintah berikut untuk menginstall NVM

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```

atau 

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```

Jika sudah selesai tutup terminal lalu buka kembali agar efeknya terasa (.bashrc), test dengan perintah `nvm`. Jika muncul help darin NVM, artinya berhasil.

Lalu tampilkan semua versi Node.js yang tersedia dengan perintah `nvm ls-remote`.
Install Node.js dengan versi yang dipilih dengan perintah `nvm install v5.7.1` jika ingin menginstall versi v5.7.1

Untuk menjadikan versi tersebut sebagai default gunakan perintah `nvm alias default v5.7.1`.

### Inisialisasi Project Node.js

Mengawali project dengan perintah `npm init`. Perintah ini membantu kita dalam membuat file `package.json`. File ini adalah tempat dimana informasi project kita berada. Terutama informasi berupa package dependency yang project kita butuhkan agar project kita bisa berjalan. Lalu darimana datangnya package dependency tersebut? npmjs.com.

Npmjs.com adalah pusat library Node.js atau bisa disebut sebagai Node Package Manager (NPM). 
Disana kita dapat mencari library yang kita butuhkan seperti redis client, kafka client, mongodb client, api router, dan sebagainya.

Selain mengimpan informasi daftar dependency project kita, `package.json` juga membantu dalam mempersingkat command dengan `npm scripts` seperti `npm install; npm test; npm start;` yang isinya bisa dituliskan di bagian `scripts` di `package.json`.

![Alt text](https://github.com/malangjs/kurikulum-node-season-1/blob/master/S01E01/assets/package-json.png)


Untuk menginisialisasi project baru, silakan buat foldernya terlebih dahulu di terminal lalu masuk ke folder tersebut dan jalankan `npm init`.

Lalu anda akan ditanyai beberapa hal tentang project baru tersebut oleh npm. Jawab sesuai kebutuhan dan jika sudah oke, masukkan `yes`. Selesai.

![Alt text](https://github.com/malangjs/kurikulum-node-season-1/blob/master/S01E01/assets/npm-init.png)


Mulailah buat file Javascript untuk dieksekusi oleh Node.js seperti:

```
console.log('Hello world!')
```

![Alt text](https://github.com/malangjs/kurikulum-node-season-1/blob/master/S01E01/assets/hello-js.png)

Lalu simpan file tersebut dengan nama `hello.js`.
Cara menjalankannya?

### Menjalankan file Javascript

Menjalankan file javascript bisa menggunakan perintah
```sh
node hello.js
```
![Alt text](https://github.com/malangjs/kurikulum-node-season-1/blob/master/S01E01/assets/run-hello.png)

Jika ingin mengeksekusi file `hello.js` yang baru saja dibuat diatas.
