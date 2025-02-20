import {
    GitGraphIcon as Git,
    Cloud,
    Users,
    Share2,
    Code,
    Brain,
    PiIcon as Api,
    GitGraphIcon as GraphQL,
    Shield,
} from "lucide-react"

interface ISkillGroup {
    name: string;
    skillArr: ISkill[];

}
interface ISkill {
    name: string
    value: number
}

//10 = full marks
export const skillGroups: ISkillGroup[] = [
    {
        name: "Frontend Technologies",
        skillArr: [
            { name: "HTML5", value: 9 },
            { name: "CSS3", value: 9 },
            { name: "JavaScript", value: 8.5 },
            { name: "ReactJS", value: 8.5 },
            { name: "TypeScript", value: 8 },
            { name: "jQuery", value: 7.5 },
            { name: "PnPjs(Spfx)", value: 8.5 }
        ]
    },
    {
        name: "UI Style",
        skillArr: [
            { name: "Fluent UI", value: 8.5 },
            { name: "Ant Design", value: 8.5 },
            { name: "Material-UI (MUI)", value: 8 }
        ]
    },
    {
        name: "Backend Technologies",
        skillArr: [
            { name: "C#", value: 8 },
            { name: "ASP.NET", value: 8 },
            { name: "Swagger Tool", value: 7.5 },
        ]
    },
    {
        name: "Mobile Develop Technologies",
        skillArr: [
            { name: "Flutter (Dart)", value: 7.5 }
        ]
    },
    {
        name: "Database Technologies",
        skillArr: [
            { name: "Firebase", value: 7 },
            { name: "Microsoft SQL Server", value: 7.5 },
            { name: "SQL Language", value: 7.5 }
        ]
    },
    {
        name: "Language",
        skillArr: [
            { name: "Cantonese", value: 5 },
            { name: "Mandarin", value: 4 },
            { name: "English", value: 3 },
        ]
    },
];


export const otherTechnologies = [
    { name: "Git", icon: Git },
    { name: "Netlify", icon: Cloud },
    { name: "Azure User Group", icon: Users },
    { name: "SharePoint Setup", icon: Share2 },
    { name: "SPFx Develop", icon: Code },
    { name: "AI API connection", icon: Brain },
    { name: "RESTful API", icon: Api },
    { name: "GraphQL", icon: GraphQL },
    { name: "Networking Security", icon: Shield },
]