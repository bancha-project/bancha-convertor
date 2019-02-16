# bancha-convertor
いろいろ変換しちゃう

GitHub Pages: https://bancha-project.github.io/bancha-convertor/

## 開発方法
cloneして、package.jsonがある場所で
```
yarn install
```
してモジュールをインストールする。

```
yarn watch
```
でウォッチしつつ差分ビルドする。

```
yarn build
```
で普通にビルドする。

/docs/index.html をブラウザで開く。

```
yarn start
```
で http://localhost:9000/docs/ を開いてもOK。  


## ページを追加するには
1. src/pages 以下にSample.vue を作成

2. Nav.vueにリンクを追加
```
            <li>
              <router-link to="/sample">
                  Sample的な
              </router-link>
            </li>
```

3. index.tsに、import と path を追加
```
import Sample from "./pages/Sample.vue"
~~~
{ path: '/sample', component: Sample },
```
