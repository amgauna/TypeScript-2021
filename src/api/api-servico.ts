uploadImage(componentId, image) {
        const formData: FormData = new FormData();
        formData.append('Image', image, image.name);
        formData.append('ComponentId', componentId);
        return this.http.post('/api/dashboard/UploadImage', formData);
    }
