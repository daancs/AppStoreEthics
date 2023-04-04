import { IApp } from "./IApp";

export default function getData(): IApp[] {
    return [
        {
            title: "Bargain",
            description: {
                text: "App where the users can purchase and sell a range of second-hand products, such as shoes, clothes, and furniture. The seller is managing the shipment.",
                sensitive_data: "yes",
                user_data: "yes",
                contact_information: "yes",
                location_services: "yes",
                in_app_purchases: "no",
                advertising: "yes",
                age_rating: "12+",
                target_group: "anyone"
            },
            image_name: "mySpyImage",
            accept_cons: [
                {
                    text: "This app made App Store gain credibility in sustainability",
                    reputation: 50
                },
                {
                    text: "App Store increased in users",
                    revenue: 50
                },
                {
                    text: "Users liked the app because they earned money from selling old things",
                    contentment: 50
                },
                {
                    text: "Some of the users gave out sensitive data to sellers",
                    privacy: -25
                }
            ],
            decline_cons: [
                {
                    text: "App Store users could not find sustainable options for shopping",
                    reputation: -25,
                    revenue: -25,
                    contentment: -25
                },
                {
                    text: "Potential users did not have to share sensitive data",
                    privacy: 50
                }
            ]
        }
    ]
}

