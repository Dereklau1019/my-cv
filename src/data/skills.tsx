interface ISkillGroup {
    title: string;
    skillArr: ISkill[];

}
interface ISkill {
    title: string
    star: number
}


export const skillGroups: ISkillGroup[] = [
    {
        title: "Frontend Technologies",
        skillArr: [
            { title: "HTML5", star: 5 },
            { title: "CSS3", star: 5 },
            { title: "JavaScript", star: 5 },
            { title: "ReactJS", star: 5 },
            { title: "TypeScript", star: 5 },
            { title: "jQuery", star: 4 },
            { title: "PnPjs(Spfx)", star: 4 }
        ]
    },
    {
        title: "UI Style",
        skillArr: [
            { title: "Fluent UI", star: 5 },
            { title: "Ant Design", star: 5 },
            { title: "Material-UI (MUI)", star: 4.5 }
        ]
    },
    {
        title: "Backend Technologies",
        skillArr: [
            { title: "C#", star: 5 },
            { title: "ASP.NET", star: 5 },
            { title: "Swagger", star: 5 },
        ]
    },
    {
        title: "Mobile Develop Technologies",
        skillArr: [
            { title: "Flutter (Dart)", star: 4 }
        ]
    },
    {
        title: "Database Technologies",
        skillArr: [
            { title: "Firebase", star: 5 },
            { title: "Microsoft SQL Server", star: 5 }
        ]
    },
    {
        title: "Other Tools",
        skillArr: [
            { title: "ChatGPT", star: 4 },
            { title: "V0.dev", star: 4 },
            { title: "Windsurf", star: 3 },
            { title: "Cursor", star: 4 },
            { title: "Git (GitHub, GitLab)", star: 5 },
            { title: "Netlify", star: 4 }
        ]
    },
    {
        title: "More Technologies",
        skillArr: [
            { title: "Microsoft Azure User Group", star: 3 },
            { title: "SharePoint Setup (2016, 2019, Online)", star: 4 },
            { title: "Microsoft SharePoint SPFx Develop", star: 5 },
            { title: "AI API connection", star: 4 },
            { title: "RESTful API", star: 5 },
            { title: "GraphQL", star: 4 },
            { title: "Networking Security", star: 4 },
            { title: "Fiber knowledge", star: 3 }
        ]
    },
    {
        title: "Language",
        skillArr: [
            { title: "Cantonese", star: 5 },
            { title: "Mandarin", star: 4 },
            { title: "English", star: 3 },
        ]
    }
];
