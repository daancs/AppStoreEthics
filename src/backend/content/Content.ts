import { IApp } from "./IApp";

export default function getData(): IApp[] {
    return [
        {
            title: "bargain.",
            description: {
                text: "App where the users can purchase and sell a range of second-hand products, such as shoes, clothes, and furniture. The seller is managing the shipment.",
                sensitive_data: "Yes",
                user_data: "Yes",
                contact_information: "Yes",
                location_services: "Yes",
                in_app_purchases: "No",
                advertising: "Yes",
                age_rating: "18+",
                target_group: "Anyone"
            },
            image_name: "app1_bargain.png",
            accept_cons: [
                {
                    text: "This app made App Store gain credibility in sustainability",
                    con: "reputation",
                    reputation: 25
                },
                {
                    text: "App Store increased in users",
                    con: "revenue",
                    revenue: 25
                },
                {
                    text: "Users liked the app because they earned money from selling old things",
                    con: "contentment",
                    contentment: 25
                },
                {
                    text: "Some of the users gave out sensitive data to sellers",
                    con: "privacy",
                    privacy: -12.5
                }
            ],
            decline_cons: [
                {
                    text: "App Store users could not find sustainable options for shopping",
                    con: "reputation",
                    reputation: -12.5,
                    revenue: -12.5,
                    contentment: -12.5
                },
                {
                    text: "Potential users did not have to share sensitive data",
                    con: "privacy",
                    privacy: 25
                }
            ]
        },
        {
            title: "SnailChat",
            description: {
                text: "App where users can chat and send pictures to each other. SnailChat allows users to share their location. To lower the risk of stalking or being pressured to share location constantly, users can pause sharing without sending the other party a notification.",
                sensitive_data: "Yes",
                user_data: "Yes",
                contact_information: "Yes",
                location_services: "Yes",
                in_app_purchases: "No",
                advertising: "No",
                age_rating: "12+",
                target_group: "Anyone"
            },
            image_name: "app2_Snailchat.png",
            accept_cons: [
                {
                    text: "The users of SnailChat could control shared data and location",
                    con: "privacy",
                    privacy: 25
                },
                {
                    text: "The app became popular",
                    con: "revenue",
                    revenue: 25
                },
                {
                    text: "Some users received unwanted messages and pictures sent to them from strangers",
                    con: "contentment",
                    contentment: -12.5
                }
            ],
            decline_cons: [
                {
                    text: "App Store users sought apps with the possibility to share their location on their own terms",
                    con: "privacy",
                    privacy: -12.5,
                    revenue: -12.5
                },
                {
                    text: "No users received unwanted messages or pictures from strangers",
                    con: "contentment",
                    contentment: 25
                }
            ]
        },
        {
            title: "EyeShare",
            description: {
                text: "App where users can connect to old and new friends. EyeShare allows users to post their thoughts, location, and images.",
                sensitive_data: "Yes",
                user_data: "Yes",
                contact_information: "Yes",
                location_services: "Yes",
                in_app_purchases: "No",
                advertising: "Yes",
                age_rating: "12+",
                target_group: "Anyone"
            },
            image_name: "app3_EyeShare.png",
            accept_cons: [
                {
                    text: "Users could communicate with friends and join groups of interest",
                    con: "contentment",
                    contentment: 25
                },
                {
                    text: "The app became popular",
                    con: "revenue",
                    revenue: 25
                },
                {
                    text: "A scandal emerges that the company has shared user data with a third party. The data was used to influence a democratic election.",
                    con: "reputation",
                    reputation: -25,
                    privacy: -25
                }
            ],
            decline_cons: [
                {
                    text: "App Store users sought apps with the possibility to connect with people",
                    con: "contentment",
                    contentment: -25,
                    revenue: -25
                },
                {
                    text: "No sensitive data was shared and could not be used by third parties in an illegal context",
                    con: "privacy",
                    privacy: 25,
                    reputation: 25
                }
            ]
        },
        {
            title: "TreasureQuest",
            description: {
                text: "App where users can complete a treasure hunt. TreasureQuest allows the user to play different and exciting levels.",
                sensitive_data: "Yes",
                user_data: "No",
                contact_information: "No",
                location_services: "No",
                in_app_purchases: "Yes",
                advertising: "Yes",
                age_rating: "0+",
                target_group: "Anyone"
            },
            image_name: "app4_TreasureQuest.png",
            accept_cons: [
                {
                    text: "Some users had fun playing TreasureQuest",
                    con: "contentment",
                    contentment: 12.5
                },
                {
                    text: "The game prompts purchases to advance in the game and is aimed towards children",
                    con: "reputation",
                    reputation: -25
                },
                {
                    text: "TreasureQuest didn’t attract a big user base",
                    con: "revenue",
                    revenue: -25
                }
            ],
            decline_cons: [
                {
                    text: "Users are seeking new games on App Store",
                    con: "contentment",
                    contentment: -25
                },
                {
                    text: "No children bought Coins within the game and no scandal happened",
                    con: "reputation",
                    reputation: 12.5,
                    revenue: 12.5
                }
            ]
        },
        {
            title: "Qme",
            description: {
                text: "App where users can ask each other questions to exchange knowledge and information about a subject. The users can choose to be anonymous.",
                sensitive_data: "No",
                user_data: "No",
                contact_information: "No",
                location_services: "No",
                in_app_purchases: "No",
                advertising: "Yes",
                age_rating: "0+",
                target_group: "Anyone"
            },
            image_name: "app5_Qme.png",
            accept_cons: [
                {
                    text: "Users of Qme could be anonymous and comment without creating an account",
                    con: "privacy",
                    privacy: 12.5
                },
                {
                    text: "Users of Qme could say mean things without being held accountable",
                    con: "contentment",
                    contentment: -25
                },
                {
                    text: "App Store got a bad reputation for releasing Qme",
                    con: "reputation",
                    reputation: -25
                }
            ],
            decline_cons: [
                {
                    text: "Users are seeking the possibility to express opinions anonymously online",
                    con: "privacy",
                    privacy: -25
                },
                {
                    text: "App Store continued to have a good reputation because no one could be bullied on Qme",
                    con: "reputation",
                    contentment: 12.5,
                    reputation: 12.5
                }
            ]
        }
    ]
}

