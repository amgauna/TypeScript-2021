// TypeScript: um verificador de tipo estático

// O TypeScript verifica se há erros em um programa antes da execução e o faz com base nos tipos de valores , é um verificador de tipo estático . Por exemplo, o último exemplo acima contém um erro devido ao tipo de obj. Aqui está o erro encontrado pelo TypeScript:

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
