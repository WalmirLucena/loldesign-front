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
    price: number,
    priceWithPlan: number
}

export type { IBody, ICall, Call};