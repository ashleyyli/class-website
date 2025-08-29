export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    admin: boolean;
};

export type Activity = {
    id: number,
    title: string,
    status: Status,
    date?: Date,
    description: string,
    votes: number,
    created_at: Date,
    author: string
};

export type Opportunity = {
    id: number,
    title: string,
    status: Status,
    start_date: Date,
    end_date: Date,
    description: string,
    min_hours: number,
    max_hours: number,
    created_at: Date,
    author: string,
}

export type Schedule = {
    id: number,
    title: string,
    published: boolean,
    date: Date,
    location: string,
    description?: string,
}

export type Status = "Pending" | "Approved" | "Denied" | "Archived" | "Planned";