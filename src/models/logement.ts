export class Logement{
    public id: string;
    public title: string;
    public cover: string;
    public pictures: string[];
    public description: string;
    public hostName: string;
    public hostImg: string;
    public rating: string;
    public location: string;
    public equipments: string[];
    public tags: string[];

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.cover = data.cover;
        this.pictures = data.pictures;
        this.description = data.description;
        this.hostName = data.host.name;
        this.hostImg = data.host.picture;
        this.rating = data.rating;
        this.location = data.location;
        this.equipments = data.equipments;
        this.tags = data.tags;
    }
}
