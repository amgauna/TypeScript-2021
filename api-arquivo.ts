OnSubmit(Image) {
    this.dashboardService.uploadImage(this.componentId, this.fileToUpload).subscribe(
      data => {
        console.log('done');
        Image.value = null;
        this.imageUrl = "/assets/img/logo.png";
      }
    );
  }
