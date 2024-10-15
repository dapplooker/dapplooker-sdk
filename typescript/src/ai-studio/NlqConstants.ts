
class NLQConstants {

    public get getNlqDetailUrl(): string {
        return `https://api.dapplooker.com/nlq`;
    }

    public get getSchemaNameUrl(): string {
        return `https://api.dapplooker.com/projects`;
    }

    public get timeoutLimit(): number{
        return 15000; // 15 sec connection timeout
    }
}

export default new NLQConstants();
