export class Logement{
    public id: String;
    public title: String;
    public cover: String;
    public pictures: String[];
    public description: String;
    public host: Object;
    public rating: String;
    public location: String;
    public equipments: String[];
    public tags: String[];

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.cover = data.cover;
        this.pictures = data.pictures;
        this.description = data.description;
        this.host = data.host;
        this.rating = data.rating;
        this.location = data.location;
        this.equipments = data.equipments;
        this.tags = data.tags;
    }
}
