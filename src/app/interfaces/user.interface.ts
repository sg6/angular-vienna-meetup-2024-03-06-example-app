export interface User {
    username?: string;
    name?: string;
    role: 'Visitor' | 'User' | 'Admin';
}