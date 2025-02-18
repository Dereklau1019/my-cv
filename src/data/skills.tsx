interface ISkillGroup {
    name: string;
    skillArr: ISkill[];

}
interface ISkill {
    name: string
    value: number
}


export const skillGroups: ISkillGroup[] = [
    {
        name: "Frontend Technologies",
        skillArr: [
            { name: "HTML5", value: 10 },
            { name: "CSS3", value: 5 },
            { name: "JavaScript", value: 5 },
            { name: "ReactJS", value: 5 },
            { name: "TypeScript", value: 5 },
            { name: "jQuery", value: 4 },
            { name: "PnPjs(Spfx)", value: 4 }
        ]
    },
    {
        name: "UI Style",
        skillArr: [
            { name: "Fluent UI", value: 5 },
            { name: "Ant Design", value: 5 },
            { name: "Material-UI (MUI)", value: 4.5 }
        ]
    },
    {
        name: "Backend Technologies",
        skillArr: [
            { name: "C#", value: 5 },
            { name: "ASP.NET", value: 5 },
            { name: "Swagger", value: 5 },
        ]
    },
    {
        name: "Mobile Develop Technologies",
        skillArr: [
            { name: "Flutter (Dart)", value: 4 }
        ]
    },
    {
        name: "Database Technologies",
        skillArr: [
            { name: "Firebase", value: 5 },
            { name: "Microsoft SQL Server", value: 5 }
        ]
    },
    {
        name: "Other Tools",
        skillArr: [
            { name: "ChatGPT", value: 4 },
            { name: "V0.dev", value: 4 },
            { name: "Windsurf", value: 3 },
            { name: "Cursor", value: 4 },
            { name: "Git (GitHub, GitLab)", value: 5 },
            { name: "Netlify", value: 4 }
        ]
    },
    {
        name: "More Technologies",
        skillArr: [
            { name: "Azure User Group", value: 3 },
            { name: "SharePoint Setup (2016, 2019, Online)", value: 4 },
            { name: "Microsoft SharePoint SPFx Develop", value: 5 },
            { name: "AI API connection", value: 4 },
            { name: "RESTful API", value: 5 },
            { name: "GraphQL", value: 4 },
            { name: "Networking Security", value: 4 },
            { name: "Fiber knowledge", value: 3 }
        ]
    },
    {
        name: "Language",
        skillArr: [
            { name: "Cantonese", value: 5 },
            { name: "Mandarin", value: 4 },
            { name: "English", value: 3 },
        ]
    }
];
