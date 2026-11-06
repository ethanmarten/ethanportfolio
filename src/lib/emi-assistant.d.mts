export type EmiOptions = {env?: Record<string,string|undefined>;send?:typeof fetch;now?:()=>number};
export function createEmiHandler(options?:EmiOptions):(request:Request)=>Promise<Response>;
export function guideReply(question:string,language?:string):{message:string;links:{label:string;url:string}[];topic:string};
