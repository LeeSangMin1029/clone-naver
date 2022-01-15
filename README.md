# naver-front
네이버를 비슷하게 따라해보자

### vscode에서 Deno 초기 설정<br>
F1 -> Deno: Initialize Workspace Configuration 클릭(필요한 설정값들만 Yes)<br>
현재 프로젝트에서 사용하고 있는 설정값<br>
```jsonc
{
  // .vscode/setting.json
  "prettier.printWidth": 100,
  "deno.enable": true,
  "deno.config": "./deno.json",
  "deno.importMap": "./import_map.json",
  "deno.suggest.imports.hosts": {
    "http://deno.land": false,
    "https://deno.land": false
  }
}
```

## etc
[naming-convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)<br/>
[folder-structure](https://www.robinwieruch.de/react-folder-structure)
