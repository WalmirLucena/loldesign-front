interface IBody {
    email: string,
    password: string
}

interface ICall {
    origin: number,
    destiny: number,
    time: number,
    plan: number,
    name: string,
}

interface Call extends ICall{
    id:number,
    userId:number,
    price: number,
    priceWithPlan: number
}

interface IDelete {
    id:number,
    userId: number
}

interface IUser extends IBody {
    username:string
}

export type { IBody, ICall, Call,IDelete, IUser};