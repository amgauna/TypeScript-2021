// Defina uma variável padrão para o arquivo selecionado.

fileToUpload: File = null;

// Crie a função que você usa no (change)evento de sua tag de entrada de arquivo:

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

// Se você deseja lidar com a seleção de vários arquivos, pode iterar através dessa matriz de arquivos.
// Agora crie a função de upload de arquivo chamando você file-upload.service:

uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

