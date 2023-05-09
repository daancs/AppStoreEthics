// Description of an app
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


// Each consequence can affect one or more stats 
// If several stats are affected, con should be the stat that is mostly affected
// con should be "revenue", "contentment", "privacy" or "revenue"
export interface IConsequence{
    text: string,
    con: string,
    reputation?: number,
    contentment?: number,
    privacy?: number,
    revenue?: number
}