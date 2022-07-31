# Todo App with Authentication (Laravel API + Next.js)

Basic todo app with authentication created as a part of tutorial to learn Laravel API & Next.js

Laravel APIとNext.jsの勉強の為に作った認証機能付きのTodoアプリです。

## How to Start

### Docker

```zsh
docker-compose up -d
```

### backend

`.env`ファイルを作成して、`.env.example`の内容をコピー

```zsh
cd backend
composer install
php artisan migrate
```

http://localhost

http://localhost:8080 (pma)

### frontend

`.env`ファイルを作成して、`.env.example`の内容をコピー

```zsh
cd frontend
yarn install
yarn build
yarn start
```

http://localhost:3000

## キャッシュ関連のエラーが出た時

https://qiita.com/ucan-lab/items/1ff680bb897fa11be85d

```bash
$ php artisan config:clear
```

OR

```bash
$ chmod -R 775 storage bootstrap/cache
```

## How to deploy to heroku

以下の記事を参考に設定を行う
https://zenn.dev/shimotaroo/articles/8896edaf30f57d

### frontend

`.env`の内容を書き換えてから下記コマンド

```zsh
yarn build
```

これで`backend/public`フォルダ内に現在の内容がコピーされる

### backend

- package.json内の`engines`の`node`と`npm`のバージョンがあってるか確認する
- `.env.heroku`を作成して、環境変数を編集する

`backend`ディレクトリに移動して以下

```zsh
git add .
git commit -m 'heroku deploy'
git push heroku master
```
