import fetch from "node-fetch";
import NlqConstants from "./NlqConstants";

export class DappLookerNlqAPI {
    static async getSchemaName(query?:string,ownDataset?:boolean,userId?:number){
        let requestTimedOut: boolean = false;
        let controller: AbortController = new AbortController();
        const timeoutId: NodeJS.Timeout = setTimeout(() => {
            controller.abort();
            requestTimedOut = true;
        },NlqConstants.timeoutLimit);
        try{
            let schemaNameUrl: string = NlqConstants.getSchemaNameUrl;
            let fullAPIUrl:string;
            if(ownDataset && userId){
                fullAPIUrl = `${schemaNameUrl}&ownDataset=${ownDataset}&userId=${userId}`;
            }else{
                fullAPIUrl = `${schemaNameUrl}?q=${query}`;
            }
            console.log(`Calling DappLooker API: ${fullAPIUrl}`);
            let resObject = await fetch(fullAPIUrl, {
                signal: controller.signal
            });
            const successResponseCode = [200, 201, 202, 203, 204];
            if (successResponseCode.includes(resObject.status)) {
                return await resObject.json();
            } else {
                let errorDetails: string = await resObject.text();
                return {
                    msg: `Failed to get response from DappLooker API, error code: ${resObject.status}, error: ${errorDetails}`
                };
            }
        } catch (e: any) { 
            if (requestTimedOut) {
                return {
                    msg: "Connection timeout"
                }
            }
            return {
                msg: `Exception getting result from DappLooker API, ${e.message}`,
            };
        }finally{
            clearTimeout(timeoutId);
        }
    }
    static async getNlqData( apiKey: string, question: string, getSchemaName: string) {
        let requestTimedOut: boolean = false;
        const controller: AbortController = new AbortController();
        const timeoutId: NodeJS.Timeout = setTimeout(() => {
            controller.abort();
            requestTimedOut = true;
        }, NlqConstants.timeoutLimit);
        try {
                let nlqAPIUrl: string = NlqConstants.getNlqDetailUrl;
                let fullAPIUrl: string = `${nlqAPIUrl}?api_key=${apiKey}`;
                const requestBody = {
                    question: question,
                    getSchemaName: getSchemaName
                }
                console.log(`Calling DappLooker API: ${fullAPIUrl}`);
                let resObject = await fetch(fullAPIUrl, {
                    body: JSON.stringify(requestBody),
                    signal: controller.signal
                });
                const successResponseCode = [200, 201, 202, 203, 204];
                if (successResponseCode.includes(resObject.status)) {
                    return await resObject.json();
                } else {
                    let errorDetails: string = await resObject.text();
                    return {
                        msg: `Failed to get response from DappLooker API, error code: ${resObject.status}, error: ${errorDetails}`
                    };
                } 
        } catch (e: any) {
            if (requestTimedOut) {
                return {
                    msg: "Connection timeout"
                }
            }
            return {
                msg: `Exception getting result from DappLooker API, ${e.message}`,
            };
        } finally {
            clearTimeout(timeoutId);
        }
    }
}

export default DappLookerNlqAPI;
