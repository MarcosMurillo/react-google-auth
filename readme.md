Usar como esta no site
https://authenticatorapi.com/

mockar dados de user para consultar e guardar id e code auth {localStorage}

Parametros que a Api do authenticator usa:

metodo Pair:

appName: 'O nome do seu aplicativo, algo breve, mas reconhecível',
AppInfo: 'Normalmente o nome do usuario',
secretCode: 'Um código secreto que somente voce sabe',

exemplo de url: https://www.authenticatorapi.com/pair.aspx?AppName=ReactApp&AppInfo=MarcosMurillo&SecretCode=kwanj435

metodo validate:

https://www.authenticatorApi.com/Validate.aspx?Pin=146677&SecretCode=kwanj435
