import type {CollectionConfig} from "payload";

export const imut: CollectionConfig = {
    slug : "imut",
    access : {
        read: () => true,
    },
    fields :[
        {
            name: "siapa",
            type: "text",
            required: true,
        },
        {
            name: "aku",
            type: "text",
        }
    ], 
}