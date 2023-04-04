export interface IApp{
    title: string,
    description:{
        text: string,
        sensitive_data: string,
        user_data: string,
        contact_information: string,
        location_services: string,
        in_app_purchases: string,
        advertising: string,
        age_rating: string,
        target_group: string
    },
    image_name: string,
    image_alt?: string,
    accept_cons: IConsequence[],
    decline_cons: IConsequence[]
}


export interface IConsequence{
    text: string,
    reputation?: number,
    contentment?: number,
    privacy?: number,
    revenue?: number
}