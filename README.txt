…or create a new repository on the command line

echo "# TypeScript2024" >> README.md
git init
git add README.md
git commit -m "Curso TypeScript"
git commit -m "Curso TypeScript. Teoría tipos de datos"
git branch -M main
git remote add origin https://github.com/RenegadeAsturias/TypeScript2024.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/RenegadeAsturias/TypeScript2024.git
git branch -M main
git push -u origin main


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Inicio curso + instalaciones:

npm install -g typescript 
--Para proyectos: npm install typescript --save-dev

> md typescript  
> git init

> md bases + [crear index.html y app.ts]
> tsc --init

> Ojo error por la política de seguridad de Power Shell, resuelto en:
https://www.cdmon.com/es/blog/la-ejecucion-de-scripts-esta-deshabilitada-en-este-sistema-te-contamos-como-actuar

> Abrir Power Shell en modo administrador

Instrucciones:

Una vez abierta la aplicación ejecutaremos el siguiente comando:
Get-ExecutionPolicy -List ​

PS C:\Users\Asturias\Desktop\typescript> Get-ExecutionPolicy -List

Scope                                             ExecutionPolicy
-----                                             ---------------
MachinePolicy                                     Undefined
UserPolicy                                        Undefined
Process                                           Undefined
CurrentUser                                       Undefined
LocalMachine                                      Undefined

Esto nos muestra que la política de ejecución no está definida. Para poder corregir esto deberemos ejecutar el siguiente comando:
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ​


PS C:\Users\Asturias\Desktop\typescript> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Cambio de directiva de ejecución
La directiva de ejecución le ayuda a protegerse de scripts en los que no confía. Si cambia dicha directiva, podría
exponerse a los riesgos de seguridad descritos en el tema de la Ayuda about_Execution_Policies en
http://go.microsoft.com/fwlink/?LinkID=135170. ¿Desea cambiar la directiva de ejecución?
[S] Sí  [N] No  [U] Suspender  [?] Ayuda (el valor predeterminado es "S"): S
PS C:\Users\Asturias\Desktop\typescript>


Si volvemos a listar los permisos podremos ver que el resultado ha cambiado y para el usuario actual la política de ejecución tiene el valor “RemoteSigned”.
Get-ExecutionPolicy -List

PS C:\Users\Asturias\Desktop\typescript> Get-ExecutionPolicy -List

Scope                                             ExecutionPolicy
-----                                             ---------------
MachinePolicy                                     Undefined
UserPolicy                                        Undefined
Process                                           Undefined
CurrentUser                                       RemoteSigned
LocalMachine                                      Undefined

 ​

Finalmente, si volvemos a ejecutar el script que inicialmente nos devolvía el error, veremos que ahora sí permite su ejecución:
> tsc --init ................. Creado!!!

PS C:\Users\Asturias\Desktop\typescript\bases> tsc --init

Created a new tsconfig.json with:                                                                             
                            TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig
PS C:\Users\Asturias\Desktop\typescript\bases>






