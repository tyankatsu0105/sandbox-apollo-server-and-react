https://qiita.com/ttiger55/items/50d88e9dbf3039d7ab66

- entity => application/businesses/{name}/entity.ts アプリケーションで利用するデータの型情報
<!-- - useCase => application/businesses/{name}/useCase.ts  使いみちがpresenterがあることでなくなってしまっているような気がする -->
- repository => application/businesses/{name}/repository.ts 実質 DTO data とアプリケーションデータの変換
- presenter => ui/store/domain/{name}/presenter.ts UI で利用するロジックとか型情報とか
